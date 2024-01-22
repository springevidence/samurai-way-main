import React, {ComponentType, FC, useEffect} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {
    getUserProfileTC, getUserStatusTC, savePhotoTC, saveProfileTC,
    setUserProfileAC, updateUserStatusTC,
    UserProfileType
} from "../../redux/profile-reducer";
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {UserType} from "../../redux/store";
import {useParams} from "react-router-dom";

// export function withRouter(Children: UsersMapPropsType){
//     return(props: {userId: number})=>{
//         const match  = {params: useParams()};
//         return <Children {...props}  match = {match}/>
//     }
// }

const ProfileContainer: FC<UsersMapPropsType> = (props) => {
        // let userId = this.props.match.params.userId
        // let userId = this.props.profile.userId
        // let userId = Number(window.location.href.split('/')[5])
    let params  = useParams()
    let userId: number | null = Number(params.userId)

    useEffect(() => {
        if (!userId) {
            userId = props.authorizedId
        }
        if (userId) {
            props.getUserProfile(userId)
            props.getUserStatus(userId)
        }
    }, [userId])


    return (
        <div>
            <Profile isOwner={!userId}
                     users={props.users}
                     profile={props.profile}
                     status={props.status}
                     updateStatus={props.updateUserStatus}
                     savePhoto={props.savePhoto}
                     saveProfile={props.saveProfile}
            />
        </div>
    );

}

const AuthRedirectComponent = WithAuthRedirect(ProfileContainer)
const mapStateToProps = (state: AppRootStateType): mapStateToPropsType => ({
    // profile: state.profilePage.profile,
    profile: state.profilePage['profile'],
    // status: state.profilePage.status,
    status: state.profilePage['status'],
    users: state.usersPage.users,
    authorizedId: state.auth.id
})

const MapObj = {
    setUserProfile: setUserProfileAC,
    getUserProfile: getUserProfileTC,
    getUserStatus: getUserStatusTC,
    updateUserStatus: updateUserStatusTC,
    savePhoto: savePhotoTC,
    saveProfile: saveProfileTC
}

// types
type mapStateToPropsType = {
    profile: UserProfileType
    status: string
    users: UserType[]
    authorizedId: number | null
}
type mapDispatchToPropsType = {
    setUserProfile: (profile: UserProfileType) => void
    getUserProfile: (userId: number) => void
    getUserStatus: (userId: number) => void
    updateUserStatus: (status: string) => void
    savePhoto: (file: File) => void
    saveProfile: (profile: UserProfileType) => void
}
export type UsersMapPropsType = mapStateToPropsType & mapDispatchToPropsType

// const WithUrlDataContainerComponent = withRouter(ProfileContainer)
export default compose<ComponentType>(
    connect(mapStateToProps, MapObj),
    WithAuthRedirect)
(ProfileContainer)


