import React from 'react';
import s from "./MyPosts.module.css";
import Post from './Post/Post';

const MyPosts = () => {

    let messages = [
        {id: '1', message: 'Hey, how are you doing?', likes: '15' },
        {id: '2', message: "It's my first post", likes: '20' },
        {id: '3', message: "It's my second post", likes: '10' },
    ]

    let messagesElement = messages.map(m => <Post message={m.message} likes={m.likes}/>)

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
                {messagesElement}
            </div>
        </div>
    )
};

export default MyPosts;