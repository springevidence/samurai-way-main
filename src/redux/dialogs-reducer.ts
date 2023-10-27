import {addPostActionType} from "./profile-reducer";

const ADD_MESSAGE = 'ADD-MESSAGE';

export type addMessageActionType = {
    type: 'ADD-MESSAGE',
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
type ActionType = addPostActionType | addMessageActionType
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
    ] as MessagesType[]
}
export const dialogsReducer = (state: InitStateType = initState, action: ActionType): InitStateType => {
    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, {
                    id: 6,
                    message: action.newMessage,
                }],
            };
        default:
            return state;
    }
}
export const addMessageAC = (newMessage: string): addMessageActionType => ({type: ADD_MESSAGE, newMessage} as const)
