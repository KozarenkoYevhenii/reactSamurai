import React from 'react';
import s from "./MyPosts.module.css";
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div className={s.posts}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add Post</button>
                </div>
            </div>
            <div className={s.messages}>
                <Post message="Hey, how are you doing?" likes="15"/>
                <Post message="It's my first post" likes="20"/>
            </div>
        </div>
    )
};

export default MyPosts;