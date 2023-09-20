import {AppThunk} from "./redux-store";
import {authApi} from "../api/api";

const initState: InitAuthStateTypeProps = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}
export const authReducer = (state: InitAuthStateTypeProps = initState, action: ActionType) => {
    switch (action.type) {
        case 'SET-USER-DATA':
            return {...state, ...action.data, isAuth: true}

        default:
            return state;
    }
}

export const setAuthUserDataAC = (data: InitAuthStateTypeProps): setUserDataActionType => ({
    type: 'SET-USER-DATA',
    data
})

export const getAuthUserDataTC = (): AppThunk => {
    return (dispatch) => {
        authApi.authMe()
            .then(res => {
                if (res.data.resultCode === 0)
                    dispatch(setAuthUserDataAC(res.data.data))
            })
    }
}

export type InitAuthStateTypeProps = { //
    id: null | number
    email: null | string
    login: null | string
    isAuth: boolean
}
export type setUserDataActionType = {
    type: 'SET-USER-DATA'
    data: InitAuthStateTypeProps
}
type ActionType = setUserDataActionType
