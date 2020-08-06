let rerenderEntireTree = () => {
    console.log('State is changed!')
}

let state = {
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
};

window.state = state;

export const addNewPost = () => {
    let newPost = {
        message: state.profileData.newPostTextField,
        likeCount: 0
    };
    state.profileData.postMessages.push(newPost);
    state.profileData.newPostTextField = "";
    rerenderEntireTree();
}

export const updatePostTextField = (text) => {
    state.profileData.newPostTextField = text;
    rerenderEntireTree();
} 

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}

export default state;