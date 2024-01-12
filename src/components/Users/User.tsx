import React from 'react';
import style from "./Users.module.css";
import {UserType} from "../../redux/store";
import {NavLink} from "react-router-dom";
import {UserProfileType} from "../../redux/profile-reducer";
import userPhoto from '../../assets/image/user_img.png'


type UsersComponentPropsType = {
    user: UserType
    followingInProgress: number[]
    unfollowUser: (userId: number) => void
    followUser: (userId: number) => void
    profile: UserProfileType
}
const User = (props: UsersComponentPropsType) => {
    return (
        <div>
            <span>
                <div>
                    <NavLink to={'/profile/' + props.user.id}>
                         <img className={style.photo} src={props.profile.photos.large || userPhoto} alt={'users photo'}/>
                    </NavLink>

                </div>
                <div>
                    {props.user.followed
                        ? <button disabled={props.followingInProgress.some(id => id === props.user.id)}
                                  onClick={() => {
                                      props.unfollowUser(props.user.id)
                                  }
                                  }>Unfollow</button>
                        : <button disabled={props.followingInProgress.some(id => id === props.user.id)} onClick={() => {
                            props.followUser(props.user.id)
                        }}>Follow</button>}
                </div>
            </span>
            <span>
                    <div>{props.user.name}</div>
                    <div>{props.user.status}</div>
                    <div>{props.user.id}</div>
            </span>
        </div>
    );
};

export default User;