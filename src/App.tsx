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
import {ActionType, StatesType, StoreType} from "./redux/store";

type AppPropsType = {
    store: StoreType
    dispatch: (action: ActionType) => void
    // state: StatesType
    // addPost: () => void
    // updateNewPostText: (newText: string) => void
    // addMessage: () => void
    // updateNewMessageText: (newMessage: string) => void
}
const App = (props: AppPropsType) => {
    const state = props.store.getState()
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header />
                <Navbar />
                <div className="app-wrapper-content">
                    <Route path="/profile" render={() => <Profile
                        dispatch={props.dispatch}
                        posts={state.profilePage.posts}
                        newPostText={state.profilePage.newPostText}
                    />}/>
                    <Route path="/dialogs" render={() => <Dialogs
                        dialogs={state.messagesPage.dialogs}
                        messages={state.messagesPage.messages}
                        newMessageText={state.messagesPage.newMessageText}
                        dispatch={props.dispatch}
                        />}/>
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