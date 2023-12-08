import React from 'react';
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import Header from "./Header";
import {
    getAuthUserDataTC, logoutTC,
    setAuthUserDataAC,
} from "../../redux/auth-reducer";



class HeaderContainer extends React.Component<UsersMapPropsType> {
    // componentDidMount() {
    //     this.props.getAuthUserData()
    // }

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

const MapObj = {
    setAuthUserData: setAuthUserDataAC,
    // getAuthUserData: getAuthUserDataTC,
    logout: logoutTC
}
export type BaseResponseType<D = {}> = {
    resultCode: number
    messages: string[]
    data: D
}
type mapStateToPropsType = {
    isAuth: boolean
    login: string | null
}
type mapDispatchToPropsType = {
    setAuthUserData: (id: null | number, email: null | string, login: null | string, isAuth: boolean) => void
    // getAuthUserData: () => void
    logout: () => void
}
export type UsersMapPropsType = mapStateToPropsType & mapDispatchToPropsType

export default connect(mapStateToProps, MapObj)(HeaderContainer);


// const mapDispatchToProps = (dispatch: (action: setUserDataActionType) => void): mapDispatchToPropsType => {
//     return {
//         setAuthUserData: (data: InitAuthStateTypeProps) => {
//             dispatch(setAuthUserDataAC(data))
//         }
//
//     }
// }