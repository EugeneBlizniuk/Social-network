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
    profile: null,
    status: ""
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                postMessages: [...state.postMessages, { message: action.postMessage, likeCount: 0 }]
            }
        case SET_USER_PROFILE:
            return { ...state, profile: action.userProfile }
        case SET_STATUS:
            return { ...state, status: action.status }
        default:
            return state;
    }
}

export const addPostActionCreator = (postMessage) => ({ type: ADD_POST, postMessage });
export const setUserProfile = (userProfile) => ({ type: SET_USER_PROFILE, userProfile });
export const setStatus = (status) => ({ type: SET_STATUS, status });

export const getUserProfile = (userId) => async (dispatch) => {
    const response = await usersAPI.getProfile(userId);

    dispatch(setUserProfile(response.data));
}

export const updateStatus = (status) => async (dispatch) => {
    const response = await profileAPI.updateStatus(status);

    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
}

export const getStatus = (userId) => async (dispatch) => {
    const response = await profileAPI.getStatus(userId);

    dispatch(setStatus(response.data));
}

export default profileReducer;