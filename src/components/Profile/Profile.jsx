import React from 'react';
import s from "./Profile.module.css";
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <img src="https://thumbor.forbes.com/thumbor/711x474/https://specials-images.forbesimg.com/dam/imageserve/1169465095/960x0.jpg?fit=scale" alt="network" />
      </div>
      <div>
        ava+info
      </div>
      <MyPosts />
    </div>
    )
};

export default Profile;