import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {UserProfileType} from "../../redux/profile-reducer";

type ProfilePropsType = {
    profile: UserProfileType         //!!!!!!!!!!!!!!!!!
    status: string
    updateStatus: (status: string) => void
}

const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <MyPostsContainer/>
        </div>
    );
};

export default Profile;