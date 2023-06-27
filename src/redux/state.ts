import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";

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
    newMessageText: string
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

export type StoreType = {
    _state: StatesType
    getState: () => StatesType
    _callSubscriber: (state:StatesType) => void
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionType) => void
    // addPost: () => void
    // updateNewPostText: (newText: string) => void
    // addMessage: () => void
    // updateNewMessageText: (newMessage: string) => void
}
export type ActionType = {
    type: string
    newText?: string
    newMessage?: string
}

export const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hey, how are you?", likesCount: 13},
                {id: 2, message: "It's my first post", likesCount: 11},
                {id: 3, message: "Happy birthday!", likesCount: 7},
                {id: 4, message: "How to learn React JS?", likesCount: 3}
            ],
            newPostText: ''
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
            newMessageText: ""
        }
    },
    getState() {
        return this._state
    },
    // addPost() {
    //     const newPost: postsType = { //what type
    //         id: 5,
    //         message: this._state.profilePage.newPostText,
    //         likesCount: 0
    //     }
    //     this._state.profilePage.posts.unshift(newPost)
    //     this._state.profilePage.newPostText = ''
    //     this._callSubscriber();
    // },
    // updateNewPostText(newText: string) {
    //     this._state.profilePage.newPostText = newText;
    //     this._callSubscriber();
    // },
    // addMessage() {
    //     const newMessage: messagesType = {
    //         id: 5,
    //         message: this._state.messagesPage.newMessageText,
    //     }
    //     this._state.messagesPage.messages.push(newMessage)
    //     this._state.messagesPage.newMessageText = ''
    //     this._callSubscriber();
    // },
    // updateNewMessageText(newMessage: string) {
    //     this._state.messagesPage.newMessageText = newMessage;
    //     this._callSubscriber();
    // },
    _callSubscriber() {
        console.log('state was changed')
    },
    subscribe(observer: () => void) {
        this._callSubscriber = observer
    },
    dispatch(action: ActionType) {
        // if (action.type === ADD_POST) {
        //     const newPost: postsType = { //what type
        //         id: 5,
        //         message: this._state.profilePage.newPostText,
        //         likesCount: 0
        //     }
        //     this._state.profilePage.posts.unshift(newPost)
        //     this._state.profilePage.newPostText = ''
        //     this._callSubscriber();
        // } else if (action.type === UPDATE_NEW_POST_TEXT) {
        //     if (action.newText != null) {
        //         this._state.profilePage.newPostText = action.newText;
        //     }
        //     this._callSubscriber();
        // } else if (action.type === ADD_MESSAGE) {
        //     const newMessage: messagesType = {
        //         id: 5,
        //         message: this._state.messagesPage.newMessageText,
        //     }
        //     this._state.messagesPage.messages.push(newMessage)
        //     this._state.messagesPage.newMessageText = ''
        //     this._callSubscriber();
        // } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
        //     if (action.newMessage != null) {
        //         this._state.messagesPage.newMessageText = action.newMessage;
        //     }
        //     this._callSubscriber();
        // }
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action)
        this._callSubscriber(this._state);

    }
}



// let rerenderEntireTree = (state: StatesType) => {
//     console.log('state was changed')
// }

// export const state: StatesType = {
//     profilePage: {
//         posts: [
//             {id: 1, message: "Hey, how are you?",  likesCount: 13},
//             {id: 2, message: "It's my first post",  likesCount: 11},
//             {id: 3, message: "Happy birthday!",  likesCount: 7},
//             {id: 4, message: "How to learn React JS?",  likesCount: 3}
//         ],
//         newPostText: 'type post'
//     },
//     messagesPage: {
//         dialogs: [
//             {id: 1, name: "Alex"},
//             {id: 2, name: "Ivan"},
//             {id: 3, name: "Andrew"},
//             {id: 4, name: "Alexandra"},
//             {id: 5, name: "Marina"},
//         ],
//         messages: [
//             {id: 1, message: "Hello"},
//             {id: 2, message: "How are you"},
//             {id: 3, message: "Bye"},
//             {id: 4, message: "Bye-Bye"}
//         ],
//         newMessageText: "Test message"
//     }
// }

// export const subscribe = (observer: any) => {
//     rerenderEntireTree(observer)
// }
// export const addPost = () => {
//     const newPost: postsType = { //what type
//         id: 5,
//         message: state.profilePage.newPostText,
//         likesCount: 0
//     }
//     state.profilePage.posts.unshift(newPost)
//     state.profilePage.newPostText = ''
//     rerenderEntireTree(state);
// }

// export const updateNewPostText = (newText: string) => {
//     state.profilePage.newPostText = newText;
//     rerenderEntireTree(state);
// }

// export const addMessage = () => {
//     const newMessage: messagesType = { //what type
//         id: 5,
//         message: state.messagesPage.newMessageText,
//     }
//     state.messagesPage.messages.push(newMessage)
//     state.messagesPage.newMessageText = ''
//     rerenderEntireTree(state);
// }

// export const updateNewMessageText = (newMessage: string) => {
//     state.messagesPage.newMessageText = newMessage;
//     rerenderEntireTree(state);
// }

