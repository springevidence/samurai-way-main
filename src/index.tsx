import {AppRootStateType, store} from "./redux/redux-store";
// import {store} from "./redux/store";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {StatesType} from "./redux/store";
let rerenderEntireTree = (state: StatesType) => {
    ReactDOM.render(
        <App state={state}
            dispatch={store.dispatch.bind(store)}
            // state={store.getState}
            // state={state}
             // addPost={store.addPost.bind(store)}
             // updateNewPostText={store.updateNewPostText.bind(store)}
             // addMessage={store.addMessage.bind(store)}
             // updateNewMessageText={store.updateNewMessageText.bind(store)}
        />,
        document.getElementById('root'));
}
    rerenderEntireTree(store.getState());
store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(state)
});
