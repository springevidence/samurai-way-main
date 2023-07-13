import {MessagesPageTypeProps, MessagesType} from "./store";
import {addPostActionType, updateNewPostTextActionType} from "./profile-reducer";

const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

export type addMessageActionType = {
    type: 'ADD-MESSAGE'
}
export type updateNewMessageTextActionType = {
    type: 'UPDATE-NEW-MESSAGE-TEXT'
    newMessage: string
}

const initState = {
    dialogs: [
        {id: 1, name: "Alex"},
        {id: 2, name: "Ivan"},
        {id: 3, name: "Andrew"},
        {id: 4, name: "Alexandra"},
        {id: 5, name: "Marina"},
    ],
    messages: [
        {id: 1, message: "Hello"},
        {id: 2, message: "How are you"},
        {id: 3, message: "Bye"},
        {id: 4, message: "Bye-Bye"}
    ],
    newMessageText: ""
}
export const dialogsReducer = (state: MessagesPageTypeProps = initState, action: addPostActionType | updateNewPostTextActionType | addMessageActionType | updateNewMessageTextActionType) => {
    switch (action.type) {
        case ADD_MESSAGE:
            const newMessage: MessagesType = {
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
export const addMessageAC = (): addMessageActionType => ({type: ADD_MESSAGE})

export const updateNewMessageTextAC = (text: string): updateNewMessageTextActionType => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newMessage: text
} as const
)