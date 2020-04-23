const postsObj = {
    posts: [],
    myPosts: [],
}
const posts = (state = postsObj, action) => {
    switch (action.type) {
        case 'SET_POSTS':
            return {
                ...state,
                posts: action.posts
            }
        case 'SET_MY_POSTS':
            return {
                ...state,
                myPosts: action.myPosts
            }
        case 'ADD_POST':
            return {
                ...state,
                posts: [...state.posts, action.post]
            }
        default:
            return state
    }
};

export default posts;