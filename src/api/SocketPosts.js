/* eslint-disable no-underscore-dangle */
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  SetPosts, SetMyPosts, AddPost, AddPosts,
} from 'redux/actions/index';

const SocketPosts = () => {
  const dispatch = useDispatch();
  const socket = useSelector((state) => state.socket);

  useEffect(() => {
    if (socket) {
      socket.on('posts', (data) => {
        if (data.length > 0) {
          dispatch(SetPosts(data, data[data.length - 1]._id));
        }
      });
      socket.on('post', (data) => {
        dispatch(AddPost(data));
      });
      socket.on('morePosts', (data) => {
        if (data.length > 0) {
          dispatch(AddPosts(data, data[data.length - 1]._id));
        }
      });
      socket.on('myPosts', (myPosts) => {
        dispatch(SetMyPosts(myPosts));
      });
    }
  }, [dispatch, socket]);
  return null;
};

export default SocketPosts;
