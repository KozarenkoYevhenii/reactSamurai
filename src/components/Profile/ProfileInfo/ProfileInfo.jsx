import React from 'react';
import Preloader from '../../common/preloader/Preloader';
import Status from '../../Status/Status';
import s from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div className={s.content}>
      <div>
        <img src="https://thumbor.forbes.com/thumbor/711x474/https://specials-images.forbesimg.com/dam/imageserve/1169465095/960x0.jpg?fit=scale" alt="network" />
      </div>
      <div className={s.descriptionBlock}>
        <img src={props.profile.photos.large} alt="oops!" />
        <Status />
      </div>
    </div>
    )
};

export default ProfileInfo;