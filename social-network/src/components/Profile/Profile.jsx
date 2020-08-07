import React from "react";

import MyPosts from "./MyPosts/MyPosts";

import style from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div className={style.profile}>
      <ProfileInfo dispatch={props.dispatch} textFieldValue={props.textFieldValue}/>
      <MyPosts postMessages={props.postMessages} />
    </div >
  );
};

export default Profile;
