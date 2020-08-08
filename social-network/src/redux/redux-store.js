import { createStore, combineReducers } from 'redux';
import dialogsData from './reducer/dialogData';
import profileData from './reducer/profileData';

let reducers = combineReducers({
    profileData,
    dialogsData
});

let store = createStore(reducers);

export default store;