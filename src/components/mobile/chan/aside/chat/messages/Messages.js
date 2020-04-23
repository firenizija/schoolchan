import React, { useEffect, useState } from 'react';
import Message from './Message';
import { useSelector, useDispatch } from 'react-redux';
import { SetMessages, AddMessage, AddMoreMessages } from 'redux/actions/index';
import AutoScroll from '@brianmcallister/react-auto-scroll';

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
            }
        });
    }, [chatWith, dispatch, socket]);
    const loadMoreMessages = () => {
        isWaitingForMessages = true;
        socket.emit('getMoreMessages', lastMessageId);
    }
    useEffect(() => {
        const messagesBlock = document.querySelector('.react-auto-scroll__scroll-container')
        const autoScrollInput = document.querySelector('.react-auto-scroll__option-input')
        const button = document.querySelector('.messages__loadMoreButton')
        if (messagesBlock) {
            setInterval(() => {
                const y = messagesBlock.scrollTop;

                if (!isWaitingForMessages && messages.messages.length > 14 && y < 50) {
                    messagesBlock.scrollTop = y + 160;
                    button.click();
                }
                // if (messages.messages.length > 14 && (messagesBlock.scrollHeight - y) - messagesBlock.clientHeight > 20) {
                //     autoScrollInput.checked = false;
                //     //scroll down button
                // } else if (messages.messages.length > 14 && (messagesBlock.scrollHeight - y) - messagesBlock.clientHeight < 20) {
                //     autoScrollInput.checked = true;
                // }
            }, 1000);
        }
    }, [messages]);

    return (
        <AutoScroll
            className="messages"
            height={"100%"}
            showOption={true}
        >
            {/* className = react-auto-scroll__scroll-container */}
            <button className="messages__loadMoreButton" onClick={() => loadMoreMessages()}></button>
            {messages.messages.map((message) => <Message key={message._id} message={message} isMy={message.username === username} />)}
        </AutoScroll>
    );
}

export default Messages;