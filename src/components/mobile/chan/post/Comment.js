import React from 'react';
import PropTypes from 'prop-types';
import racoonMale from 'svg/racoon_male.svg';

import './styles/comment.scss';

const Comment = ({ comment }) => (
    <li className="comment">
      <img src={racoonMale} alt="sex" className="comment__sex" />
      <div className="comment__text">
        <span className="comment__username">{comment.username}</span>
        &nbsp;{comment.commentText}
      </div>
      &nbsp;
      {comment.image ? (
        <a href={comment.image.large} rel="noopener noreferrer" target="_blank">
          Obraz
        </a>
      ) : null}
    </li>
);

Comment.propTypes = {
  comment: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Comment;
