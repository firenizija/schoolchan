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

export const SetBody = (text) => {
    return {
        type: 'SET_BODY',
        payload: text
    }
}

export const SetImage = (link) => {
    return {
        type: 'SET_IMAGE',
        payload: link
    }
}

export const ResetPost = () => {
    return {
        type: 'RESET_POST'
    }
}

export const SetSocket = (socket) => {
    return {
        type: 'SET_SOCKET',
        socket
    }
}