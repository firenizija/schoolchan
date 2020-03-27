import React, { useState } from 'react';
import Post from './Post'
import { useSelector } from 'react-redux'

import './styles/posts.scss'

const Posts = () => {
    const socket = useSelector(state => state.socket)
    const [posts, setPosts] = useState([])

    if (socket) {
        socket.on('posts', data => {
            setPosts(data)
        })
        socket.on('post', data => {
            data.comments = []
            setPosts([data, ...posts])
        })
    }
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