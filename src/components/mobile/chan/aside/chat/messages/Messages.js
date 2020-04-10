import React, { useState, useEffect } from 'react';
import Message from './Message'
import ScrollToBottom from 'react-scroll-to-bottom';
import { useSelector } from 'react-redux';

import './styles/messages.scss'

const Messages = ({ chatWith }) => {
    const socket = useSelector(state => state.socket);
    const username = useSelector(state => state.userInfo.username);
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        socket.on('message', message => {
            setMessages([...messages, message]);
        });
    }, [messages, socket]);


    useEffect(() => {
        socket.emit('joinChat', chatWith);
        socket.on('messages', messagesDatabase => {
            setMessages(messagesDatabase);
        });
    }, [socket, chatWith]);

    return (
        <ScrollToBottom className="messages">
            {messages.map((message) => <Message key={message._id} message={message} isMy={message.username === username} />)}
        </ScrollToBottom>
    );
}

export default Messages;