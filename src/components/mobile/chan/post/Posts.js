import React, { useState, useEffect } from 'react';
import Post from './Post'
import { useSelector, useDispatch } from 'react-redux'
import useForceUpdate from 'use-force-update'
import { SetPosts } from 'redux/actions/index';

import './styles/posts.scss'

const Posts = () => {
    const dispatch = useDispatch();
    const socket = useSelector(state => state.socket);
    const reduxPosts = useSelector(state => state.posts);
    const [posts, setPosts] = useState(reduxPosts.posts);

    const forceUpdate = useForceUpdate();
    useEffect(() => {
        if (socket) {
            socket.on('posts', data => {
                dispatch(SetPosts(data))
                setPosts(data);
            })
            socket.on('post', data => {
                data.comments = [];
                setPosts([data, ...posts]);
            })
        } else {
            forceUpdate();
        }
    }, [forceUpdate, socket, posts, dispatch]);
    useEffect(() => {
        dispatch(SetPosts(posts));
    }, [posts, dispatch])

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