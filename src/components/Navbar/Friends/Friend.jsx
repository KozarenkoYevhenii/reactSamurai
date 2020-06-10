import React from 'react';
import s from "./Friend.module.css";

const Friend = (props) => {
  return (
    <div className={s.friend}>
      <img alt='avatar' src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4bkPT14o4_n_lnU-3DNyZol1LE0vParolHN-kXQTD8exgO4-8&usqp=CAU' />
      <p>{props.name}</p>
    </div>
  )
};

export default Friend;