import React from 'react';

import './styles/comment.scss'

const Comment = ({ comment }) => {
    return (
        <li className="comment">
            <span className="comment__username">{comment.username}</span>
            &nbsp;{comment.commentText}&nbsp;
            {comment.image ? <a href={comment.image.large} rel="noopener noreferrer" target="_blank">Obraz</a> : null}
        </li>
    );
}

export default Comment;