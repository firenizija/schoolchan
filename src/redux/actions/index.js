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