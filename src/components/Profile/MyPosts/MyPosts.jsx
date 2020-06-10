import React from 'react';
import s from "./MyPosts.module.css";
import Post from './Post/Post';

const MyPosts = (props) => {
    let messagesElement = props.messages.map(m => <Post message={m.message} likes={m.likes}/>)
    let newPostElement = React.createRef();
    let addPost = () => {
        let text = newPostElement.current.value;
        alert(text);
    }

    return (
        <div className={s.posts}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add Post</button>
                </div>
            </div>
            <div className={s.messages}>
                {messagesElement}
            </div>
        </div>
    )
};

export default MyPosts;