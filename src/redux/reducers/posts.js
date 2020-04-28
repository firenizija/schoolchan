const postsObj = {
  posts: [],
  postsLastId: '',
  myPosts: [],
};
const posts = (state = postsObj, action) => {
  switch (action.type) {
    case 'SET_POSTS':
      return {
        ...state,
        posts: action.posts,
        postsLastId: action.postsLastId,
      };
    case 'SET_MY_POSTS':
      return {
        ...state,
        myPosts: action.myPosts,
      };
    case 'ADD_POSTS':
      return {
        ...state,
        posts: state.posts.concat(action.post),
        postsLastId: action.postsLastId,
      };
    case 'ADD_POST':
      return {
        ...state,
        posts: [...state.posts, action.post],
      };
    default:
      return state;
  }
};

export default posts;
