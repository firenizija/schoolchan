import React from 'react';
import PropTypes from 'prop-types';

import './styles/message.scss';

const Message = ({ message, isMy }) => (
  <div className={`message ${isMy ? 'message--end' : null}`}>
    <div className={`message__speechBubble ${isMy ? 'message__speechBubble--end' : null}`}>
      {message.body}
      {message.image.mini && (
        <>
          <a href={message.image.large} target="_blank" rel="noopener noreferrer">
            <img src={message.image.mini} alt="" />
          </a>
        </>
      )}
    </div>
    <div className="message__username">{message.username}</div>
  </div>
);

Message.propTypes = {
  message: PropTypes.objectOf(PropTypes.any).isRequired,
  isMy: PropTypes.bool.isRequired,
};

export default Message;
