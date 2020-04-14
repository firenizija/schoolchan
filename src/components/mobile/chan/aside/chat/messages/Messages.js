import React, { useState, useEffect } from 'react';
import Message from './Message'
import ScrollToBottom from 'react-scroll-to-bottom';
import { useSelector } from 'react-redux';

import './styles/messages.scss'
let isWaitingForMessages = false;

const Messages = ({ chatWith }) => {
    const socket = useSelector(state => state.socket);
    const username = useSelector(state => state.userInfo.username);
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        socket.on('message', message => {
            setMessages([...messages, message]);
        });
        socket.on('moreMessages', message => {
            setMessages(message.concat(messages));
            isWaitingForMessages = false;
        });
    }, [messages, socket]);


    useEffect(() => {
        socket.emit('joinChat', chatWith);
        socket.on('messages', messagesDatabase => {
            setMessages(messagesDatabase);
        });
    }, [socket, chatWith]);
    const loadMoreMessages = () => {
        isWaitingForMessages = true;
        const lastMessageId = messages[0]._id
        socket.emit('getMoreMessages', lastMessageId);
    }
    useEffect(() => {
        const messagesBlock = document.querySelector('.messages__scroll')
        const button = document.querySelector('.messages__loadMoreButton')
        if (messagesBlock) {
            setInterval(() => {
                const y = messagesBlock.scrollTop;
                if (!isWaitingForMessages && messages.length > 14 && y < 50) {
                    messagesBlock.scrollTop = messagesBlock.scrollTop + 160;
                    button.click();
                }
            }, 1000);
        }
    }, [messages]);

    return (
        <ScrollToBottom
            className="messages"
            scrollViewClassName="messages__scroll"
            followButtonClassName="messages__scrollButton"
        >
            <button className="messages__loadMoreButton" onClick={() => loadMoreMessages()}></button>
            {messages.map((message) => <Message key={message._id} message={message} isMy={message.username === username} />)}
        </ScrollToBottom>
    );
}

export default Messages;