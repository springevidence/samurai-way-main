import {combineReducers, createStore, legacy_createStore} from "redux";
import {dialogsReducer} from "./dialogs-reducer";
import {profileReducer} from "./profile-reducer";


const reducers = combineReducers({
    dialogsReducer,
    profileReducer
})
const store = legacy_createStore(reducers)