import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import autosize from 'autosize';
import { useSelector } from 'react-redux';
import imageIcon from 'svg/image_icon.svg';
import uploadImage from 'api/uploadImage';

import './styles/commentForm.scss';

const CommentForm = ({ focus, post }) => {
  const [image, setImage] = useState('');
  const [imageStatus, setImageStatus] = useState('BEFORE');
  const [commentText, setCommentText] = useState('');
  const socket = useSelector((state) => state.socket);
  const textareaRef = useRef(null);
  const fileInputRef = useRef(null);

  const sendComment = (e) => {
    e.preventDefault();
    if (commentText.length > 0 && imageStatus !== 'DURING') {
      const commentData = { image, commentText, postId: post._id };
      socket.emit('sendComment', commentData);
      setCommentText('');
      setImage('');
    }
  };

  autosize(textareaRef.current);

  return (
    <form className="commentForm">
      <label htmlFor="file">
        <img src={imageIcon} alt="sendImage" />
        <input
          ref={fileInputRef}
          id="file"
          className="commentForm__imageInput"
          type="file"
          accept="image/x-png,image/jpeg"
          onChange={() => uploadImage(fileInputRef, setImage, setImageStatus)}
        />
      </label>
      <textarea
        ref={textareaRef}
        // eslint-disable-next-line jsx-a11y/no-autofocus
        autoFocus={focus}
        rows="1"
        wrap="hard"
        placeholder="Napisz komentarz..."
        className="commentForm__textInput"
        onChange={(e) => setCommentText(e.target.value)}
        value={commentText}
        onKeyPress={(e) => (e.key === 'Enter' ? sendComment(e) : null)}
      />
      <button type="submit" className="commentForm__submit" onClick={(e) => sendComment(e)}>
        ⌲
      </button>
    </form>
  );
};

CommentForm.propTypes = {
  focus: PropTypes.bool,
  post: PropTypes.objectOf(PropTypes.any).isRequired,
};

CommentForm.defaultProps = {
  focus: false,
};

export default CommentForm;
