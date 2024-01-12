import {createSelector} from "reselect";
import {AppRootStateType} from "./redux-store";
import exp from "constants";

const getUsersSelector = (state: AppRootStateType) => {
    return state.usersPage.users
}
export const getUsers = createSelector(getUsersSelector, (users) => {
    return users.filter(u => true)
})

export const getPageSize = (state: AppRootStateType) => {
    return state.usersPage.pageSize
}
export const getPortionSize = (state: AppRootStateType) => {
    return state.usersPage.portionSize
}
export const getTotalUsersCount = (state: AppRootStateType) => {
    return state.usersPage.totalItemsCount
}
export const getCurrentPage = (state: AppRootStateType) => {
    return state.usersPage.currentPage
}
export const getIsFetching = (state: AppRootStateType) => {
    return state.usersPage.isFetching
}
export const getFollowingInProgress = (state: AppRootStateType) => {
    return state.usersPage.followingInProgress
}
export const getProfile = (state: AppRootStateType) => {
    // return state.profilePage.profile
    return state.profilePage['profile']
}