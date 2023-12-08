import {AppThunk} from "./redux-store";
import {getAuthUserDataTC} from "./auth-reducer";

const initState: InitAuthStateTypeProps = {
    isInitialized: false
}

export const appReducer = (state: InitAuthStateTypeProps = initState, action: ActionType) => {
    switch (action.type) {

        case 'INITIALIZED-SUCCESS':
            return {...state, isInitialized: true}
        default:
            return state;
    }
}

// action creators
export const initializedSuccessAC = (): initializedSuccessActionType => ({
    type: "INITIALIZED-SUCCESS" as const
})

// thunk creators
export const initializeAppTC= (): AppThunk => {
    return (dispatch) => {
        dispatch(getAuthUserDataTC()).then(()=>{
            dispatch(initializedSuccessAC())
        })
    }
}




export type InitAuthStateTypeProps = { //
    isInitialized: boolean
}
export type initializedSuccessActionType = {
    type: 'INITIALIZED-SUCCESS'
}
type ActionType = initializedSuccessActionType
