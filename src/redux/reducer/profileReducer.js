import { profileAPI } from "../../api/API";
import { stopSubmit } from 'redux-form';

const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const SAVE_PHOTO_FILE = 'SAVE_PHOTO_FILE';
const SAVE_PROFILE_DATA = 'SAVE_PROFILE_DATA';

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
        case SAVE_PHOTO_FILE:
            return { ...state, profile: { ...state.profile, photos: action.photos } }
        case SAVE_PROFILE_DATA:
            return { ...state, profile: action.profile }
        default:
            return state;
    }
}

export const addPostActionCreator = (postMessage) => ({ type: ADD_POST, postMessage });
export const setUserProfile = (userProfile) => ({ type: SET_USER_PROFILE, userProfile });
export const setStatus = (status) => ({ type: SET_STATUS, status });
export const savePhotoSuccess = (photos) => ({ type: SAVE_PHOTO_FILE, photos });
export const saveProfileDataSuccess = (profile) => ({ type: SAVE_PHOTO_FILE, profile });

export const getUserProfile = (userId) => async (dispatch) => {
    const response = await profileAPI.getProfile(userId);
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

export const savePhoto = (photoFile) => async (dispatch) => {
    const response = await profileAPI.savePhoto(photoFile);
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
    }
}

export const saveProfileData = (profileData) => async (dispatch, getState) => {
    const userId = getState().auth.userId;
    const response = await profileAPI.saveProfileData(profileData);

    if (response.data.resultCode === 0) {
        dispatch(getUserProfile(userId));
    } else {
        debugger
        dispatch(stopSubmit("editProfileDataForm", {_error: response.data.messages[0] }));
        return Promise.reject(response.data.messages[0]);
    }
}

export default profileReducer;