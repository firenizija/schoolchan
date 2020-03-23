const tokenIsSet = localStorage.getItem("token") !== "";
const loggedReducer = (state = tokenIsSet, action) => {
    switch (action.type) {
        case 'SIGN_IN':
            return true;
        case 'SIGN_OUT':
            return false;
        default:
            return state;
    }
};

export default loggedReducer;