import React from 'react';
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import axios from "axios";
import Header from "./Header";
import {
    getAuthUserDataTC,
    InitAuthStateTypeProps,
    setAuthUserDataAC,
    setUserDataActionType
} from "../../redux/auth-reducer";
import {authApi} from "../../api/api";
import {getUserProfileTC, setUserProfileAC} from "../../redux/profile-reducer";


class HeaderContainer extends React.Component<UsersMapPropsType> {
    componentDidMount() {
        this.props.getAuthUserData()
    }

    render() {
        return (
            <Header {...this.props}/>
        );
    }
}

const mapStateToProps = (state: AppRootStateType): mapStateToPropsType => ({
    // data: state.auth
    isAuth: state.auth.isAuth,
    login: state.auth.login
})
// const mapDispatchToProps = (dispatch: (action: setUserDataActionType) => void): mapDispatchToPropsType => {
//     return {
//         setAuthUserData: (data: InitAuthStateTypeProps) => {
//             dispatch(setAuthUserDataAC(data))
//         }
//
//     }
// }
const MapObj = {
    setAuthUserData: setAuthUserDataAC,
    getAuthUserData: getAuthUserDataTC
}
export type ResponseType<D = {}> = {
    resultCode: number
    messages: string[]
    data: D
}
type mapStateToPropsType = {
    // data: InitAuthStateTypeProps
    isAuth: boolean
    login: string | null
}
type mapDispatchToPropsType = {
    setAuthUserData: (data: InitAuthStateTypeProps) => void
    getAuthUserData: () => void
}
export type UsersMapPropsType = mapStateToPropsType & mapDispatchToPropsType

export default connect(mapStateToProps, MapObj)(HeaderContainer);
