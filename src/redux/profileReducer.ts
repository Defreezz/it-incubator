import {ThunkType} from "./reduxStore";
import {Dispatch} from "redux";
import {profileApi} from "../api/api";


type SetUserProfileType = ReturnType<typeof setUserProfile>
type setUserStatusType = ReturnType<typeof setUserStatus>
type setMyStatusType = ReturnType<typeof setMyStatus>

export type ProfileReducerAction =
    | SetUserProfileType
    | setUserStatusType
    | setMyStatusType

export type Photos = {
    large: string
    small: string
}
export type ProfileAPIType = {
    fullName: string
    aboutMe: string
    userId: string
    photos: Photos
    status: string
}
export type InitialStateType = {
    profile: ProfileAPIType
    myStatus: string
}
const initialState: InitialStateType = {
    profile: {
        fullName: "",
        aboutMe: "",
        photos: {
            large: "",
            small: "",
        },
        status: "",
        userId: "",
    },
    myStatus: ""
}


export const profileReducer = (state: InitialStateType = initialState, action: ProfileReducerAction): InitialStateType => {
    switch (action.type) {
        case "SET-USER-PROFILE":
            return {
                ...state,
                profile: {...state.profile, ...action.profile}
            }
        case "SET-USER-STATUS":
            return {
                ...state,
                profile: {...state.profile, status: action.status}
            }
        case "SET-MY-STATUS":
            return {
                ...state,
                myStatus: action.status
            }
        default:
            return state
    }
}

//AC
export const setUserProfile = (profile: ProfileAPIType) => {
    return {type: "SET-USER-PROFILE", profile} as const
}
export const setUserStatus = (status: string) => {

    return {type: "SET-USER-STATUS", status} as const
}

export const setMyStatus = (status: string) => {
    return {type: "SET-MY-STATUS", status} as const
}

//thunksC
export const getProfile = (userID: string): ThunkType => (dispatch: Dispatch) => {
    profileApi.getProfile(userID)
        .then(response =>
            dispatch(setUserProfile(response))
        )
}

export const getStatus = (userID: string): ThunkType => (dispatch: Dispatch) => {
    profileApi.getStatus(userID)
        .then(response =>
            dispatch(setUserStatus(response.data))
        )
}
export const getMyStatus = (userID: string): ThunkType => (dispatch: Dispatch) => {
    profileApi.getStatus(userID)
        .then(response =>
            dispatch(setMyStatus(response.data))
        )
}
export const updateStatus = (status: string): ThunkType => (dispatch: Dispatch) => {
    profileApi.updateStatus(status)
        .then(response => {
                if (response.data.resultCode === 0)
                    dispatch(setMyStatus(response.data))
            }
        )
}

