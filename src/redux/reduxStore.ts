import {applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer, ProfileReducerAction} from "./profileReducer";
import {dialogsReducer, DialogsReducerAction} from "./dialogsReducer";
import {usersReducer, UsersReducerAction} from "./usersReducer";
import {authReducer, AuthReducerAction} from "./authReducer";
import thunkMiddleware from "redux-thunk"
import {ThunkAction} from "redux-thunk"


export type ThunkType = ThunkAction<void, AppStateType, unknown, AllActionsType>
//экшены всего апп
type AllActionsType =
    | UsersReducerAction
    | AuthReducerAction
    | DialogsReducerAction
    | ProfileReducerAction


export type AppStateType = ReturnType<typeof rootReducer> //возвращает тип стейта всего приложения

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    userAuth: authReducer,
})
export let store: any = createStore(rootReducer, applyMiddleware(thunkMiddleware))

// @ts-ignore
window.store = store
