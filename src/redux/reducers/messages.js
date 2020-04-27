const messages = (state = [], action) => {
  switch (action.type) {
    case 'SET_MESSAGES':
      return {
        messages: action.messages,
      };
    case 'RESET_MESSAGES':
      return {
        messages: [],
      };
    case 'ADD_MESSAGES':
      return {
        ...state,
        messages: [...state.messages, action.message],
      };
    case 'ADD_MORE_MESSAGES':
      return {
        ...state,
        messages: [action.moreMessages, ...state.messages],
      };
    default:
      return {
        messages: [],
      };
  }
};

export default messages;
