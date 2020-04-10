import React from 'react';

import './styles/message.scss'

const Message = ({ message, isMy }) => {
    return (
        <div className={`message ${isMy ? 'message--end' : null}`}>
            <div className={`message__speechBubble ${isMy ? 'message__speechBubble--end' : null}`}>
                {message.body}
            </div>
            <div className="message__username">
                {message.username}
            </div>
        </div>
    );
}

export default Message;