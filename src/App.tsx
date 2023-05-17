import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

type statePropsType = {
    state: StatesType
}
type StatesType = {
    profilePage: ProfilePageTypeProps
    messagesPage: messagesPageTypeProps
}
export type ProfilePageTypeProps = {
    posts: postsType[]
}
export type messagesPageTypeProps = {
    dialogs: dialogsType[]
    messages: messagesType[]
}
export type dialogsType = {
    id: number
    name: string
}
export type messagesType = {
    id: number
    message: string
}
export type postsType = {
    message: string
    likesCount: number
}

const App = (props: statePropsType) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header />
                <Navbar />
                <div className="app-wrapper-content">
                    <Route path="/profile" render={() => <Profile posts={props.state.profilePage.posts}/>}/>
                    <Route path="/dialogs" render={() => <Dialogs dialogs={props.state.messagesPage.dialogs} messages={props.state.messagesPage.messages}/>}/>
                    <Route path="/new" component={News}/>
                    <Route path="/music" component={Music}/>
                    <Route path="/settings" component={Settings}/>
                </div>
            </div>
        </BrowserRouter>

    );
}
export default App;
