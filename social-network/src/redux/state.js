import profileData from './reducer/profileData';
import dialogsData from './reducer/dialogData';

let store = {
    _state: {
        profileData: {
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
        },
        dialogsData: {
            dialogs: [
                {
                    id: 1,
                    name: "Victor"
                },
                {
                    id: 2,
                    name: "Elena"
                },
                {
                    id: 3,
                    name: "Viktoria"
                },
                {
                    id: 4,
                    name: "Eugene"
                },
                {
                    id: 5,
                    name: "Vlad"
                }
            ],
            messages: [
                {
                    message: "Hi"
                },
                {
                    message: "What's up?"
                },
                {
                    message: "ye"
                }
            ],
            newMessageBody: ""
        }
    },
    _callSubscriber() {
        console.log('State is changed!')
    },

    getState() {
        debugger;
        return this._state;
    },
    subscribe(observer) {
        debugger;
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profileData = profileData(this._state.profileData, action);
        this._state.dialogsData = dialogsData(this._state.dialogsData, action);
        this._callSubscriber();
    }
}

window.store = store;

export default store;