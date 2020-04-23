import React, { useEffect, useState } from 'react';
import Message from './Message';
import { useSelector, useDispatch } from 'react-redux';
import { SetMessages, AddMessage, AddMoreMessages } from 'redux/actions/index';

import './styles/messages.scss'
let isWaitingForMessages = false;
let lastMessageId
const Messages = ({ chatWith }) => {
    const dispatch = useDispatch();
    const socket = useSelector(state => state.socket);
    const username = useSelector(state => state.userInfo.username);
    const messages = useSelector(state => state.messages);

    useEffect(() => {
        socket.on('message', message => {
            dispatch(AddMessage(message))
        });
        socket.on('moreMessages', message => {
            if (message.length > 0) {
                lastMessageId = message[message.length - 1]._id
                message.map(data => dispatch(AddMoreMessages(data)));
                isWaitingForMessages = false;
            }
        });
    }, [dispatch, socket]);

    useEffect(() => {
        socket.emit('joinChat', chatWith);
        socket.on('messages', messagesDatabase => {
            if (messagesDatabase.length > 0) {
                lastMessageId = messagesDatabase[0]._id
                dispatch(SetMessages(messagesDatabase))
                scrollToBottom('fast');
            }
        });
    }, [chatWith, dispatch, socket]);
    const loadMoreMessages = () => {
        isWaitingForMessages = true;
        socket.emit('getMoreMessages', lastMessageId);
    }
    useEffect(() => {
        const messagesBlock = document.querySelector('.messages__scroll')
        const button = document.querySelector('.messages__loadMoreButton')
        const loadedMessages = document.querySelectorAll('.message')
        if (messagesBlock && loadedMessages.length > 5) {
            let pajac
            for (let i = 0; i < 5; i++) {
                pajac = loadedMessages[i].offsetHeight
            }
            setInterval(() => {
                const y = messagesBlock.scrollTop;
                if (!isWaitingForMessages && messages.messages.length > 14 && y < 50) {
                    messagesBlock.scrollTop = y + pajac;
                    button.click();
                }
            }, 1000);
        }
    }, [messages]);
    const scrollToBottom = (speed) => {
        const bottom = document.querySelector("#bottom");
        if (speed === "smooth") {
            bottom.scrollIntoView({ behavior: "smooth" });
        } else if (speed === "fast") {
            bottom.scrollIntoView();
        }
    }
    useEffect(() => {
        const newMessage = document.querySelectorAll('.message')
        const messagesScroll = document.querySelector('.messages__scroll')
        if (newMessage.length > 0) {
            const scrollHeightMessages = messagesScroll.scrollHeight - messagesScroll.scrollTop - messagesScroll.offsetHeight - newMessage[newMessage.length - 1].offsetHeight - 24;
            if (scrollHeightMessages < 100) scrollToBottom('smooth');
        }

    }, [messages])

    return (
        <div
            className="messages"
        >
            <div
                className="messages__scroll"
            >
                <button className="messages__loadMoreButton" onClick={() => loadMoreMessages()}></button>
                {messages.messages.map((message) => <Message key={message._id} message={message} isMy={message.username === username} />)}
                <div id="bottom"></div>
            </div>
        </div>
    );
}

export default Messages;