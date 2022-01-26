import {applyMiddleware, combineReducers, createStore } from "redux";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";
import {usersReducer} from "./usersReducer";
import {authReducer} from "./authReducer";
import thunkMiddleware from "redux-thunk"





export type AppStateType = ReturnType <typeof rootReducer> //возвращает тип стейта всего приложения

let rootReducer = combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer,
    usersPage:usersReducer,
    userAuth:authReducer,
})
export let store:any = createStore(rootReducer, applyMiddleware(thunkMiddleware) )

// @ts-ignore
window.store = store
