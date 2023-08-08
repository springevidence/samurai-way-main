import React from 'react';
import {connect} from "react-redux";
import {Users} from "./Users";
import {StatesType, UserType} from "../../redux/store";
import {
    followAC,
    followActionType, setUsersAC,
    setUsersActionType,
    unfollowAC,
    unfollowActionType
} from "../../redux/users-reducer";

const mapStateToProps = (state: StatesType) => {
    return {
        users: state.usersPage
    }
}
const mapDispatchToProps = (dispatch: (action:unfollowActionType | followActionType | setUsersActionType) => void) => {

    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: UserType[]) => {
            dispatch(setUsersAC(users))
        }
    }

}
export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);