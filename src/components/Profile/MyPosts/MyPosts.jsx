import React from "react";
import { Field, reduxForm } from 'redux-form';

import style from './MyPosts.module.css';

import Post from './Post/Post';

const AddNewPostForm = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field name='newPostMessage' component='textarea' placeholder='Something new happened?'/>
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  );
}

const AddNewPostReduxForm = reduxForm({ form: 'addNewPostForm' })(AddNewPostForm);

const MyPosts = ({ postMessages, addPost }) => {
  let posts = postMessages.map(p => <Post message={p.message} likeCount={p.likeCount} />);

  const onAddedPost = (values) => {
    addPost(values.newPostMessage);
  }

  return (
    <div className={style.postsBlock}>
      My posts
      <div>New posts</div>
      <AddNewPostReduxForm onSubmit={onAddedPost} />
      <div>
        {posts}
      </div>
    </div>
  );
};

export default MyPosts;
