import React from 'react';
import s from "./MyPosts.module.css";
import Post from './Post/Post';
import { addPostCreateAction, updateNewPostTextCreateAction } from '../../../redux/profile-reducer';

const MyPosts = (props) => {
    let messagesElement = props.messages.map(m => <Post message={m.message} likes={m.likes} />)
    let newPostElement = React.createRef();
    let addPost = () => {
        props.dispatch(addPostCreateAction());
    }
    let onPostChange = () => {
        let text = newPostElement.current.value
        props.dispatch(updateNewPostTextCreateAction(text))
    }

    return (
        <div className={s.posts}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} placeholder='Enter text' />
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