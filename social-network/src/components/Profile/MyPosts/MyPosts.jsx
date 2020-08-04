import React from "react";

import Post from './Post/Post';

import style from './MyPosts.module.css';

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>New posts</div>
      <div>
        <Post message="What's up?"/>
        <Post message="This is my first post!"/>
      </div>
    </div>
  );
};

export default MyPosts;
