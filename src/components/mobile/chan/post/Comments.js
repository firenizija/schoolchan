/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import backIco from 'svg/backIco.svg';
import useForceUpdate from 'use-force-update';
import CommentForm from './CommentForm';
import Comment from './Comment';

import './styles/comments.scss';

const Comments = ({
  post, focus, postComments, forceUpdatePost,
}) => {
  const socket = useSelector((state) => state.socket);
  const forceUpdate = useForceUpdate();
  useEffect(() => {
    if (socket) {
      socket.on('comment', () => {
        forceUpdate();
      });
    }
  }, [socket, forceUpdate]);
  window.onhashchange = () => {
    forceUpdatePost();
  };
  return (
    <div className="comments">
      <div className="comments__topBar">
        <button
          type="button"
          onClick={() => {
            window.history.back();
          }}
        >
          <img src={backIco} alt="back" className="comments__backButtonImg" />
        </button>
        <div className="comments__title">Komentarze</div>
      </div>
      <ul className="comments__list">
        {postComments
          .slice(0)
          .reverse()
          .map((comment) => (
            <Comment key={comment._id} comment={comment} />
          ))}
      </ul>
      <CommentForm focus={focus} post={post} />
    </div>
  );
};

Comments.propTypes = {
  post: PropTypes.objectOf(PropTypes.any).isRequired,
  focus: PropTypes.bool,
  postComments: PropTypes.arrayOf(PropTypes.object).isRequired,
  forceUpdatePost: PropTypes.func.isRequired,
};

Comments.defaultProps = {
  focus: false,
};

export default Comments;
