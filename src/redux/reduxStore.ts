import {applyMiddleware, combineReducers, createStore} from "redux";
import {myProfileReducer, MyProfileReducerAction} from "./myProfileReducer";
import {dialogsReducer, DialogsReducerAction} from "./dialogsReducer";
import {usersReducer, UsersReducerAction} from "./usersReducer";
import {authReducer, AuthReducerAction} from "./authReducer";
import thunkMiddleware from "redux-thunk"
import {ThunkAction} from "redux-thunk"
import {profileReducer, ProfileReducerAction} from "./profileReducer";
import {reducer as formReducer} from "redux-form";


export type ThunkType = ThunkAction<void, AppStateType, unknown, AllActionsType>
//экшены всего апп
type AllActionsType =
    | UsersReducerAction
    | AuthReducerAction
    | DialogsReducerAction
    | MyProfileReducerAction
    | ProfileReducerAction


export type AppStateType = ReturnType<typeof rootReducer> //возвращает тип стейта всего приложения

let rootReducer = combineReducers({
    myProfilePage: myProfileReducer,
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    userAuth: authReducer,
    form:formReducer,
})
export let store: any = createStore(rootReducer, applyMiddleware(thunkMiddleware))

// @ts-ignore
window.store = store
