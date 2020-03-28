import React, { useState, useEffect } from 'react';
import Post from './Post'
import { useSelector } from 'react-redux'
import useForceUpdate from 'use-force-update'

import './styles/posts.scss'

const Posts = () => {
    const socket = useSelector(state => state.socket)
    const [posts, setPosts] = useState([])

    const forceUpdate = useForceUpdate();
    useEffect(() => {
        if (socket) {
            socket.on('posts', data => {
                setPosts(data)
            })
            socket.on('post', data => {
                data.comments = []
                setPosts([data, ...posts])
            })
        } else {
            forceUpdate()
        }
    }, [forceUpdate, socket, posts])

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