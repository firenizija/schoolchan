import isLogged from './isLogged'
import newPost from './newPost'
import socket from './socket'
import { combineReducers } from 'redux';

const AllReducers = combineReducers({
    isLogged,
    newPost,
    socket
})
export default AllReducers;