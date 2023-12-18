import {AppRootStateType, AppThunk} from "./redux-store";
import {authApi, LoginParamsType} from "../api/api";
import {handleServerAppError} from "../common/utills/handle-server-app-error";
import {ThunkAction} from "redux-thunk";
import {AnyAction} from "redux";

const initState: InitAuthStateTypeProps = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    error: null
}

export const authReducer = (state: InitAuthStateTypeProps = initState, action: ActionType) => {
    switch (action.type) {
        case 'SET-USER-DATA':
            return {...state, ...action.payload}
        case "SET-APP-ERROR":
            return {...state, error: action.error}
        default:
            return state;
    }
}

// action creators
export const setAppErrorAC = (error: null | string): setAppErrorActionType => ({
    type: "SET-APP-ERROR" as const,
    error
})
export const setAuthUserDataAC = (id: null | number, email: null | string, login: null | string, isAuth: boolean): setUserDataActionType => ({
    type: 'SET-USER-DATA',
    payload: {id, email, login, isAuth}
})

export type ThunkType<ReturnType = Promise<any>> = ThunkAction<ReturnType, AppRootStateType, unknown, AnyAction>

// thunk creators
export const getAuthUserDataTC = (): ThunkType =>
    async (dispatch) => {
        const res = await authApi.authMe()
        if (res.data.resultCode === 0) {
            const {id, email, login, isAuth} = res.data.data
            dispatch(setAuthUserDataAC(id, email, login, true))
        }

    }

export const loginTC = (data: LoginParamsType): AppThunk =>
    async (dispatch) => {
        const res = await authApi.login(data)
        if (res.data.resultCode === 0) {
            dispatch(getAuthUserDataTC())
        } else {
            handleServerAppError(res.data, dispatch)
        }
    }

export const logoutTC = (): AppThunk =>
    async (dispatch) => {
        const res = await authApi.logout()
        if (res.data.resultCode === 0) {
            dispatch(setAuthUserDataAC(null, null, null, false))
        }
    }

export type InitAuthStateTypeProps = { //
    id: null | number
    email: null | string
    login: null | string
    isAuth: boolean
    error?: null | string
}
export type setUserDataActionType = {
    type: 'SET-USER-DATA'
    payload: InitAuthStateTypeProps
}
export type setAppErrorActionType = {
    type: 'SET-APP-ERROR'
    error: null | string
}
type ActionType = setUserDataActionType | setAppErrorActionType
