export const SignIn = () => ({
  type: 'SIGN_IN',
});

export const SignOut = () => ({
  type: 'SIGN_OUT',
});

export const SetSocket = (socket) => ({
  type: 'SET_SOCKET',
  socket,
});

export const SetPosts = (posts) => ({
  type: 'SET_POSTS',
  posts,
});

export const SetMyPosts = (myPosts) => ({
  type: 'SET_MY_POSTS',
  myPosts,
});

export const AddPost = (post) => ({
  type: 'ADD_POST',
  post,
});

export const SetUser = (user) => ({
  type: 'SET_USER',
  user,
});

export const SetMessages = (messages) => ({
  type: 'SET_MESSAGES',
  messages,
});

export const ResetMessages = () => ({
  type: 'RESET_MESSAGES',
});

export const AddMessage = (message) => ({
  type: 'ADD_MESSAGES',
  message,
});

export const AddMoreMessages = (moreMessages) => ({
  type: 'ADD_MORE_MESSAGES',
  moreMessages,
});
