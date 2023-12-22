import React from 'react';
import style from "./Users.module.css";
import {UserType} from "../../redux/store";
import {NavLink} from "react-router-dom";

type UsersComponentPropsType = {
    user: UserType
    followingInProgress: number[]
    unfollowUser: (userId: number) => void
    followUser: (userId: number) => void
}
const User = (props: UsersComponentPropsType) => {
    return (
        <div>
            <span>
                <div>
                    <NavLink to={'/profile/' + props.user.id}>
                         <img className={style.photo} src={''} alt={'users photo'}/>
                    </NavLink>

                </div>
                <div>
                    {props.user.followed
                        ? <button disabled={props.followingInProgress.some(id => id ===props.user.id)}
                                  onClick={() => {
                                      props.unfollowUser(props.user.id)
                        }
                        }>Unfollow</button>
                        : <button disabled={props.followingInProgress.some(id => id ===props.user.id)} onClick={() => {
                            props.followUser(props.user.id)
                        }}>Follow</button>}
                </div>
            </span>
                <span>
                <span>
                    <div>{props.user.name}</div>
                    <div>{props.user.status}</div>
                </span>
                <span>
                    <div>{'u.location.country'}</div>
                    <div>{'u.location.city'}</div>
                </span>
            </span>
            </div>
    );
};

export default User;