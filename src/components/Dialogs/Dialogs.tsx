import React, {ChangeEventHandler} from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {MessagesPageTypeProps, StoreType,} from "../../redux/store";

type DialogsPropsType = {
    store: StoreType
    updateNewMessageText: (text: string) => void
    addMessage: () => void
    messagesPage: MessagesPageTypeProps
}
const Dialogs = (props: DialogsPropsType) => {
    const state = props.messagesPage
    const dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    const messagesElements = state.messages.map(m => <Message message={m.message} id={m.id}/>)
    const newMessageElement = state.newMessageText
    const sendMessage = () => {
        props.addMessage()
    }
    const onMessageChange = (e: ChangeEventHandler<HTMLTextAreaElement>) => {
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
                              ref={newMessageElement}
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