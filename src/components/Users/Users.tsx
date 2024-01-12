import React from 'react';
import style from "./Users.module.css";
import {UserType} from "../../redux/store";
import {NavLink} from "react-router-dom";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";
import {UserProfileType} from "../../redux/profile-reducer";

type UsersComponentPropsType = {
    onPageChanged: (page: number) => void
    totalItemsCount: number
    portionSize: number
    users: UserType[]
    pageSize: number
    currentPage: number
    follow: (id: number) => void
    unfollow: (id: number) => void
    followingInProgress: number[]
    unfollowUser: (userId: number) => void
    followUser: (userId: number) => void
    profile: UserProfileType
}
const Users = (props: UsersComponentPropsType) => {

    return (
        <div>
            <Paginator onPageChanged={props.onPageChanged}
                       totalItemsCount={props.totalItemsCount}
                       pageSize={props.pageSize}
                       currentPage={props.currentPage}
                       portionSize={props.portionSize}/>

            {props.users.map(u => <User key={u.id}
                                        user={u}
                                        unfollowUser={props.unfollowUser}
                                        followUser={props.followUser}
                                        followingInProgress={props.followingInProgress}
                                        profile={props.profile}/>)}

        </div>
    );
}

export default Users;