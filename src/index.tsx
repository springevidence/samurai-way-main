import {AppRootStateType, store} from "./redux/redux-store";
// import {store} from "./redux/store";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {StatesType} from "./redux/store";
import {Provider} from "react-redux";

let rerenderEntireTree = (state: StatesType) => {
    ReactDOM.render(
        <Provider store={store}>
            <App/>
        </Provider>
        ,
        document.getElementById('root'));
}
rerenderEntireTree(store.getState());
store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(state)
});
