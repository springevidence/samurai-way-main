import React from 'react';
import {connect} from "react-redux";
import {UserType} from "../../redux/store";
import {
    followAC,
    InitStateType,
    setCurrentPageAC,
    setUsersAC, toggleFollowingInProgressAC, toggleIsFetchingAC,
    unfollowAC, getUsersTC, unfollowTC, followTC
} from "../../redux/users-reducer";
import {AppRootStateType} from "../../redux/redux-store";
import UsersComponent from "./UsersComponent";
import Preloader from "../common/preloader/Preloader";
import {usersApi} from "../../api/api";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../redux/users-selectors";


type mapStateToPropsType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
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

class UsersClass extends React.Component<UsersMapPropsType> {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
        // this.props.toggleIsFetching(true)
        // usersApi.getUsers(this.props.currentPage, this.props.pageSize)
        //     .then(data => {
        //         this.props.toggleIsFetching(false)
        //         this.props.setUsers(data.items)
        //         this.props.setTotalUsersCount(data.totalCount)
        //     })
    }

    onPageChanged = (pageNumber: number)=> {
        this.props.getUsers(pageNumber, this.props.pageSize)

        // this.props.setCurrentPage(pageNumber)
        // this.props.toggleIsFetching(true)
        //
        // usersApi.getUsers(pageNumber, this.props.pageSize)
        //     .then(data => {
        //         this.props.toggleIsFetching(false)
        //         this.props.setUsers(data.items)
        //     })
    }

    render() {
        return <>
            {this.props.isFetching
                ? <Preloader/>
                : null
            }
            <UsersComponent totalUsersCount={this.props.totalUsersCount}
                            onPageChanged={this.onPageChanged}
                            users={this.props.users}
                            pageSize={this.props.pageSize}
                            currentPage={this.props.currentPage}
                            follow={this.props.follow}
                            unfollow={this.props.unfollow}
                            followingInProgress={this.props.followingInProgress}
                            unfollowUser={this.props.unfollowUser}
                            followUser={this.props.followUser}
            />
        </>
    }
}

const mapStateToProps = (state: AppRootStateType): mapStateToPropsType => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
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
export const UsersContainer = connect(mapStateToProps, MapObj)(UsersClass);