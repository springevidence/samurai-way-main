import React from 'react';
import s from './ProfileInfo.module.css';
import {UserProfileType} from "../../../redux/profile-reducer";
import Preloader from "../../common/preloader/Preloader";

type ProfileInfoPropstype = {
    profile: UserProfileType        //!!!!!!!!!!!
}
const ProfileInfo = (props: ProfileInfoPropstype) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <img
                    src="https://images.all-free-download.com/images/graphiclarge/beach_cloud_dawn_horizon_horizontal_landscape_ocean_601821.jpg"
                    alt="sky"/>
            </div>
            <div>
                <img src={props.profile.photos.large} alt="user photo"/>
            </div>

        </div>
    );

};

export default ProfileInfo;