const newPost = (state = "", action) => {
    switch (action.type) {
        case 'SET_BODY':
            return { ...state, body: action.payload };
        case 'SET_IMAGE':
            return { ...state, image: action.payload };
        case 'RESET_POST':
            return { ...state, body: "", image: "" };
        default:
            return { ...state, body: action.payload };
    }
};

export default newPost;