import React from "react";

import Post from './Post/Post';

import style from './MyPosts.module.css';

const MyPosts = (props) => {
  let posts = props.postMessages.map(p => <Post message={p.message} likeCount={p.likeCount} />);
  return (
    <div className={style.postsBlock}>
      My posts
      <div>New posts</div>
      <div>
        { posts }
      </div>
    </div>
  );
};

export default MyPosts;
