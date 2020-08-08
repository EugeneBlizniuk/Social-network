import { addPostActionCreator, updateTextFieldActionCreator } from '../../../redux/reducer/profileData';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    debugger
    return {
        newPostTextField: state.profileData.newPostTextField,
        postMessages: state.profileData.postMessages
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            const action = addPostActionCreator();
            dispatch(action)
        },
        updateTextField: (text) => {
            const action = updateTextFieldActionCreator(text);
            dispatch(action);
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;