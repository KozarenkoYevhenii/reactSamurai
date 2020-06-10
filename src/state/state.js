let state = {
    dialogsPage: {
        dialogs: [
            {id: '1', name: 'Vasia'},
            {id: '2', name: 'Petia'},
            {id: '3', name: 'Sofiika'},
            {id: '4', name: 'Dima'},
            {id: '5', name: 'Ivan'}
        ],
        dialogMessages: [
            {id: '1', message: 'Hello!'},
            {id: '2', message: 'How are you?'}
        ]
    },
    profilePage: {
        postMessages: [
            {id: '1', message: 'Hey, how are you doing?', likes: '15'},
            {id: '2', message: "It's my first post", likes: '20'},
            {id: '3', message: "It's my second post", likes: '10'}
        ]
    },
    sidebar: {
        friends: [
            {id: '1', name: 'Vasia'},
            {id: '2', name: 'Petia'},
            {id: '3', name: 'Sofiika'},
            {id: '4', name: 'Dima'},
            {id: '5', name: 'Ivan'}
        ]
    }
}

export default state