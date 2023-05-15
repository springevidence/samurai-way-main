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
    let dialogsData = [
        {id: 1, name: "Alex"},
        {id: 2, name: "Ivan"},
        {id: 3, name: "Andrew"},
        {id: 4, name: "Alexandra"},
        {id: 5,name: "Marina"},
    ]

    let messagesData = [
        {id: 1, message: "Hello"},
        {id: 2, message: "How are you"},
        {id: 3, message: "Bye"},
    ]
    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItem}>
                    <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                    <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                    <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
                    <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
                    <DialogItem name={dialogsData[4].name} id={dialogsData[4].id}/>
                </div>
                <div className={s.messages}>
                    <Message message={messagesData[0].message} id={messagesData[0].id}/>
                    <Message message={messagesData[1].message} id={messagesData[1].id}/>
                    <Message message={messagesData[2].message} id={messagesData[2].id}/>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;