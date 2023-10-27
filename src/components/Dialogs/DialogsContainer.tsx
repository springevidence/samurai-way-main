import React, {ComponentType} from 'react';
import {StatesType} from "../../redux/store";
import {
    addMessageAC,
    addMessageActionType, InitStateType,
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


type mapStateToPropsType = {
    messagesPage: InitStateType
}
type mapDispatchToPropsType = {
    addMessage: (newMessage: string) => void
}

export type DialogsMapPropsType = mapStateToPropsType & mapDispatchToPropsType
const mapStateToProps = (state: StatesType): mapStateToPropsType => {
    return {
        messagesPage: state.messagesPage,
    }
}
const mapDispatchToProps = (dispatch: (action:addMessageActionType ) => void): mapDispatchToPropsType => {
    return {
        addMessage: (newMessage: string) => {
            dispatch(addMessageAC(newMessage))
        },
    }
}

// const AuthRedirectComponent = WithAuthRedirect(Dialogs)
// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);
export default compose<ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect)
(Dialogs)