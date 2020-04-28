import { combineReducers } from 'redux';
import socket from './socket';
import posts from './posts';
import userInfo from './userInfo';
import messages from './messages';

const AllReducers = combineReducers({
  socket,
  posts,
  userInfo,
  messages,
});
export default AllReducers;
