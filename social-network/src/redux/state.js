const ADD_POST = 'ADD_POST';
const UPDATE_TEXT_FIELD = 'UPDATE_TEXT_FIELD';

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateTextFieldActionCreator = (text) => ({ type: UPDATE_TEXT_FIELD, text });

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
            ]
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
        debugger;
        if (action.type === ADD_POST) {
            let newPost = {
                message: this._state.profileData.newPostTextField,
                likeCount: 0
            };
            this._state.profileData.postMessages.push(newPost);
            this._state.profileData.newPostTextField = "";
            this._callSubscriber();
        } else if (action.type === UPDATE_TEXT_FIELD) {
            this._state.profileData.newPostTextField = action.text;
            this._callSubscriber();
        }
    } 
}

window.store = store;

export default store;