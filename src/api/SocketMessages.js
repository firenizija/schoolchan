/* eslint-disable no-underscore-dangle */
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SetMessages, AddMessage, AddMoreMessages } from 'redux/actions/index';

const SocketMessages = () => {
  const dispatch = useDispatch();
  const socket = useSelector((state) => state.socket);

  useEffect(() => {
    socket.on('message', (message) => {
      dispatch(AddMessage(message));
    });

    socket.on('moreMessages', (message) => {
      if (message.length > 0) {
        dispatch(AddMoreMessages(message, message[message.length - 1]._id));
      }
    });
  }, [dispatch, socket]);
  useEffect(() => {
    socket.emit('joinChat', 'all');
    socket.on('messages', (messagesDatabase) => {
      if (messagesDatabase.length > 0) {
        dispatch(SetMessages(messagesDatabase, messagesDatabase[0]._id));
      }
    });
  }, [dispatch, socket]);
  return null;
};

export default SocketMessages;
