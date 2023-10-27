import React, {ChangeEventHandler} from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsMapPropsType} from "./DialogsContainer";
import {Navigate} from 'react-router-dom'
import AddMessageForm from "./Message/AddMessageForm";


const Dialogs = (props: DialogsMapPropsType) => {

    const dialogsElements = props.messagesPage.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>)
    const messagesElements = props.messagesPage.messages.map(m => <Message message={m.message} key={m.id} id={m.id}/>)
    const sendMessage = (newMessage: string) => {
        props.addMessage(newMessage)
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
                <AddMessageForm sendMessage={sendMessage}/>
            </div>
        </div>
    );
};

export default Dialogs;


//    const onMessageChange = (e: any) => {
//         const text = e.name; // text area все запорола
//         props.updateNewMessageText(text)
//     }