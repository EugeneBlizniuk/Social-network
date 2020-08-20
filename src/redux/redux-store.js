import { createStore, combineReducers } from 'redux';
import dialogsReducer from './reducer/dialogsReducer';
import profileReducer from './reducer/profileReducer';
import usersReducer from './reducer/usersReducer';
import authReducer from './reducer/authReducer';

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer
});

let store = createStore(reducers);

export default store;