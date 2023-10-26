import {addMessageActionType, updateNewMessageTextActionType} from "./dialogs-reducer";
import {v1} from "uuid";
import {AppThunk} from "./redux-store";
import {profileApi} from "../api/api";

const initState: ProfilePageTypeProps = {
    posts: [
        {id: 1, message: "Hey, how are you?", likesCount: 13},
        {id: 2, message: "It's my first post", likesCount: 11},
        {id: 3, message: "Happy birthday!", likesCount: 7},
        {id: 4, message: "How to learn React JS?", likesCount: 3}
    ],
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
        }},
    status: ''
}
export const profileReducer = (state: ProfilePageTypeProps = initState, action: ActionType) => {
    switch (action.type) {
        case 'ADD-POST':
            return {
                ...state, posts: [{id: 5, message: action.newPostText, likesCount: 0}, ...state.posts]};
        case "SET-USER-PROFILE":
            return {...state, profile: action.profile}
        case 'SET-USER-STATUS':
            return {...state, status: action.status}
        default:
            return state;
    }
}

export const addPostAC = (newPostText: string): addPostActionType => ({
    type: 'ADD-POST',
    newPostText
})


export const setUserProfileAC = (profile: UserProfileType): setUserProfileActionType => ({
    type: 'SET-USER-PROFILE',
    profile
})

export const setUserStatusAC = (status: string): setUserStatusActionType => ({
    type: 'SET-USER-STATUS',
    status
})
//thunk creator
export const getUserProfileTC = (userId: number): AppThunk => {
    return (dispatch) => {
        profileApi.getProfile(userId).then(res => {
            dispatch(setUserProfileAC(res.data))
        })
    }
}

export const getUserStatusTC = (userId: number): AppThunk => {
    return (dispatch) => {
        profileApi.getStatus(userId)
            .then(res => {
                console.log(res)
                dispatch(setUserStatusAC(res.data))
            })
    }
}

export const updateUserStatusTC = (status: string): AppThunk => {
    return (dispatch) => {
        profileApi.updateStatus(status)
            .then(res => {
                if (res.data.resultCode === 0) {
                    dispatch(setUserStatusAC(status))
                }
            })
    }
}

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
    profile: UserProfileType   //!!!!!!!!!!!!!!!!!!!!!!!!!!!
    status: string
}
export type PostsType = {
    id: number
    message: string
    likesCount: number
}
export type addPostActionType = {
    type: 'ADD-POST'
    newPostText: string
}
export type setUserProfileActionType = {
    type: 'SET-USER-PROFILE'
    profile: UserProfileType
}
export type setUserStatusActionType = {
    type: 'SET-USER-STATUS'
    status: string
}

type ActionType =
    addPostActionType
    | addMessageActionType
    | updateNewMessageTextActionType
    | setUserProfileActionType
    | setUserStatusActionType