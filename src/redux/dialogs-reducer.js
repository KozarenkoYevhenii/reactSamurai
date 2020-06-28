const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

let initialState = {
    dialogs: [
        { id: '1', name: 'Vasia' },
        { id: '2', name: 'Petia' },
        { id: '3', name: 'Sofiika' },
        { id: '4', name: 'Dima' },
        { id: '5', name: 'Ivan' }
    ],
    dialogMessages: [
        { id: '1', message: 'Hello!' },
        { id: '2', message: 'How are you?' }
    ],
    newMessageText: ''
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: '2',
                message: state.newMessageText,
            }
            return {
                ...state,
                dialogMessages: [...state.dialogMessages, newMessage],
                newMessageText: ''
            }
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newText
            }
        default:
            return state
    }
}
export const addMessageCreateAction = () => ({ type: ADD_MESSAGE })
export const updateNewMessageTextCreateAction = (text) => ({ type: UPDATE_NEW_MESSAGE_TEXT, newText: text })
export default dialogsReducer