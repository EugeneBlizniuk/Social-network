const ADD_POST = 'ADD_POST';
const UPDATE_TEXT_FIELD = 'UPDATE_TEXT_FIELD';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

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
    newPostTextField: "",
    profile: null
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
        case SET_USER_PROFILE: 
            return { ...state, userProfile: action.userProfile }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateTextFieldActionCreator = (text) => ({ type: UPDATE_TEXT_FIELD, text });
export const setUserProfile = (userProfile) => ({ type: SET_USER_PROFILE, userProfile });

export default profileReducer;