import React from 'react';
import {StatesType, StoreType,} from "../../redux/store";
import {
    addMessageAC,
    addMessageActionType,
    updateNewMessageTextAC,
    updateNewMessageTextActionType
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {addPostActionType, updateNewPostTextActionType} from "../../redux/profile-reducer";

type DialogsPropsType = {
    store: StoreType
}
// const DialogsContainer = (props: DialogsPropsType) => {
//     const state = props.store.getState().messagesPage
//     const sendMessage = () => {
//         props.store.dispatch(addMessageAC())
//     }
//     const onMessageChange = (text: string) => {
//         props.store.dispatch(updateNewMessageTextAC(text))
//     }
//     return (
//         <Dialogs store={props.store}
//                  updateNewMessageText={onMessageChange}
//                  addMessage={sendMessage}
//                  messagesPage={state}/>
//     );
// };

const mapStateToProps = (state: StatesType) => {
    return {
        messagesPage: state.messagesPage
    }
}
const mapDispatchToProps = (dispatch: (action: addPostActionType | updateNewPostTextActionType | addMessageActionType | updateNewMessageTextActionType)=>void) => {
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