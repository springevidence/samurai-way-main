import React from 'react';
import {StatesType, UserType} from "../../redux/store";
import {
    addMessageAC,
    addMessageActionType, InitStateType,
    updateNewMessageTextAC,
    updateNewMessageTextActionType
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


type mapStateToPropsType = {
    messagesPage: InitStateType
}
type mapDispatchToPropsType = {
    addMessage: () => void
    updateNewMessageText: (text: string) => void
}

export type DialogsMapPropsType = mapStateToPropsType & mapDispatchToPropsType
const mapStateToProps = (state: StatesType): mapStateToPropsType => {
    return {
        messagesPage: state.messagesPage
    }
}
const mapDispatchToProps = (dispatch: (action:addMessageActionType | updateNewMessageTextActionType)=>void): mapDispatchToPropsType => {
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