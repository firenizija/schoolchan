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

export const SetPosts = (posts) => {
    return {
        type: 'SET_POSTS',
        posts
    }
}

export const SetMyPosts = (myPosts) => {
    return {
        type: 'SET_MY_POSTS',
        myPosts
    }
}

export const AddPost = (post) => {
    return {
        type: 'ADD_POST',
        post
    }
}

export const SetUser = (user) => {
    return {
        type: 'SET_USER',
        user
    }
}

export const SetMessages = (messages) => {
    return {
        type: 'SET_MESSAGES',
        messages
    }
}

export const AddMessage = (message) => {
    return {
        type: 'ADD_MESSAGES',
        message
    }
}

export const AddMoreMessages = (moreMessages) => {
    return {
        type: 'ADD_MORE_MESSAGES',
        moreMessages
    }
}