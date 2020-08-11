import { addPostActionCreator, updateTextFieldActionCreator } from '../../../redux/reducer/profileReducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    debugger
    return {
        newPostTextField: state.profilePage.newPostTextField,
        postMessages: state.profilePage.postMessages
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            const action = addPostActionCreator();
            dispatch(action);
        },
        updateTextField: (text) => {
            const action = updateTextFieldActionCreator(text);
            dispatch(action);
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;