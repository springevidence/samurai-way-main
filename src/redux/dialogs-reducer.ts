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
export type DialogsType = {
    id: number
    name: string
}
export type MessagesType = {
    id: number
    message: string
}
export type MessagesPageTypeProps = {
    dialogs: DialogsType[]
    messages: MessagesType[]
    newMessageText: string
}
export type InitStateType = typeof initState
type ActionType = addPostActionType | updateNewPostTextActionType | addMessageActionType | updateNewMessageTextActionType
const initState = {
    dialogs: [
        {id: 1, name: "Alex"},
        {id: 2, name: "Ivan"},
        {id: 3, name: "Andrew"},
        {id: 4, name: "Alexandra"},
        {id: 5, name: "Marina"},
    ] as DialogsType[],
    messages: [
        {id: 1, message: "Hello"},
        {id: 2, message: "How are you"},
        {id: 3, message: "Bye"},
        {id: 4, message: "Bye-Bye"}
    ] as MessagesType[],
    newMessageText: ""
}
export const dialogsReducer = (state: InitStateType = initState, action: ActionType): InitStateType => {
    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, {
                    id: 6,
                    message: state.newMessageText,
                }],
                newMessageText: ''
            };
        case UPDATE_NEW_MESSAGE_TEXT:
            // if (action.newMessage != null) {
            // }
            return {...state, newMessageText: action.newMessage};
        default:
            return state;
    }
}
export const addMessageAC = (): addMessageActionType => ({type: ADD_MESSAGE} as const)

export const updateNewMessageTextAC = (text: string): updateNewMessageTextActionType => ({
        type: UPDATE_NEW_MESSAGE_TEXT,
        newMessage: text
    } as const
)