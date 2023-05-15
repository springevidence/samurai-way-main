import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogItemPropsType = {
    name: string
    id: number
}

type MessageType = {
    message: string
    id: number
}
const DialogItem = (props: DialogItemPropsType) => {
    return <div className={s.dialog + " " + s.active}>
        <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
    </div>
}
const Message = (props: MessageType) => {
    return <div className={s.message}>{props.message}</div>
}
const Dialogs = () => {
    let dialogs = [
        {id: 1, name: "Alex"},
        {id: 2, name: "Ivan"},
        {id: 3, name: "Andrew"},
        {id: 4, name: "Alexandra"},
        {id: 5,name: "Marina"},
    ]
    let messages = [
        {id: 1, message: "Hello"},
        {id: 2, message: "How are you"},
        {id: 3, message: "Bye"},
        {id: 4, message: "Bye-Bye"}
    ]

    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = messages.map(m => <Message message={m.message} id={m.id}/>)

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
        </div>
    );
};

export default Dialogs;