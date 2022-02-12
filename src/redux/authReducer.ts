import {loginApi} from "../api/api";
import {ThunkType} from "./reduxStore";
import {reset, stopSubmit} from "redux-form";
import {Dispatch} from "redux";

type setUserDataType = ReturnType<typeof setMyProfileData>
//type setAuthFetchingType = ReturnType<typeof setAuthFetching>
type setAuthStatusType = ReturnType<typeof setAuthStatus>



export type AuthReducerAction =
    | setUserDataType
    | setAuthStatusType





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
    isAuth: false,

}
export const authReducer = (state: InitialStateType = initialState, action: AuthReducerAction ): InitialStateType => {


    switch (action.type) {
        case "SET-MY-PROFILE-DATA":
            return {
                ...state,
                ...action.userData,
            }
        // case "SET-AUTH-FETCHING":
        //     return {
        //         ...state,
        //         isFetching: action.isFetching
        //     }
        case "SET-AUTH-STATUS":
            return {
                ...state,
                isAuth: action.isAuthStatus
            }
        default:
            return state
    }
}


export const setMyProfileData = (userData: InitialStateType) => ({type: "SET-MY-PROFILE-DATA", userData} as const)
//export const setAuthFetching = (isFetching: boolean) => ({type: "SET-AUTH-FETCHING", isFetching} as const)
export const setAuthStatus = (isAuthStatus: boolean) => ({type: "SET-AUTH-STATUS", isAuthStatus} as const)
//thunks

//в хедере инициализирует нас
export const auth = (): ThunkType => (dispatch) => {
    loginApi.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setMyProfileData(response.data.data))
                dispatch(setAuthStatus(true))
            }
        })
        .catch(err => console.log(err))
}
export const login = (email: string, password: string, rememberMe: boolean): ThunkType => {
    return async (dispatch) => {
        let response = await loginApi.login(email, password, rememberMe)
        if (response.data.resultCode === 0) {
            dispatch(auth())
        } else {
            dispatch(stopSubmit("login",{_error:response.data.messages}))
        }
    }
}
export const logout = (): ThunkType => {
    return async (dispatch) => {
        let response = await loginApi.logout()
        if (response.data.resultCode === 0) {
            dispatch(setMyProfileData(initialState))
        }
    }
}
export const resetForm = (formName:string):ThunkType => (dispatch) => {
   return  dispatch(reset(formName))
}


