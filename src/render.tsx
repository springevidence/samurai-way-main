import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, StatesType} from "./redux/state";
export let rerenderEntireTree = (state: StatesType) => {
    ReactDOM.render(
        <App state={state} addPost={addPost}/>,
        document.getElementById('root'));
}
