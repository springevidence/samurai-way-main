import {rerenderEntireTree} from "../render";

export type StatesType = {
    profilePage: ProfilePageTypeProps
    messagesPage: messagesPageTypeProps
}
export type ProfilePageTypeProps = {
    posts: postsType[]
}
export type messagesPageTypeProps = {
    dialogs: dialogsType[]
    messages: messagesType[]
}
export type dialogsType = {
    id: number
    name: string
}
export type messagesType = {
    id: number
    message: string
}
export type postsType = {
    id: number
    message: string
    likesCount: number
}

let state: StatesType = {
    profilePage: {
        posts: [
            {id: 1, message: "Hey, how are you?",  likesCount: 13},
            {id: 2, message: "It's my first post",  likesCount: 11},
            {id: 3, message: "Happy birthday!",  likesCount: 7},
            {id: 4, message: "How to learn React JS?",  likesCount: 3}
        ]
    },
    messagesPage: {
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
    }
}

export let addPost = (postMessage: string) => {
    let newPost: postsType = { //what type
        id: 5,
        message: postMessage,
        likesCount: 0
    }
    state.profilePage.posts.unshift(newPost)
    rerenderEntireTree(state)
}
export default state;