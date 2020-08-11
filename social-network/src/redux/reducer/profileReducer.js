const ADD_POST = 'ADD_POST';
const UPDATE_TEXT_FIELD = 'UPDATE_TEXT_FIELD';

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateTextFieldActionCreator = (text) => ({ type: UPDATE_TEXT_FIELD, text });

const initialState = {
    postMessages: [
        {
            message: "What's up?",
            likeCount: 11
        },
        {
            message: "This is my first post!",
            likeCount: 13
        }
    ],
    newPostTextField: ""
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newState =  { ...initialState };
            let newPost = {
                message: state.newPostTextField,
                likeCount: 0
            };
            newState.postMessages.push(newPost);
            newState.newPostTextField = "";
            return newState;
        }
        case UPDATE_TEXT_FIELD: {
            return {
                ...initialState,
                newPostTextField: action.text
            }
        }
        default:
            return state;
    }
}

export default profileReducer;