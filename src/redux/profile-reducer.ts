import {addMessageActionType, updateNewMessageTextActionType} from "./dialogs-reducer";
import {v1} from "uuid";

const initState: ProfilePageTypeProps = {
    posts: [
        {id: 1, message: "Hey, how are you?", likesCount: 13},
        {id: 2, message: "It's my first post", likesCount: 11},
        {id: 3, message: "Happy birthday!", likesCount: 7},
        {id: 4, message: "How to learn React JS?", likesCount: 3}
    ],
    newPostText: '',
    profile: {aboutMe: '',
        contacts: {
            facebook: '',
            website: null,
            vk: '',
            twitter: '',
            instagram: '',
            youtube: null,
            github: '',
            mainLink: null
        },
        lookingForAJob: false,
        lookingForAJobDescription: '',
        fullName: '',
        userId: +v1(),
        photos: {
            small: '',
            large: ''
        }}
    // как типизировать profile?
}
export const profileReducer = (state: ProfilePageTypeProps = initState, action: ActionType) => {
    switch (action.type) {
        case 'ADD-POST':
            return {
                ...state, posts: [{id: 5, message: state.newPostText, likesCount: 0}, ...state.posts], newPostText: ''};
        case 'UPDATE-NEW-POST-TEXT':
            return {...state, newPostText: action.newText};
        case "SET-USER-PROFILE":
            return {...state, profile: action.profile}
        default:
            return state;
    }
}

export const addPostAC = (): addPostActionType => ({
    type: 'ADD-POST'
})
export const updateNewPostTextAC = (text: string): updateNewPostTextActionType => ({
    type: 'UPDATE-NEW-POST-TEXT',
    newText: text
})

export const setUserProfileAC = (profile: UserProfileType): setUserProfileActionType => ({
    type: 'SET-USER-PROFILE',
    profile
})

export type UserProfileType = {
    aboutMe: string
    contacts: {
        facebook: string
        website: null
        vk: string
        twitter: string
        instagram: string
        youtube: null
        github: string
        mainLink: null
    },
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: {
        small: string
        large: string
    }
}
export type ProfilePageTypeProps = {
    posts: PostsType[]
    newPostText: string
    profile: UserProfileType   //!!!!!!!!!!!!!!!!!!!!!!!!!!!
}
export type PostsType = {
    id: number
    message: string
    likesCount: number
}
export type addPostActionType = {
    type: 'ADD-POST'
}
export type updateNewPostTextActionType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}
export type setUserProfileActionType = {
    type: 'SET-USER-PROFILE'
    profile: UserProfileType
}
type ActionType =
    addPostActionType
    | updateNewPostTextActionType
    | addMessageActionType
    | updateNewMessageTextActionType
    | setUserProfileActionType