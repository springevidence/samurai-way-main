import React, {ChangeEvent} from 'react';
import s from './ProfileInfo.module.css';
import {UserProfileType} from "../../../redux/profile-reducer";
import Preloader from "../../common/preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from '../../../assets/image/user_img.png'
import {UserType} from "../../../redux/store";

type ProfileInfoPropsType = {
    profile: UserProfileType        //!!!!!!!!!!!
    status: string
    updateStatus: (status: string) => void
    users: UserType[]
    isOwner: boolean
    savePhoto: (file: File) => void
}
const ProfileInfo = (props: ProfileInfoPropsType) => {
    if (!props.profile) {
        return <Preloader/>
    }
    const onPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
       if (e.target.files) {
           props.savePhoto(e.target.files[0])
       }
    }
    return (
        <div>
            <div>
                <img src={props.profile.photos.large || userPhoto} alt="user photo" className={s.userPhoto}/>
                <div>{props.isOwner && <input type='file' onChange={onPhotoSelected}/>}</div>
            </div>
            <div>Name: {props.users.map(u=>u.id === props.profile.userId ? u.name : '')}</div>
            {/*<ProfileStatus status={props.status} updateStatus={props.updateStatus}/>*/}
                Status: <ProfileStatusWithHooks isOwner={props.isOwner} status={props.status} updateStatus={props.updateStatus}/>
        </div>
    );

};

export default ProfileInfo;