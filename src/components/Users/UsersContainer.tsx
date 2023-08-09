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
    setUsersActionType,
    unfollowAC,
    unfollowActionType
} from "../../redux/users-reducer";
import {AppRootStateType} from "../../redux/redux-store";
import UsersComponent from "./UsersComponent";
import axios from "axios";


type mapStateToPropsType = {
    usersPage: InitStateType
    pageSize: number
    totalUsersCount: number
    currentPage: number
}
type mapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: UserType[]) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
}

export type UsersMapPropsType = mapStateToPropsType & mapDispatchToPropsType

class UsersClass extends React.Component<UsersMapPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.setUsers(res.data.items)
                this.props.setTotalUsersCount(res.data.totalCount)
            })
    }
    onPageChanged(pageNumber: number) {
        this.props.setCurrentPage(pageNumber)

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.setUsers(res.data.items)
            })
    }
    render() {
        return <UsersComponent totalUsersCount={this.props.totalUsersCount}
                               onPageChanged={this.onPageChanged}
                               users={this.props.usersPage.users}
                               pageSize={this.props.pageSize}
                               currentPage={this.props.currentPage}
                               follow={this.props.follow}
                               unfollow={this.props.unfollow}

        />
    }
}

const mapStateToProps = (state: AppRootStateType): mapStateToPropsType => {
    return {
        usersPage: state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}
const mapDispatchToProps = (dispatch: (action: unfollowActionType | followActionType | setUsersActionType | setCurrentPageActionType | setTotalUsersCountActionType) => void): mapDispatchToPropsType => {

    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: UserType[]) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (currentPage: number) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUsersCount: (totalCount: number) => {
            dispatch(setTotalUsersCountAC(totalCount))
        }
    }

}
// export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersClass);