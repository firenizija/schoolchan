import isLogged from './isLogged'
import socket from './socket'
import posts from './posts'
import userInfo from './userInfo'

import { combineReducers } from 'redux';

const AllReducers = combineReducers({
    isLogged,
    socket,
    posts,
    userInfo
})
export default AllReducers;