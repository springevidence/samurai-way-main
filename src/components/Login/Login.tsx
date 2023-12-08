import React from 'react';
import LoginForm from "./LoginForm";
import {connect} from "react-redux";
import {loginTC} from "../../redux/auth-reducer";
import {StatesType} from "../../redux/store";
import {Navigate} from "react-router-dom";

export type FormValues = {
    email: string
    password: string
    rememberMe: boolean
}
type mapDispatchToPropsType = {
    login: (data: FormValues) => void
}
type mapStateToPropsType = {
    isAuth: boolean
    loginError: null | string | undefined
}
type LoginMapPropsType =  mapDispatchToPropsType & mapStateToPropsType
const Login = (props: LoginMapPropsType) => {
    const onSubmit = (formData: FormValues) => {
      props.login(formData)
    }

    if (props.isAuth) {
       return <Navigate to={'/profile'}/>
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginForm onSubmit={onSubmit} loginError={props.loginError}/>
        </div>

    );
};
const mapStateToProps = (state: StatesType): mapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        loginError: state.auth.error
    }
}

const MapObj = {
    login: loginTC
}
export default connect(mapStateToProps, MapObj)(Login);



//const mapDispatchToProps = (dispatch: (action: any)=> void): mapDispatchToPropsType => {
//     return {
//         login: (data: FormValues) => {
//             dispatch(loginTC(data))
//         },
//     }
// }