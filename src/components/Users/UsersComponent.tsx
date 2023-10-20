import React from 'react';
import style from "./Users.module.css";
import {UserType} from "../../redux/store";
import {v1} from "uuid";
import {NavLink} from "react-router-dom";

type UsersComponentPropsType = {
    onPageChanged: (page: number) => void
    totalUsersCount: number
    users: UserType[]
    pageSize: number
    currentPage: number
    follow: (id: number) => void
    unfollow: (id: number) => void
    followingInProgress: number[]
    unfollowUser: (userId: number) => void
    followUser: (userId: number) => void
}
const UsersComponent = (props: UsersComponentPropsType) => {
    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div>
            <div>
                {pages.map(page => {
                    return <span key={v1()} onClick={() => {
                        props.onPageChanged(page)
                    }} className={props.currentPage === page ? style.selectedPage : style.page}>{page} </span>
                })}
            </div>
            {props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <NavLink to={'/profile/' + u.id}>
                         <img className={style.photo} src={''} alt={'users photo'}/>
                    </NavLink>

                </div>
                <div>
                    {u.followed
                        ? <button disabled={props.followingInProgress.some(id => id ===u.id)}
                                  onClick={() => {
                                      props.unfollowUser(u.id)
                        }
                        }>Unfollow</button>
                        : <button disabled={props.followingInProgress.some(id => id ===u.id)} onClick={() => {
                            props.followUser(u.id)
                        }}>Follow</button>}
                </div>
            </span>
                <span>
                <span>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{'u.location.country'}</div>
                    <div>{'u.location.city'}</div>
                </span>
            </span>
            </div>)
            }
        </div>
    );
};

export default UsersComponent;