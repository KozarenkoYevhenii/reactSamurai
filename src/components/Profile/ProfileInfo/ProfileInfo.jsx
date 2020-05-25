import React from 'react';
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div className={s.content}>
      <div>
        <img src="https://thumbor.forbes.com/thumbor/711x474/https://specials-images.forbesimg.com/dam/imageserve/1169465095/960x0.jpg?fit=scale" alt="network" />
      </div>
      <div className={s.descriptionBlock}>
        ava+info
      </div>
    </div>
    )
};

export default ProfileInfo;