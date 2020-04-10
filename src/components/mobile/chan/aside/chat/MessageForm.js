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

    const handleClickSend = () => {
        const messageObj = { messageText, messageImage }
        socket.emit('sendMessage', messageObj);
        setMessageText('');
    }

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
                value={messageText}
            ></textarea>
            <button
                className="messageForm__sendMessageButton"
                onClick={() => handleClickSend()}
            >
                <img src={sendMessage} alt="" />
            </button>
        </div>
    );
}

export default MessageForm;