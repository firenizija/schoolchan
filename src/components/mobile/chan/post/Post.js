import React from 'react';

import './styles/post.scss'

const Post = ({ post }) => {
    return (
        <div className="post">
            <img src={post.image.mini} alt="" />
            <div>{post.username}</div>
            <div>{post.body}</div>
        </div>
    );
}

export default Post;