import { createStore, combineReducers, applyMiddleware } from 'redux';
import dialogsReducer from './reducer/dialogsReducer';
import profileReducer from './reducer/profileReducer';
import usersReducer from './reducer/usersReducer';
import authReducer from './reducer/authReducer';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import appReducer from './reducer/appReducer';

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;