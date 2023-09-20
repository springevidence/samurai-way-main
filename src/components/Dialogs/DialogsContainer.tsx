import React, {ComponentType} from 'react';
import {StatesType} from "../../redux/store";
import {
    addMessageAC,
    addMessageActionType, InitStateType,
    updateNewMessageTextAC,
    updateNewMessageTextActionType
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


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
        messagesPage: state.messagesPage,
    }
}
const mapDispatchToProps = (dispatch: (action:addMessageActionType | updateNewMessageTextActionType) => void): mapDispatchToPropsType => {
    return {
        addMessage: () => {
            dispatch(addMessageAC())
        },
        updateNewMessageText: (text: string) => {
            dispatch(updateNewMessageTextAC(text))
        }
    }
}

// const AuthRedirectComponent = WithAuthRedirect(Dialogs)
// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);
export default compose<ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect)
(Dialogs)