import React from "react";

import style from './MyPosts.module.css';

import Post from './Post/Post';

const MyPosts = (props) => {
  let posts = props.postMessages.map(p => <Post message={p.message} likeCount={p.likeCount} />);

  let textField = React.createRef();

  const onPostChange = () => {
    debugger
    const text = textField.current.value;
    props.updateTextField(text);
  }

  const addPost = () => {
    props.addPost();
  }

  return (
    <div className={style.postsBlock}>
      My posts
      <div>New posts</div>
      <div>
        <div>
          <textarea ref={textField} onChange={onPostChange} value={props.newPostTextField}></textarea>
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
