import React from "react";
import { Field, reduxForm } from 'redux-form';

import style from './MyPosts.module.css';

import Post from './Post/Post';

const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
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

const MyPosts = (props) => {
  let posts = props.postMessages.map(p => <Post message={p.message} likeCount={p.likeCount} />);

  const addPost = (values) => {
    props.addPost(values.newPostMessage);
  }

  return (
    <div className={style.postsBlock}>
      My posts
      <div>New posts</div>
      <AddNewPostReduxForm onSubmit={addPost} />
      <div>
        {posts}
      </div>
    </div>
  );
};

export default MyPosts;
