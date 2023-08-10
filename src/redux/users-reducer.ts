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


export type InitStateType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}
type UserType = {
    id: number
    photos: string
    followed: boolean
    name: string
    status: string
    // location: { city: string, country: string }
}
type ActionType = followActionType | unfollowActionType | setUsersActionType | setCurrentPageActionType | setTotalUsersCountActionType | toggleIsFetchingActionType

const initState: InitStateType = {
    users: [],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true
}
export const usersReducer = (state: InitStateType = initState, action: ActionType): InitStateType => {
    switch (action.type) {
        case 'FOLLOW':
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)};
        case 'UNFOLLOW':
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)};
        case 'SET_USERS':
            return {...state, users: action.users}
        case "SET_CURRENT_PAGE":
            return {...state, currentPage: action.currentPage}
        case "SET_TOTAL_COUNT":
            return {...state, totalUsersCount: action.totalCount}
        case "TOGGLE_IS_FETCHING":
            return {...state, isFetching: action.isFetching}
        default:
            return state;
    }
}

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
