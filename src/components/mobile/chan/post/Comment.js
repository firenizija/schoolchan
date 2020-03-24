import React from 'react';
import racoonMale from 'svg/racoon_male.svg';

import './styles/comment.scss'

const Comment = ({ comment }) => {
    return (
        <li className="comment">
            <img src={racoonMale} alt="sex" className="comment__sex" />
            <div className="comment__username">{comment.username}</div>
            &nbsp;
            <div>
                <div className="comment__text">{comment.commentText}</div>
            </div>
            &nbsp;
            {comment.image ? <a href={comment.image.large} rel="noopener noreferrer" target="_blank">Obraz</a> : null}
        </li>
    );
}

export default Comment;