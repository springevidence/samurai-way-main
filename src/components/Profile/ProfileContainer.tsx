import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {
    setUserProfileAC,
    setUserProfileActionType,
    UserProfileType
} from "../../redux/profile-reducer";
import axios from "axios";
import {useParams} from 'react-router-dom'


// export function withRouter(Children: UsersMapPropsType){
//     return(props: {userId: number})=>{
//         const match  = {params: useParams()};
//         return <Children {...props}  match = {match}/>
//     }
// }

class ProfileContainer extends React.Component<UsersMapPropsType> {
    componentDidMount() {
        // debugger
        // let userId = this.props.match.params.userId
        // if (!userId) {
        //     userId = 1
        // }
        axios.get<UserProfileType>('https://social-network.samuraijs.com/api/1.0/profile/')
            .then(res => {
                this.props.setUserProfile(res.data)
            })
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        );
    }
}

const mapStateToProps = (state: AppRootStateType): mapStateToPropsType => ({
    profile: state.profilePage.profile
})
const mapDispatchToProps = (dispatch: (action: setUserProfileActionType) => void): mapDispatchToPropsType => {
    return {
        setUserProfile: (profile: UserProfileType) => {
            dispatch(setUserProfileAC(profile))
        }
    }
}
// const MapObj = {
//     setUserProfile: setUserProfileAC
// }
type mapStateToPropsType = {
    profile: UserProfileType
}
type mapDispatchToPropsType = {
    setUserProfile: (profile: UserProfileType) => void
}
export type UsersMapPropsType = mapStateToPropsType & mapDispatchToPropsType

// const WithUrlDataContainerComponent = withRouter(ProfileContainer)
export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);

