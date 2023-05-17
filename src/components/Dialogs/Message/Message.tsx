import React from 'react';
import s from './../Dialogs.module.css'
import {messagesType} from "../../../App";

const Message = (props: messagesType) => {
    return <div className={s.message}>
        {props.message}
    </div>
}

export default Message;