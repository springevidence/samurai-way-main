import React, {FC, useEffect} from 'react';
import {connect} from "react-redux";
import {UserType} from "../../redux/store";
import {
    followAC,
    setCurrentPageAC,
    setUsersAC, toggleFollowingInProgressAC,
    unfollowAC, getUsersTC, unfollowTC, followTC
} from "../../redux/users-reducer";
import {AppRootStateType} from "../../redux/redux-store";
import Users from "./Users";
import Preloader from "../common/preloader/Preloader";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize, getPortionSize, getProfile,
    getTotalUsersCount,
    getUsers
} from "../../redux/users-selectors";
import {UserProfileType} from "../../redux/profile-reducer";


type mapStateToPropsType = {
    users: UserType[]
    pageSize: number
    portionSize: number
    totalItemsCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
    profile: UserProfileType
}
type mapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: UserType[]) => void
    setCurrentPage: (currentPage: number) => void
    toggleFollowingInProgress: (isFetching: boolean, userId: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
    unfollowUser: (userId: number) => void
    followUser: (userId: number) => void
}

export type UsersMapPropsType = mapStateToPropsType & mapDispatchToPropsType

const UsersComponent = (props: UsersMapPropsType) => {

    useEffect(() => {
        const {currentPage, pageSize} = props
        props.getUsers(currentPage, pageSize)
    }, [])

    const onPageChanged = (pageNumber: number) => {
        const {pageSize} = props
        props.getUsers(pageNumber, pageSize)
    }
    return (
        <div>
            {props.isFetching? <Preloader/> : null}
            <Users totalItemsCount={props.totalItemsCount}
                   onPageChanged={onPageChanged}
                   users={props.users}
                   pageSize={props.pageSize}
                   currentPage={props.currentPage}
                   follow={props.follow}
                   unfollow={props.unfollow}
                   followingInProgress={props.followingInProgress}
                   unfollowUser={props.unfollowUser}
                   followUser={props.followUser}
                   portionSize={props.portionSize}
                   profile={props.profile}
            />
        </div>
    )
}

const mapStateToProps = (state: AppRootStateType): mapStateToPropsType => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalItemsCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
        portionSize: getPortionSize(state),
        profile: getProfile(state)
    }
}
// const mapDispatchToProps = (dispatch: (action: unfollowActionType | followActionType | setUsersActionType | setCurrentPageActionType | setTotalUsersCountActionType | toggleIsFetchingActionType) => void): mapDispatchToPropsType => {
//     return {
//         follow: (userId: number) => {
//             dispatch(followAC(userId))
//         },
//         unfollow: (userId: number) => {
//             dispatch(unfollowAC(userId))
//         },
//         setUsers: (users: UserType[]) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (currentPage: number) => {
//             dispatch(setCurrentPageAC(currentPage))
//         },
//         setTotalUsersCount: (totalCount: number) => {
//             dispatch(setTotalUsersCountAC(totalCount))
//         },
//         toggleIsFetching: (isFetching: boolean) => {
//             dispatch(toggleIsFetchingAC(isFetching))
//         }
//     }
// }

const MapObj = {
    follow: followAC,
    unfollow: unfollowAC,
    setUsers: setUsersAC,
    setCurrentPage: setCurrentPageAC,
    toggleFollowingInProgress: toggleFollowingInProgressAC,
    getUsers: getUsersTC,
    unfollowUser: unfollowTC,
    followUser: followTC
}
// export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
// export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersClass);
const UsersContainer = connect(mapStateToProps, MapObj)(UsersComponent);
export default UsersContainer