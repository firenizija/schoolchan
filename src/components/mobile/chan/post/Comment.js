import React from 'react';

import './styles/comment.scss'

const Comment = ({ comment }) => {
    return (
        <li className="comment">
            <span className="comment__username">{comment.username}</span> {comment.commentText}
        </li>
    );
}

export default Comment;