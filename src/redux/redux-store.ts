import {combineReducers, legacy_createStore} from "redux";
import {dialogsReducer} from "./dialogs-reducer";
import {profileReducer} from "./profile-reducer";


const reducers = combineReducers({
    dialogsReducer,
    profileReducer
})

export const store = legacy_createStore(reducers)

export type AppRootStateType = ReturnType<typeof reducers>
