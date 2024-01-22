import {addMessageActionType} from "./dialogs-reducer";
import {v1} from "uuid";
import {AppThunk} from "./redux-store";
import {profileApi} from "../api/api";
import {handleServerAppError} from "../common/utills/handle-server-app-error";

const initState: ProfilePageTypeProps = {
    posts: [
        {id: 1, message: "Hey, how are you?", likesCount: 13},
        {id: 2, message: "It's my first post", likesCount: 11},
        {id: 3, message: "Happy birthday!", likesCount: 7},
        {id: 4, message: "How to learn React JS?", likesCount: 3}
    ],
    profile: {
        aboutMe: '',
        contacts: {
            facebook: '',
            website: '',
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
        }
    },
    status: ''
}
export const profileReducer = (state: ProfilePageTypeProps = initState, action: ActionType) => {
    switch (action.type) {
        case 'ADD-POST':
            return {
                ...state, posts: [{id: 5, message: action.newPostText, likesCount: 0}, ...state.posts]
            };
        case "SET-USER-PROFILE":
            return {...state, profile: action.profile}
        case 'SET-USER-STATUS':
            return {...state, status: action.status}
        case 'SAVE-PHOTO-SUCCESS':
            return {...state, profile: {...state.profile, photos: action.photoFile}}
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
export const savePhotoSuccessAC = (photoFile: File): savePhotoSuccessActionType => ({
    type: 'SAVE-PHOTO-SUCCESS',
    photoFile
})


//thunk creator
export const getUserProfileTC = (userId: number | null): AppThunk =>
    async (dispatch) => {
        const res = await profileApi.getProfile(userId)
        dispatch(setUserProfileAC(res.data))
    }


export const getUserStatusTC = (userId: number): AppThunk =>
    async (dispatch) => {
        const res = await profileApi.getStatus(userId)
        dispatch(setUserStatusAC(res.data))
    }


export const updateUserStatusTC = (status: string): AppThunk =>
    async (dispatch) => {
        const res = await profileApi.updateStatus(status)
        if (res.data.resultCode === 0) {
            dispatch(setUserStatusAC(status))
        }
    }
export const savePhotoTC = (file: File): AppThunk =>
    async (dispatch) => {
        const res = await profileApi.savePhoto(file)
        if (res.data.resultCode === 0) {
            dispatch(savePhotoSuccessAC(res.data.data.photos))
        }
    }
export const saveProfileTC = (profile: UserProfileType): AppThunk =>
    async (dispatch, getState) => {
        const userId = getState().auth.id
        const res = await profileApi.saveProfile(profile)
        // debugger
        if (res.data.resultCode === 0) {
            debugger
            dispatch(getUserProfileTC(userId))
        }
        // else {
        //     handleServerAppError(res.data, dispatch)
        // }
    }


export type UserProfileType = {
    aboutMe: string
    contacts: ContactsType
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: {
        small: string
        large: string
    }
}

export type ContactsType = {
    facebook: string | null
    website: string | null
    vk: string | null
    twitter: string | null
    instagram: string | null
    youtube: string | null
    github: string | null
    mainLink: string | null
}
export type ProfilePageTypeProps = {
    posts: PostsType[]
    profile: UserProfileType
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
export type savePhotoSuccessActionType = {
    type: 'SAVE-PHOTO-SUCCESS'
    photoFile: File
}


type ActionType =
    addPostActionType
    | addMessageActionType
    | setUserProfileActionType
    | setUserStatusActionType
    | savePhotoSuccessActionType
