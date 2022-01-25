import {applyMiddleware, combineReducers, createStore } from "redux";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";
import {usersReducer} from "./usersReducer";
import {authReducer} from "./authReducer";
import thunkMiddleware from "redux-thunk"

export type PostType = {
    id: string,
    message: string,
    likeCount: number
}
export type DialogType = {
    id: string,
    name: string
}
export type MessageType = {
    id: string,
    message: string
}
export type ProfilePageType = {
    posts: Array<PostType>
    newInputPostText:string
}
export type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newInputMessageText:string

}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: {}

}

// рут типизация стора
export type StoreType = {
    _state: RootStateType,
    _callSubscriber: () => void
    subscribe: (callback: () => void) => void
    getState: () => RootStateType
    dispatch: (action: ALLActionTypes) => void
}
export type ALLActionTypes =
    {
        type:any
        inputPostText?:string
        inputMessageText?:string
    }

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
