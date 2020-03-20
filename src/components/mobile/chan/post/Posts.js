import React, { useState } from 'react';
import Post from './Post'
import { useSelector, useDispatch } from 'react-redux'

const Posts = () => {
    const socket = useSelector(state => state.socket)
    const [posts, setPosts] = useState([])
    if (socket) {
        socket.on('posts', data => {
            setPosts(data)
        })
        socket.on('post', data => {
            setPosts([data, ...posts])
        })
    }
    return (
        <li>
            {posts.map((post, id) => (
                <Post
                    key={id}
                    post={post}
                />
            ))}
        </li>
    );
}

export default Posts;