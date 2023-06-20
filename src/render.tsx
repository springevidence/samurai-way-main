import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addMessage, addPost, StatesType, updateNewPostText} from "./redux/state";
export let rerenderEntireTree = (state: StatesType) => {
    ReactDOM.render(
        <App state={state}
             addPost={addPost}
             updateNewPostText={updateNewPostText}
             addMessage={addMessage}/>,
        document.getElementById('root'));
}
