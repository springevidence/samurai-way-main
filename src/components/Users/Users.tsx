import React from 'react';
import axios from "axios";
import {UsersMapPropsType} from "./UsersContainer";
import style from "./Users.module.css";


export const Users = (props: UsersMapPropsType) => {
    if (props.usersPage.users.length === 0) {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${props.currentPage}&count=${props.pageSize}`)
            .then(res => {
                props.setUsers(res.data.items)
            })
    }
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return <div>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p ? style.selectedPage : ''}>{p}</span>
            })}
        </div>
        {props.usersPage.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <img src={u.photos}/>
                </div>
                <div>
                    {u.followed
                        ? <button onClick={() => { props.unfollow(u.id)}
                        }>Unfollow</button>
                        : <button onClick={() => { props.follow(u.id)}}>Follow</button>}
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
};
