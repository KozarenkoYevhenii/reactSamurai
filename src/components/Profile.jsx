import React from 'react';
import s from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <img src="https://thumbor.forbes.com/thumbor/711x474/https://specials-images.forbesimg.com/dam/imageserve/1169465095/960x0.jpg?fit=scale" alt="network" />
      </div>
      <div>
        ava+info
      </div>
      <div className={s.posts}>
        My posts
        <div>
          new post
        </div>
        <div className={s.item}>
          post1
        </div>
        <div className={s.item}>
          post2
        </div>
      </div>
    </div>
    )
};

export default Profile;