import React, { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Draggable from 'react-draggable';
import uploadImage from 'api/uploadImage';

import closeIco from 'svg/closeIco.svg';
import formIco from 'svg/formIco.svg';
import uploadImageIco from 'svg/uploadImage.svg';
import uploadImageDoneIco from 'svg/uploadImageDone.svg';
import uploadImageLoadingIco from 'svg/uploadImageLoading.svg';

import './styles/createPostForm.scss';

const CreatePostForm = ({ setCreatePostFrom }) => {
  const [body, setBody] = useState('');
  const [image, setImage] = useState('');
  const [imageStatus, setImageStatus] = useState('BEFORE');
  const socket = useSelector((state) => state.socket);
  const fileInputRef = useRef(null);

  const sendPost = (e) => {
    e.preventDefault();
    const postData = { body, image };
    if (postData) {
      socket.emit('sendPost', postData);
      setCreatePostFrom(false);
    }
  };

  const imageStatusIMG = () => {
    switch (imageStatus) {
      case 'BEFORE':
        return uploadImageIco;
      case 'DURING':
        return uploadImageLoadingIco;
      case 'DONE':
        return uploadImageDoneIco;
      default:
        return uploadImageIco;
    }
  };

  return (
    <Draggable axis="y" handle=".createPostForm__handle">
      <div className="createPostForm">
        <div className="createPostForm__handle">
          <div>
            <img className="createPostForm__formIco" src={formIco} alt="createPost" />
            <span className="createPostForm__handleTitle">Utwórz post</span>
          </div>
          <button
            type="button"
            className="createPostForm__closeButton"
            onClick={() => {
              setCreatePostFrom(false);
            }}
          >
            <img src={closeIco} alt="closeForm" />
          </button>
        </div>
        <form action="" className="createPostForm__form">
          <div className="createPostForm__label">Treść:</div>
          <textarea
            name="body"
            className="createPostForm__postBody"
            rows="8"
            placeholder="Napisz coś..."
            onChange={(e) => setBody(e.target.value)}
            value={body}
          />
          <div className="createPostForm__label">Obraz:</div>
          <label className="createPostForm__labelButtonStyle" htmlFor="file">
            <img src={imageStatusIMG()} alt="upload" className="createPostForm__uploadImg" />
            <input
              ref={fileInputRef}
              className="createPostForm__imageButton"
              name="image"
              type="file"
              accept="image/x-png,image/jpeg"
              id="file"
              onChange={() => uploadImage(fileInputRef, setImage, setImageStatus)}
            />
          </label>
          <button type="submit" className="createPostForm__submit" onClick={(e) => sendPost(e)}>
            Opublikuj
          </button>
        </form>
      </div>
    </Draggable>
  );
};

CreatePostForm.propTypes = {
  setCreatePostFrom: PropTypes.func,
};

CreatePostForm.defaultProps = {
  setCreatePostFrom: () => 0,
};

export default CreatePostForm;
