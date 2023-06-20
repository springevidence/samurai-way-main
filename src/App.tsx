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
import {addMessage, StatesType, updateNewPostText} from "./redux/state";

type AppPropsType = {
    state: StatesType
    addPost: () => void
    updateNewPostText: (newText: string) => void
    addMessage: () => void
}
const App = (props: AppPropsType) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header />
                <Navbar />
                <div className="app-wrapper-content">
                    <Route path="/profile" render={() => <Profile
                        posts={props.state.profilePage.posts}
                        addPost={props.addPost}
                        newPostText={props.state.profilePage.newPostText}
                        updateNewPostText={props.updateNewPostText}/>}/>
                    <Route path="/dialogs" render={() => <Dialogs
                        dialogs={props.state.messagesPage.dialogs}
                        messages={props.state.messagesPage.messages}
                        addMessage={props.addMessage}/>}/>
                    <Route path="/new" component={News}/>
                    <Route path="/music" component={Music}/>
                    <Route path="/settings" component={Settings}/>
                </div>
            </div>
        </BrowserRouter>

    );
}
export default App;

export class postsType {
}