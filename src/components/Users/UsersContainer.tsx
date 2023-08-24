import React from 'react';
import {connect} from "react-redux";
import {UserType} from "../../redux/store";
import {
    followAC,
    followActionType,
    InitStateType,
    setCurrentPageAC,
    setCurrentPageActionType,
    setTotalUsersCountAC,
    setTotalUsersCountActionType,
    setUsersAC,
    setUsersActionType, toggleIsFetchingAC, toggleIsFetchingActionType,
    unfollowAC,
} from "../../redux/users-reducer";
import {AppRootStateType} from "../../redux/redux-store";
import UsersComponent from "./UsersComponent";
import axios from "axios";
import Preloader from "../common/preloader/Preloader";
import {usersApi} from "../../api/api";


type mapStateToPropsType = {
    usersPage: InitStateType
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}
type mapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: UserType[]) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
}

export type UsersMapPropsType = mapStateToPropsType & mapDispatchToPropsType

class UsersClass extends React.Component<UsersMapPropsType> {
    componentDidMount() {
        this.props.toggleIsFetching(true)
        usersApi.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
                this.props.setTotalUsersCount(data.totalCount)
            })
    }

    onPageChanged = (pageNumber: number)=> {
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching(true)

        usersApi.getUsers(pageNumber, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
            })
    }

    render() {
        return <>
            {this.props.isFetching
                ? <Preloader/>
                : null
            }
            <UsersComponent totalUsersCount={this.props.totalUsersCount}
                            onPageChanged={this.onPageChanged}
                            users={this.props.usersPage.users}
                            pageSize={this.props.pageSize}
                            currentPage={this.props.currentPage}
                            follow={this.props.follow}
                            unfollow={this.props.unfollow}
            />
        </>
    }
}

const mapStateToProps = (state: AppRootStateType): mapStateToPropsType => {
    return {
        usersPage: state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
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
    setTotalUsersCount: setTotalUsersCountAC,
    toggleIsFetching: toggleIsFetchingAC
}
// export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
// export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersClass);
export const UsersContainer = connect(mapStateToProps, MapObj)(UsersClass);