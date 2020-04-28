const initialState = {
  messages: [],
  messagesLastId: '',
};
const messages = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_MESSAGES':
      return {
        ...state,
        messages: action.messages,
        messagesLastId: action.messagesLastId,
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
        messages: action.moreMessages.reverse().concat(state.messages),
        messagesLastId: action.messagesLastId,
      };
    default:
      return state;
  }
};

export default messages;
