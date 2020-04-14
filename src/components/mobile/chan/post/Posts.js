import React, { useState, useEffect } from 'react';
import Post from './Post'
import { useSelector, useDispatch } from 'react-redux'
import useForceUpdate from 'use-force-update'
import { SetPosts } from 'redux/actions/index';
import { useScrollPosition } from '@n8tb1t/use-scroll-position'

import './styles/posts.scss'
let lastPostId
const Posts = () => {
    const dispatch = useDispatch();
    const socket = useSelector(state => state.socket);
    const reduxPosts = useSelector(state => state.posts);
    const [posts, setPosts] = useState(reduxPosts.posts);
    const forceUpdate = useForceUpdate();
    let wait = false;//wait for more posts

    useEffect(() => {
        if (socket) {
            socket.on('posts', data => {
                dispatch(SetPosts(data))
                setPosts(data);
                lastPostId = data[data.length - 1]._id
            })
            socket.on('post', data => {
                // setPosts([data, ...posts]);
                setPosts([...posts, data]);
            })
            socket.on('morePosts', data => {
                setPosts(posts.concat(data));
                lastPostId = data[data.length - 1]._id
                // eslint-disable-next-line react-hooks/exhaustive-deps
                wait = false;
            })
        } else {
            forceUpdate();
        }
    }, [forceUpdate, socket, posts, dispatch]);
    useEffect(() => {
        dispatch(SetPosts(posts));
    }, [posts, dispatch])
    useScrollPosition(({ prevPos, currPos }) => {
        const scrollProgress = (document.body.offsetHeight - window.innerHeight) + currPos.y;
        if (!wait && scrollProgress < 0) {
            socket.emit('getMorePosts', lastPostId);
            wait = true;
        }
    }, [posts],
        null,
        false,
        300)
    return (
        <ul className="posts">
            {posts.map((post, id) => (
                <Post
                    key={post._id}
                    post={post}
                />
            ))}
        </ul>
    );
}

export default Posts;