import { usersAPI, profileAPI } from "../../api/API";

const ADD_POST = 'ADD_POST';
const UPDATE_TEXT_FIELD = 'UPDATE_TEXT_FIELD';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

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
    profile: null,
    status: ""
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newState = { ...initialState };
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
            return { ...state, profile: action.userProfile }
        case SET_STATUS:
            return { ...state, status: action.status }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateTextFieldActionCreator = (text) => ({ type: UPDATE_TEXT_FIELD, text });
export const setUserProfile = (userProfile) => ({ type: SET_USER_PROFILE, userProfile });
export const setStatus = (status) => ({ type: SET_STATUS, status });

export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response.data));
        });
}

// export const updateStatus = (status) => (dispatch) => {
//     profileAPI.updateStatus(status)
//         .then(response => {
//             dispatch(setStatus(response.data));
//         });
// }

// export const getStatus = (userId) => (dispatch) => {
//     usersAPI.getProfile(userId)
//         .then(response => {
//             dispatch(setUserProfile(response.data));
//         });
// }

export default profileReducer;