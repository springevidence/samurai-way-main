import React from 'react';
import Profile from "./Profile";
import axios from "axios/index";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {setUserProfileAC} from "../../redux/profile-reducer";

class ProfileContainer extends React.Component {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/2')
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

const mapStateToProps = (state: AppRootStateType) => ({
    profile: state.profilePage.profile
})
export default connect(mapStateToProps, {setUserProfile: setUserProfileAC})(ProfileContainer);