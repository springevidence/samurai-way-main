import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {dialogsType, messagesType, updateNewMessageText} from "../../redux/state";

type DialogsPropsType = {
    dialogs: dialogsType[]
    messages: messagesType[]
    addMessage: () => void
    newMessageText: string
    updateNewMessageText: (newMessage: string) => void
}
const Dialogs = (props: DialogsPropsType) => {
    // let dialogs = [
    //     {id: 1, name: "Alex"},
    //     {id: 2, name: "Ivan"},
    //     {id: 3, name: "Andrew"},
    //     {id: 4, name: "Alexandra"},
    //     {id: 5,name: "Marina"},
    // ]
    // let messages = [
    //     {id: 1, message: "Hello"},
    //     {id: 2, message: "How are you"},
    //     {id: 3, message: "Bye"},
    //     {id: 4, message: "Bye-Bye"}
    // ]

    const dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    const messagesElements = props.messages.map(m => <Message message={m.message} id={m.id}/>)
    const newMessageElement = React.createRef<any>() //what type?
    const sendMessage = () => {
        props.addMessage()
    }
    const onMessageChange = () => {
        const text = newMessageElement.current.value;
        updateNewMessageText(text)
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
                    <textarea ref={newMessageElement}
                              value={props.newMessageText}
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