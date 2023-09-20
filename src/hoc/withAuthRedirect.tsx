import React, {ComponentType} from 'react';
import {Navigate} from "react-router-dom";
import {AppRootStateType} from "../redux/redux-store";
import {connect} from "react-redux";
import {UsersMapPropsType} from "../components/Profile/ProfileContainer";
import {DialogsMapPropsType} from "../components/Dialogs/DialogsContainer";

type mapStateToPropsType = {
    isAuth: boolean
}
const mapStateToPropsForRedirect = (state: AppRootStateType): mapStateToPropsType => ({
    isAuth: state.auth.isAuth
})
export function WithAuthRedirect<T>(Component: ComponentType<T> ) {
    let RedirectComponent = (props: mapStateToPropsType) => {
        let {isAuth, ...restProps} = props
        if (!isAuth) return <Navigate to={'/login'} />

        return <Component {...restProps as T}/>;
    }

    return connect(mapStateToPropsForRedirect)(RedirectComponent);
};