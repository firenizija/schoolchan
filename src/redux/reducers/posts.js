const posts = (state = [], action) => {
    switch (action.type) {
        case 'SET_POSTS':
            return {
                posts: action.posts
            }
        case 'ADD_POST':
            return {
                ...state,
                posts: [action.post, ...state.posts]
            }
        default:
            return {
                posts: []
            };
    }
};

export default posts;