import {AppThunk} from "./redux-store";
import {followApi, usersApi} from "../api/api";
import {BaseResponseType} from "../components/Header/HeaderContainer";
import {updateObjectInArray} from "../common/object-helpers";

const initState: InitStateType = {
    users: [],
    pageSize: 30,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
}
export const usersReducer = (state: InitStateType = initState, action: ActionType): InitStateType => {
    switch (action.type) {
        case 'FOLLOW':
            return {...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: true})
            };
        case 'UNFOLLOW':
            return {...state, users: updateObjectInArray(state.users, action.userId, 'id', {followed: false})
            };
        case 'SET_USERS':
            return {...state, users: action.users}
        case "SET_CURRENT_PAGE":
            return {...state, currentPage: action.currentPage}
        case "SET_TOTAL_COUNT":
            return {...state, totalUsersCount: action.totalCount}
        case "TOGGLE_IS_FETCHING":
            return {...state, isFetching: action.isFetching}
        case "TOGGLE_FOLLOWING_IN_PROGRESS":
            return {
                ...state, followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state;
    }
}
// action creator
export const followAC = (userId: number): followActionType => ({
    type: 'FOLLOW',
    userId
})
export const unfollowAC = (userId: number): unfollowActionType => ({
    type: 'UNFOLLOW',
    userId
})
export const setUsersAC = (users: UserType[]): setUsersActionType => ({
    type: 'SET_USERS',
    users
})
export const setCurrentPageAC = (currentPage: number): setCurrentPageActionType => ({
    type: "SET_CURRENT_PAGE",
    currentPage
})
export const setTotalUsersCountAC = (totalCount: number): setTotalUsersCountActionType => ({
    type: "SET_TOTAL_COUNT",
    totalCount
})
export const toggleIsFetchingAC = (isFetching: boolean): toggleIsFetchingActionType => ({
    type: "TOGGLE_IS_FETCHING",
    isFetching
})
export const toggleFollowingInProgressAC = (isFetching: boolean, userId: number): toggleFollowingInProgressActionType => ({
    type: 'TOGGLE_FOLLOWING_IN_PROGRESS',
    isFetching,
    userId
})
const followUnfollowFlow = async (dispatch: (action: followActionType | unfollowActionType| toggleFollowingInProgressActionType) => void, userId: number, apiMethod: (userId: number) => Promise<BaseResponseType>, actionCreator: (userId: number) => followActionType | unfollowActionType)  => {
    dispatch(toggleFollowingInProgressAC(true, userId))
    const data = await apiMethod(userId)
    if (data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleFollowingInProgressAC(false, userId))
}
// thunk creator
export const getUsersTC = (currentPage: number, pageSize: number): AppThunk =>
    async (dispatch) => {
        dispatch(toggleIsFetchingAC(true))
        dispatch(setCurrentPageAC(currentPage))

        const data = await usersApi.getUsers(currentPage, pageSize)
        dispatch(toggleIsFetchingAC(false))
        dispatch(setUsersAC(data.items))
        dispatch(setTotalUsersCountAC(data.totalCount))
    }

export const followTC = (userId: number): AppThunk =>
     (dispatch) => {
        const apiMethod = followApi.follow.bind(followApi)
        followUnfollowFlow(dispatch, userId, apiMethod, followAC)

        // dispatch(toggleFollowingInProgressAC(true, userId))
        // const data = await followApi.follow(userId)
        // if (data.resultCode === 0) {
        //     dispatch(followAC(userId))
        // }
        // dispatch(toggleFollowingInProgressAC(false, userId))
    }

export const unfollowTC = (userId: number): AppThunk => {
    return async (dispatch) => {
        const apiMethod = followApi.unfollow.bind(followApi)
        followUnfollowFlow(dispatch, userId, apiMethod, unfollowAC)

        // dispatch(toggleFollowingInProgressAC(true, userId))
        // const data = await followApi.unfollow(userId)
        // if (data.resultCode === 0) {
        //     dispatch(unfollowAC(userId))
        // }
        // dispatch(toggleFollowingInProgressAC(false, userId))
    }
}


//types
export type followActionType = {
    type: 'FOLLOW'
    userId: number
}
export type unfollowActionType = {
    type: 'UNFOLLOW'
    userId: number
}
export type setUsersActionType = {
    type: 'SET_USERS'
    users: UserType[]
}
export type setCurrentPageActionType = {
    type: 'SET_CURRENT_PAGE'
    currentPage: number
}
export type setTotalUsersCountActionType = {
    type: 'SET_TOTAL_COUNT'
    totalCount: number
}
export type toggleIsFetchingActionType = {
    type: 'TOGGLE_IS_FETCHING'
    isFetching: boolean
}
export type toggleFollowingInProgressActionType = {
    type: 'TOGGLE_FOLLOWING_IN_PROGRESS'
    isFetching: boolean
    userId: number
}

export type InitStateType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
}
type UserType = {
    id: number
    photos: string
    followed: boolean
    name: string
    status: string
    // location: { city: string, country: string }
}
type ActionType =
    followActionType
    | unfollowActionType
    | setUsersActionType
    | setCurrentPageActionType
    | setTotalUsersCountActionType
    | toggleIsFetchingActionType
    | toggleFollowingInProgressActionType
