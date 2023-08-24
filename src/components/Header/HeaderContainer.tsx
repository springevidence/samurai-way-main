import React from 'react';
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import axios from "axios";
import Header from "./Header";
import {
    InitAuthStateTypeProps,
    setAuthUserDataAC,
    setUserDataActionType
} from "../../redux/auth-reducer";


class HeaderContainer extends React.Component<UsersMapPropsType> {
    componentDidMount() {
        axios.get<ResponseType<InitAuthStateTypeProps>>('https://social-network.samuraijs.com/api/1.0/auth/me', {withCredentials: true})
            .then(res => {
                if (res.data.resultCode === 0)
                this.props.setAuthUserData(res.data.data)
            })
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
const mapDispatchToProps = (dispatch: (action: setUserDataActionType) => void): mapDispatchToPropsType => {
    return {
        setAuthUserData: (data: InitAuthStateTypeProps) => {
            dispatch(setAuthUserDataAC(data))
        }
    }
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
}
export type UsersMapPropsType = mapStateToPropsType & mapDispatchToPropsType

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer );
