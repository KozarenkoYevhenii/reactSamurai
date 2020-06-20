const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

const profileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: '4',
                message: state.newPostText,
                likes: '0'
            }
            state.postMessages.push(newPost)
            state.newPostText = ''
            return state
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            return state
        default:
            return state
    }
}
export const addPostCreateAction = () => ({ type: ADD_POST })
export const updateNewPostTextCreateAction = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })
export default profileReducer