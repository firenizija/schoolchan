export const SignIn = () => {
    return {
        type: 'SIGN_IN'
    }
}

export const SignOut = () => {
    return {
        type: 'SIGN_OUT'
    }
}

export const SetSocket = (socket) => {
    return {
        type: 'SET_SOCKET',
        socket
    }
}