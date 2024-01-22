import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {UserProfileType} from "../../redux/profile-reducer";
import {UserType} from "../../redux/store";

type ProfilePropsType = {
    profile: UserProfileType         //!!!!!!!!!!!!!!!!!
    status: string
    updateStatus: (status: string) => void
    users: UserType[]
    isOwner: boolean
    savePhoto: (file: File) => void
    saveProfile: (profile: UserProfileType) => void
}

const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo isOwner={props.isOwner}
                         profile={props.profile}
                         status={props.status}
                         updateStatus={props.updateStatus}
                         users={props.users}
                         savePhoto={props.savePhoto}
                         saveProfile={props.saveProfile}
            />
            <MyPostsContainer/>
        </div>
    );
};

export default Profile;