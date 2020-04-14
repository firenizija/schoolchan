import React, { useState } from 'react';
import autosize from 'autosize';
import sendMessage from 'svg/sendMessage.svg'
import imageIcon from 'svg/image_icon.svg';
import { useSelector } from 'react-redux';

import './styles/messageForm.scss';

const MessageForm = () => {
    const socket = useSelector(state => state.socket);
    const [messageText, setMessageText] = useState('');
    const [messageImage, setMessageImage] = useState('');

    autosize(document.querySelector('.messageForm__textarea'));

    const handleClickSend = (e) => {
        e.preventDefault()
        const messageObj = { messageText, messageImage }
        socket.emit('sendMessage', messageObj);
        setMessageText('');
    }
    console.log("wow")
    return (
        <div className="messageForm">
            <button className="messageForm__sendImageButton">
                <img src={imageIcon} alt="" />
            </button>
            <textarea
                className="messageForm__textarea"
                rows="1"
                wrap="hard"
                placeholder="Napisz wiadomość..."
                onChange={e => setMessageText(e.target.value)}
                onKeyPress={e => e.key === 'Enter' ? handleClickSend(e) : null}
                value={messageText}
                autoFocus
            ></textarea>
            <button
                className="messageForm__sendMessageButton"
                onClick={(e) => handleClickSend(e)}
            >
                <img src={sendMessage} alt="" />
            </button>
        </div>
    );
}

export default MessageForm;