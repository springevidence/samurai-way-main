import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

let dialogs = [
    {id: 1, name: "Alex"},
    {id: 2, name: "Ivan"},
    {id: 3, name: "Andrew"},
    {id: 4, name: "Alexandra"},
    {id: 5, name: "Marina"},
]
let messages = [
    {id: 1, message: "Hello"},
    {id: 2, message: "How are you"},
    {id: 3, message: "Bye"},
    {id: 4, message: "Bye-Bye"}
]
let posts = [
    {message: "Hey, how are you?",  likesCount: 13},
    {message: "It's my first post",  likesCount: 11},
    {message: "Happy birthday!",  likesCount: 7},
    {message: "How to learn React JS?",  likesCount: 3}
]
ReactDOM.render(
    <App dialogs={dialogs} messages={messages} posts={posts}/>,
  document.getElementById('root')
);