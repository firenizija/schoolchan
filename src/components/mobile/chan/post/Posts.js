import React, { useEffect } from 'react';
import Post from './Post'
import { useSelector, useDispatch } from 'react-redux'
import { SetPosts, SetMyPosts, AddPost } from 'redux/actions/index';
import { useScrollPosition } from '@n8tb1t/use-scroll-position'

import './styles/posts.scss'
let lastPostId
let waitForMorePosts = false;
const Posts = ({ postType }) => {
    const dispatch = useDispatch();
    const socket = useSelector(state => state.socket);
    const posts = useSelector(state => state.posts);

    useEffect(() => {
        if (socket) {
            socket.on('posts', data => {
                if (data.length > 0) {
                    dispatch(SetPosts(data))
                    lastPostId = data[data.length - 1]._id
                }
            })
            socket.on('post', data => {
                dispatch(AddPost(data))
            })
            socket.on('morePosts', data => {
                if (data.length > 0) {
                    data.map(post => dispatch(AddPost(post)));
                    lastPostId = data[data.length - 1]._id
                    waitForMorePosts = false;
                }
            })
            socket.on('myPosts', myPosts => {
                dispatch(SetMyPosts(myPosts))
            });
        }

    }, [dispatch, socket]);

    useScrollPosition(({ prevPos, currPos }) => {
        const scrollProgress = (document.body.offsetHeight - window.innerHeight) + currPos.y;
        if (!waitForMorePosts && scrollProgress < 0) {
            socket.emit('getMorePosts', lastPostId);
            waitForMorePosts = true;
        }
    }, [posts],
        null,
        false,
        300)

    return (
        <ul className="posts">
            {posts[postType].map((post) => (
                <Post
                    key={post._id}
                    post={post}
                />
            ))}
        </ul>
    );
}

export default Posts;