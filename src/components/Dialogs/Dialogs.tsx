import React, {ChangeEventHandler} from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsMapPropsType} from "./DialogsContainer";

const Dialogs = (props: DialogsMapPropsType) => {
    const state = props.messagesPage
    const dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>)
    const messagesElements = state.messages.map(m => <Message message={m.message} key={m.id} id={m.id}/>)
    const newMessageElement = state.newMessageText
    const sendMessage = () => {
        props.addMessage()
    }
    const onMessageChange = (e: any) => {
        const text = e.name; // text area все запорола
        props.updateNewMessageText(text)
    }
    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItem}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                    {messagesElements}
                </div>
            </div>
            <div className={s.sendMessage}>
                <div>
                    <textarea placeholder={'Type your message'}
                              // ref={newMessageElement} !!!!!!!!!!!!!
                              value={newMessageElement}
                              onChange={onMessageChange}/>
                </div>
                <div>
                    <button onClick={sendMessage}>Send message</button>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;