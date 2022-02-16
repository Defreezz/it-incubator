import {loginApi} from "../api/api";
import {ThunkType} from "./reduxStore";
import {reset, stopSubmit} from "redux-form";

type SetUserDataType = ReturnType<typeof setMyProfileData>


export type AuthReducerAction =
    | SetUserDataType


export type InitialStateType = {
    id: string
    email: string | null
    login: string | null
    //isFetching: boolean
    isAuth: boolean
}

const initialState: InitialStateType | null = {
    id: "",
    email: null,
    login: null,
    //isFetching: true,
    isAuth: true,

}
export const authReducer = (state: InitialStateType = initialState, action: AuthReducerAction): InitialStateType => {

    switch (action.type) {
        case "SET-MY-PROFILE-DATA":
            let copy = {
                ...state,
                ...action.userData,
                isAuth: action.isAuth,
            }
            return copy
        // case "SET-AUTH-FETCHING":
        //     return {
        //         ...state,
        //         isFetching: action.isFetching
        //     }
        default:
            return state
    }
}


export const setMyProfileData = (userData: InitialStateType,isAuth:boolean) => (
    {type: "SET-MY-PROFILE-DATA", userData,isAuth} as const)


//thunks

export const auth = (): ThunkType => (dispatch) => {
    loginApi.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setMyProfileData(response.data.data,true))
            }
            else {
                dispatch(setMyProfileData(initialState,false))
            }
        })
}
export const login = (email: string, password: string, rememberMe: boolean): ThunkType => {
    return async (dispatch) => {
        let response = await loginApi.login(email, password, rememberMe)
        if (response.data.resultCode === 0) {
            dispatch(auth())
        } else {
            dispatch(stopSubmit("login", {_error: response.data.messages}))
        }
    }
}
export const logout = (): ThunkType => async (dispatch) => {
    let response = await loginApi.logout()
    if (response.data.resultCode === 0) {
        dispatch(setMyProfileData(initialState,false))
    }
}
export const resetForm = (formName: string): ThunkType => (dispatch) => {
    return dispatch(reset(formName))
}


