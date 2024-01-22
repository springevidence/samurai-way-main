import React, {ChangeEvent, useState} from 'react';
import s from './ProfileInfo.module.css';
import {UserProfileType} from "../../../redux/profile-reducer";
import Preloader from "../../common/preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from '../../../assets/image/user_img.png'
import {UserType} from "../../../redux/store";
import ProfileData from "./ProfileData";
import ProfileDataForm from "./ProfileDataForm";

type ProfileInfoPropsType = {
    profile: UserProfileType        //!!!!!!!!!!!
    status: string
    updateStatus: (status: string) => void
    users: UserType[]
    isOwner: boolean
    savePhoto: (file: File) => void
    saveProfile: (profile: UserProfileType) => void
}
const ProfileInfo = (props: ProfileInfoPropsType) => {
    const [editMode, setEditMode] = useState(false)

    if (!props.profile) {
        return <Preloader/>
    }
    const onPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            props.savePhoto(e.target.files[0])
        }
    }

    const onSubmit = (profile: UserProfileType) => {
        props.saveProfile(profile)
        // setEditMode(false)
    }

    return (
        <div>
            <div>
                <img src={props.profile.photos.large || userPhoto} alt="user photo" className={s.userPhoto}/>
                <div>{props.isOwner && <input type='file' onChange={onPhotoSelected}/>}</div>
            </div>

            {editMode
                ? <ProfileDataForm profile={props.profile}
                                   onSubmit={onSubmit}/>
                : <ProfileData profile={props.profile}
                               isOwner={props.isOwner}
                               goToEditMode={() => setEditMode(true)}
                />}

            <div><b>Status</b>: <ProfileStatusWithHooks isOwner={props.isOwner} status={props.status}
                                                        updateStatus={props.updateStatus}/>
            </div>
        </div>
    );

};

type ContactsPropsType = {
    contactTitle: string
    contactValue: string | null
}
export const Contacts = (props: ContactsPropsType) => {
    return (
        <div className={s.contactItems}>
            {props.contactTitle}: {props.contactValue}
        </div>
    )
}


export default ProfileInfo;