import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let appData = {
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
    ],
    postMessages: [
        {id: '1', message: 'Hey, how are you doing?', likes: '15' },
        {id: '2', message: "It's my first post", likes: '20' },
        {id: '3', message: "It's my second post", likes: '10' },
    ]
}

ReactDOM.render(
  <React.StrictMode>
    <App dialogs={appData.dialogs} dialogMessages={appData.dialogMessages} postMessages={appData.postMessages}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
