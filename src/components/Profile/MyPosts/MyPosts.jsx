import React from 'react';
import s from "./MyPosts.module.css";
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div className={s.posts}>
      My posts
      <div>
        <textarea></textarea>
        <button>Add Post</button>
      </div>
      <Post message="Hey, how are you doing?" likes="15" />
      <Post message="It's my first post" likes="20" />
    </div>
  )
};

export default MyPosts;