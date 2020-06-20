import profileReducer from "./profile-reducer"
import dialogsReducer from "./dialogs-reducer"
import sidebarReducer from "./sidebar-reducer"

let store = {

    _state: {
        dialogsPage: {
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
        },
        profilePage: {
            postMessages: [
                { id: '1', message: 'Hey, how are you doing?', likes: '15' },
                { id: '2', message: "It's my first post", likes: '20' },
                { id: '3', message: "It's my second post", likes: '10' }
            ],
            newPostText: ''
        },
        sidebar: {
            friends: [
                { id: '1', name: 'Vasia' },
                { id: '2', name: 'Petia' },
                { id: '3', name: 'Sofiika' },
                { id: '4', name: 'Dima' },
                { id: '5', name: 'Ivan' }
            ]
        }
    },
    _callSubscriber() { },
    getState() {
        return this._state
    },
    subscriber(observer) {
        this._callSubscriber = observer
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)
        this._callSubscriber()
    }
}





export default store