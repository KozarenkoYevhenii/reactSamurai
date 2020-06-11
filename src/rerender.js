import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { addPost } from './state/state'

export let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <App state={state} addPost={addPost} />,
    document.getElementById('root')
  )
};
