import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {ActionType, DialogsType, MessagesType, } from "../../redux/store";
import {addMessageAC, updateNewMessageTextAC} from "../../redux/dialogs-reducer";

type DialogsPropsType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
    // addMessage: () => void
    newMessageText: string
    // updateNewMessageText: (newMessage: string) => void
    dispatch: (action: ActionType) => void

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
        // props.addMessage()
        props.dispatch(addMessageAC())
    }
    const onMessageChange = () => {
        const text = newMessageElement.current.value;
        // props.updateNewMessageText(text)
        props.dispatch(updateNewMessageTextAC(text))
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