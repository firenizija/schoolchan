import React, { useState, useRef } from 'react';
import uploadImage from 'api/uploadImage';
import autosize from 'autosize';
import sendMessage from 'svg/sendMessage.svg';
import imageIcon from 'svg/image_icon.svg';
import { useSelector } from 'react-redux';

import './styles/messageForm.scss';

const MessageForm = () => {
  const socket = useSelector((state) => state.socket);
  const [messageText, setMessageText] = useState('');
  const [messageImage, setMessageImage] = useState('');
  const [imageStatus, setImageStatus] = useState('BEFORE');
  const textareaRef = useRef(null);
  const fileInputRef = useRef(null);

  autosize(textareaRef.current);

  const handleFocus = () => {
    const bottom = document.querySelector('#bottom');
    bottom.scrollIntoView();
  };
  const SendMessage = () => {
    if (imageStatus !== 'DURING') {
      const messageObj = { messageText, messageImage };
      socket.emit('sendMessage', messageObj);
      setMessageText('');
      setMessageImage('');
    }
  };
  const handleClickSend = (e) => {
    e.preventDefault();
    SendMessage();
  };

  return (
    <div className="messageForm">
      <label className="messageForm__sendImageButton" htmlFor="file">
        <input
          ref={fileInputRef}
          className="messageForm__sendImageInput"
          type="file"
          id="file"
          onChange={() => uploadImage(fileInputRef, setMessageImage, setImageStatus)}
        />
        <img src={imageIcon} alt="" />
      </label>
      <textarea
        ref={textareaRef}
        className="messageForm__textarea"
        rows="1"
        wrap="hard"
        placeholder="Napisz wiadomość..."
        onChange={(e) => setMessageText(e.target.value)}
        onKeyPress={(e) => (e.key === 'Enter' ? handleClickSend(e) : null)}
        value={messageText}
        onFocus={() => handleFocus()}
      />
      <button
        type="button"
        className="messageForm__sendMessageButton"
        onClick={(e) => handleClickSend(e)}
      >
        <img src={sendMessage} alt="" />
      </button>
    </div>
  );
};

export default MessageForm;
