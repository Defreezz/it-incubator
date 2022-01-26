import {Dispatch} from "redux";
import {authAPI} from "../api/api";

type setUserData = ReturnType<typeof setUserData>
type setAuthFetching = ReturnType<typeof setAuthFetching>
type setAuthStatus = ReturnType<typeof setAuthStatus>

type AuthReducerAction =
    setUserData |
    setAuthFetching |
    setAuthStatus


export type InitialStateType = {
    id: string | null
    email: string | null
    login: string | null
    isFetching: boolean
    isAuth:boolean
}

const initialState: InitialStateType = {
    id: null,
    email: null,
    login: null,
    isFetching: true,
    isAuth:false,

}
export const authReducer = (state: InitialStateType = initialState, action: AuthReducerAction): InitialStateType => {


    switch (action.type) {
        case "SET-USER-DATA":
            return {
                ...state,
                ...action.userData,
            }
        case "SET-AUTH-FETCHING":
            return {
                ...state,
                isFetching:action.isFetching
            }
        case "SET-AUTH-STATUS":
            return {
                ...state,
                isAuth:action.isAuthStatus
            }
        default:
            return state
    }
}


export const setUserData = (userData: InitialStateType) => ({type: "SET-USER-DATA", userData} as const)
export const setAuthFetching = (isFetching: boolean) => ({type: "SET-AUTH-FETCHING", isFetching} as const)
export const setAuthStatus = (isAuthStatus: boolean) => ({type: "SET-AUTH-STATUS", isAuthStatus} as const)

export const auth = ()=>(dispatch:Dispatch)=>{
    authAPI.auth()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setUserData(response.data.data))
                dispatch(setAuthStatus(true))
            }
        })
}