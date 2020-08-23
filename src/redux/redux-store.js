import { createStore, combineReducers, applyMiddleware } from 'redux';
import dialogsReducer from './reducer/dialogsReducer';
import profileReducer from './reducer/profileReducer';
import usersReducer from './reducer/usersReducer';
import authReducer from './reducer/authReducer';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;