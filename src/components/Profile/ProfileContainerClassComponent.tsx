import React, {ComponentType} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {
    getUserProfileTC, getUserStatusTC,
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

class ProfileContainer extends React.Component<UsersMapPropsType> {

    refreshProfile() {
        // let userId = this.props.match.params.userId
        // let userId = this.props.profile.userId

        let userId = Number(window.location.href.split('/')[5])
        if (!userId) {
            userId = 1
        }

        this.props.getUserProfile(userId)
        this.props.getUserStatus(userId)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: Readonly<UsersMapPropsType>, prevState: Readonly<{}>, snapshot?: any) {
        // debugger
        let userId = Number(window.location.href.split('/')[5])
        if (userId != prevProps.profile.userId) {
            this.refreshProfile()
        }
    }

    render() {
        return (
            <div>
                {/*<Profile users={this.props.users} profile={this.props.profile} status={this.props.status}*/}
                {/*         updateStatus={this.props.updateUserStatus}/>*/}
            </div>
        );
    }
}

const AuthRedirectComponent = WithAuthRedirect(ProfileContainer)
const mapStateToProps = (state: AppRootStateType): mapStateToPropsType => ({
    profile: state.profilePage['profile'],
    status: state.profilePage['status'],
    users: state.usersPage.users
})
// const mapDispatchToProps = (dispatch: (action: setUserProfileActionType) => void): mapDispatchToPropsType => {
//     return {
//         setUserProfile: (profile: UserProfileType) => {
//             dispatch(setUserProfileAC(profile))
//         }
//     }
// }
const MapObj = {
    setUserProfile: setUserProfileAC,
    getUserProfile: getUserProfileTC,
    getUserStatus: getUserStatusTC,
    updateUserStatus: updateUserStatusTC
}

// types
type mapStateToPropsType = {
    profile: UserProfileType
    status: string
    users: UserType[]
}
type mapDispatchToPropsType = {
    setUserProfile: (profile: UserProfileType) => void
    getUserProfile: (userId: number) => void
    getUserStatus: (userId: number) => void
    updateUserStatus: (status: string) => void
}
export type UsersMapPropsType = mapStateToPropsType & mapDispatchToPropsType

// const WithUrlDataContainerComponent = withRouter(ProfileContainer)
export default compose<ComponentType>(
    connect(mapStateToProps, MapObj),
    WithAuthRedirect)
(ProfileContainer)


