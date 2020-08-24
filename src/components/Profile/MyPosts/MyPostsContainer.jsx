import { addPostActionCreator } from '../../../redux/reducer/profileReducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        newPostTextField: state.profilePage.newPostTextField,
        postMessages: state.profilePage.postMessages
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (postMessage) => {
            const action = addPostActionCreator(postMessage);
            dispatch(action);
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;