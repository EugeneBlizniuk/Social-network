const ADD_MESSAGE = 'ADD_MESSAGE';

export const addMessageCreator = (message) => ({ type: ADD_MESSAGE, message });

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
    ]
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = action.message;
            return {
                ...state,
                messages: [...state.messages, {message: newMessage}]
            };
        default:
            return state;
    }
}

export default dialogsReducer;