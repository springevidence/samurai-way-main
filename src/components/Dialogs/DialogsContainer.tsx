import React from 'react';
import {StatesType} from "../../redux/store";
import {
    addMessageAC,
    addMessageActionType,
    updateNewMessageTextAC,
    updateNewMessageTextActionType
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

const mapStateToProps = (state: StatesType) => {
    return {
        messagesPage: state.messagesPage
    }
}
const mapDispatchToProps = (dispatch: (action:addMessageActionType | updateNewMessageTextActionType)=>void) => {
    return {
        addMessage: () => {
            dispatch(addMessageAC())
        },
        updateNewMessageText: (text: string) => {
            dispatch(updateNewMessageTextAC(text))
        }
    }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
export default DialogsContainer;