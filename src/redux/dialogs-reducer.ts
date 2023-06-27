import {ActionType, messagesPageTypeProps, messagesType, StatesType} from "./state";

const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
export const dialogsReducer = (state: messagesPageTypeProps, action: ActionType) => {
    switch (action.type) {
        case ADD_MESSAGE:
            const newMessage: messagesType = {
                id: 5,
                message: state.newMessageText,
            }
            state.messages.push(newMessage)
            state.newMessageText = ''
            return state;

        case UPDATE_NEW_MESSAGE_TEXT:
            if (action.newMessage != null) {
                state.newMessageText = action.newMessage;
            }
            return state;
        default:
            return state;
    }
}
export const addMessageAC = () => ({type: ADD_MESSAGE})

export const updateNewMessageTextAC = (text: string) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newMessage: text
})