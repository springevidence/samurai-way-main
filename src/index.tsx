import {store} from "./redux/state";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {StatesType} from "./redux/state";
let rerenderEntireTree = () => {
    ReactDOM.render(
        <App
            // state={store.getState}
            store={store}
            dispatch={store.dispatch.bind(store)}
             // addPost={store.addPost.bind(store)}
             // updateNewPostText={store.updateNewPostText.bind(store)}
             // addMessage={store.addMessage.bind(store)}
             // updateNewMessageText={store.updateNewMessageText.bind(store)}
        />,
        document.getElementById('root'));
}


store.subscribe(rerenderEntireTree);
rerenderEntireTree();
