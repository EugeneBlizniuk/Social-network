const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_MESSAGE_BODY = 'UPDATE_MESSAGE_BODY';

export const addMessageCreator = () => ({ type: ADD_MESSAGE });

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
            let newState = { ...initialState };
            newState.messages.push({ message: state.newMessageBody });
            newState.newMessageBody = "";
            return newState;
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