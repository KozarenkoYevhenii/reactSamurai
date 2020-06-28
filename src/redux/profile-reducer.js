const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState = {
    postMessages: [
        { id: '1', message: 'Hey, how are you doing?', likes: '15' },
        { id: '2', message: "It's my first post", likes: '20' },
        { id: '3', message: "It's my second post", likes: '10' }
    ],
    newPostText: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: '4',
                message: state.newPostText,
                likes: '0'
            }
            return {
                ...state,
                postMessages: [...state.postMessages, newPost],
                newPostText: ''
            }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        default:
            return state
    }
}
export const addPostCreateAction = () => ({ type: ADD_POST })
export const updateNewPostTextCreateAction = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })
export default profileReducer