export const SetSocket = (socket) => ({
  type: 'SET_SOCKET',
  socket,
});

export const SetPosts = (posts, postsLastId) => ({
  type: 'SET_POSTS',
  posts,
  postsLastId,
});

export const SetMyPosts = (myPosts) => ({
  type: 'SET_MY_POSTS',
  myPosts,
});

export const AddPost = (post) => ({
  type: 'ADD_POST',
  post,
});

export const AddPosts = (post, postsLastId) => ({
  type: 'ADD_POSTS',
  post,
  postsLastId,
});

export const SetUser = (user) => ({
  type: 'SET_USER',
  user,
});

export const SetMessages = (messages, messagesLastId) => ({
  type: 'SET_MESSAGES',
  messages,
  messagesLastId,
});

export const ResetMessages = () => ({
  type: 'RESET_MESSAGES',
});

export const AddMessage = (message) => ({
  type: 'ADD_MESSAGES',
  message,
});

export const AddMoreMessages = (moreMessages, messagesLastId) => ({
  type: 'ADD_MORE_MESSAGES',
  moreMessages,
  messagesLastId,
});
