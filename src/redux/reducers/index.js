import isLogged from './isLogged'
import socket from './socket'
import { combineReducers } from 'redux';

const AllReducers = combineReducers({
    isLogged,
    socket
})
export default AllReducers;