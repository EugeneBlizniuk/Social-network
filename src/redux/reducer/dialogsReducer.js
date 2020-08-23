const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_MESSAGE_BODY = 'UPDATE_MESSAGE_BODY';

export const addMessageCreator = (message) => ({ type: ADD_MESSAGE, message });

export const updateMessageBodyCreator = (text) => ({ type: UPDATE_MESSAGE_BODY, text });

const initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = action.message;
            return {
                ...state,
                messages: [...state.messages, {message: newMessage}]
            };
        case UPDATE_MESSAGE_BODY:
            return {
                ...initialState,
                newMessageBody: action.text
            }
        default:
            return state;
    }
}

export default dialogsReducer;