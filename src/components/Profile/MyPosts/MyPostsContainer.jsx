import React from 'react';
import MyPosts from './MyPosts'
import { addPostCreateAction, updateNewPostTextCreateAction } from '../../../redux/profile-reducer';

const MyPostsContainer = (props) => {
    let state = props.store.getState()

    let addPost = () => {
        props.store.dispatch(addPostCreateAction());
    }
    let onPostChange = (text) => {
        props.store.dispatch(updateNewPostTextCreateAction(text))
    }

    return <MyPosts updateNewPostText={onPostChange}
        addPost={addPost}
        posts={state.profilePage.postMessages}
        newPostText={state.profilePage.newPostText} />
};

export default MyPostsContainer;