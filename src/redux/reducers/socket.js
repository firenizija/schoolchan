import io from 'socket.io-client';
const ENDPOINT = process.env.REACT_APP_API;
const token = localStorage.getItem("token");

let socketConnect = io(ENDPOINT, {
    'query': 'token=' + token
});
const socket = (state = socketConnect, action) => {
    switch (action.type) {
        case 'SET_SOCKET':
            return (io(ENDPOINT, {
                'query': 'token=' + localStorage.getItem("token")
            }));
        case 'RESET_SOCKET':
            return state;
        default:
            return state;
    }
};

export default socket;