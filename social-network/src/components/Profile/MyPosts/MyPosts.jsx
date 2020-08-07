import React from "react";

import style from './MyPosts.module.css';

import Post from './Post/Post';
import { addPostActionCreator, updateTextFieldActionCreator } from '../../../redux/state';

const MyPosts = (props) => {
  let posts = props.postMessages.map(p => <Post message={p.message} likeCount={p.likeCount} />);

  let textFieldValue = React.createRef();

  const onPostChange = () => {
    const textToSend = textFieldValue.current.value;
    const action = updateTextFieldActionCreator(textToSend);
    props.dispatch(action);
  }

  const addPost = () => {
    const action = addPostActionCreator();
    props.dispatch(action);
  }

  return (
    <div className={style.postsBlock}>
      My posts
      <div>New posts</div>
      <div>
        <div>
          <textarea ref={textFieldValue} onChange={onPostChange} value={props.textFieldValue}></textarea>
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div>
        {posts}
      </div>
    </div>
  );
};

export default MyPosts;
