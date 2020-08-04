import React from "react";
import style from './Profile.module.css';

const Profile = () => {
  return (
    <div className={style.profile}>
      <div>
        <img src="https://images.squarespace-cdn.com/content/v1/5a5906400abd0406785519dd/1552662149940-G6MMFW3JC2J61UBPROJ5/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/baelen.jpg?format=1500w" />
      </div>
      <div>Avatar + description</div>
      <div>
        My posts
        <div>New posts</div>
        <div>
          <div className={style.item}>
            post 1
          </div>
          <div className={style.item}>
            post 2
            </div>
            <div className={style.item}>
            post 3
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
