import {rerenderEntireTree} from "../render";

export type StatesType = {
    profilePage: ProfilePageTypeProps
    messagesPage: messagesPageTypeProps
}
export type ProfilePageTypeProps = {
    posts: postsType[]
    newPostText: string
}
export type messagesPageTypeProps = {
    dialogs: dialogsType[]
    messages: messagesType[]
    newMessage: string
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

export const state: StatesType = {
    profilePage: {
        posts: [
            {id: 1, message: "Hey, how are you?",  likesCount: 13},
            {id: 2, message: "It's my first post",  likesCount: 11},
            {id: 3, message: "Happy birthday!",  likesCount: 7},
            {id: 4, message: "How to learn React JS?",  likesCount: 3}
        ],
        newPostText: 'type post'
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
        newMessage: "Test message"
    }
}

export const addPost = () => {
    const newPost: postsType = { //what type
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    }
    state.profilePage.posts.unshift(newPost)
    state.profilePage.newPostText = ''
    rerenderEntireTree(state);
}

export const updateNewPostText = (newText: string) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export const addMessage = () => {
    const newMessage: messagesType = { //what type
        id: 5,
        message: state.messagesPage.newMessage,
    }
    state.messagesPage.messages.push(newMessage)
    state.messagesPage.newMessage = ''
    rerenderEntireTree(state);
}
