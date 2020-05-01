/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { useSelector, connect } from 'react-redux';
import Message from './Message';

import './styles/messages.scss';

const Messages = ({ messages }) => {
  let isWaitingForMessages = false;

  const socket = useSelector((state) => state.socket);
  const username = useSelector((state) => state.userInfo.username);
  const [autoScroll, setAutoScroll] = useState(true);
  const bottomDiv = useRef(null);
  const messagesScrollRef = useRef(null);
  const messagesLoadMoreButtonRef = useRef(null);

  const scrollToBottom = (speed) => {
    if (speed === 'smooth') {
      bottomDiv.current.scrollIntoView({ behavior: 'smooth' });
    } else if (speed === 'fast') {
      bottomDiv.current.scrollIntoView();
    }
  };

  const loadMoreMessages = () => {
    isWaitingForMessages = true;
    socket.emit('getMoreMessages', messages.messagesLastId);
  };
  useEffect(() => {
    scrollToBottom('fast');
  }, []);
  useEffect(() => {
    const messagesBlock = messagesScrollRef.current;
    const button = messagesLoadMoreButtonRef.current;
    const loadedMessages = document.querySelectorAll('.message');
    if (messagesBlock && loadedMessages.length > 5) {
      let getMessagesHeight;
      for (let i = 0; i < 5; i += 1) {
        getMessagesHeight = loadedMessages[i].offsetHeight;
      }
      setInterval(() => {
        const y = messagesBlock.scrollTop;
        if (!isWaitingForMessages && messages.messages.length > 14 && y < 50) {
          messagesBlock.scrollTop = y + getMessagesHeight;
          button.click();
        }
      }, 1000);
    }
  }, [messages]);

  useEffect(() => {
    const newMessage = document.querySelectorAll('.message');
    const { scrollHeight, scrollTop, offsetHeight } = messagesScrollRef.current;
    if (newMessage.length > 0) {
      const msgHeight = scrollHeight - scrollTop - offsetHeight;
      const scrollHeightMessages = msgHeight - newMessage[newMessage.length - 1].offsetHeight - 24;
      if (scrollHeightMessages < 100) {
        setAutoScroll(true);
      } else {
        setAutoScroll(false);
      }
    }
    if (autoScroll) {
      scrollToBottom('smooth');
    }
  }, [messages]);

  return (
    <div className="messages">
      <div ref={messagesScrollRef} className="messages__scroll">
        {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
        <button
          ref={messagesLoadMoreButtonRef}
          type="button"
          className="messages__loadMoreButton"
          onClick={() => loadMoreMessages()}
        />
        {messages.messages.map((message) => (
          <Message key={message._id} message={message} isMy={message.username === username} />
        ))}
        <div ref={bottomDiv} id="bottom" />
      </div>
    </div>
  );
};

Messages.propTypes = {
  messages: PropTypes.objectOf(PropTypes.any).isRequired,
};

const mapMessages = (messages) => messages;

export default connect(mapMessages)(Messages);
