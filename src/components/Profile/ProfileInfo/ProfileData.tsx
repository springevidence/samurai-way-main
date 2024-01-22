import React from 'react';
import {ContactsType, UserProfileType} from "../../../redux/profile-reducer";
import {Contacts} from "./ProfileInfo";

type ProfileDataPropsType = {
    profile: UserProfileType
    isOwner: boolean
    goToEditMode: () => void
}
const ProfileData = (props: ProfileDataPropsType) => {
    return (
        <div>
            <button onClick={props.goToEditMode}>Edit</button>
            <div>
                <b>Full name</b>: {props.profile.fullName}
            </div>
            <div>
                <b>About me</b>: {props.profile.aboutMe}
            </div>
            <div>
                {/*<input type={'checkbox'}/>*/}
                <b>Looking for a job</b>: {props.profile.lookingForAJob ? 'Yes' : 'No'}
            </div>
            <div>
                <b>Description</b>: {props.profile.lookingForAJobDescription}
            </div>
            <div>
                <b>Contacts</b>:
                {Object.keys(props.profile.contacts).map(elem => {
                    return <Contacts key={elem} contactTitle={elem} contactValue={props.profile.contacts[elem as keyof ContactsType]}/>
                })}
            </div>
        </div>
    );
};

export default ProfileData;