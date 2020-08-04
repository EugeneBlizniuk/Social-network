import React from "react";

import Post from './Post/Post';

import style from './MyPosts.module.css';

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>New posts</div>
      <div>
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
};

export default MyPosts;
