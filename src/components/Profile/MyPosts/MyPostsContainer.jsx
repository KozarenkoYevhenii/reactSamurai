import MyPosts from './MyPosts'
import { addPostCreateAction, updateNewPostTextCreateAction } from '../../../redux/profile-reducer';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage,
        newPostText: state.profilePage.newPostText
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostCreateAction());
        },
        updateNewPostText: (text) => {
            dispatch(updateNewPostTextCreateAction(text))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer