import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

type HeaderPropsType = {
    isAuth: boolean
    login: string | null
    logout: () => void
}
const Header = (props: HeaderPropsType) => {
    return (
        <header className={s.header}>
            <div className={s.imageBlock}>
                <img src="" alt="logo"/>
            </div>
            <div className={s.loginBlock}>
                {props.isAuth
                    ? <div className={s.loginNameBlock}>
                        <div className={s.loginName}>{props.login}</div>
                        <button onClick={props.logout}>Log out</button>
                    </div>
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    );
};

export default Header;