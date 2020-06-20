const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'


const dialogsReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: '2',
                message: state.newMessageText,
            }
            state.dialogMessages.push(newMessage)
            state.newMessageText = ''            
            return state
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText
            return state
        default:
            return state
    }
}
export const addMessageCreateAction = () => ({ type: ADD_MESSAGE })
export const updateNewMessageTextCreateAction = (text) => ({ type: UPDATE_NEW_MESSAGE_TEXT, newText: text })
export default dialogsReducer