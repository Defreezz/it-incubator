import {ThunkType} from "./reduxStore";
import {Dispatch} from "redux";
import {profileApi} from "../api/api";


type SetUserProfileType = ReturnType<typeof setUserProfile>
type setUserStatusType = ReturnType<typeof setUserStatus>

export type ProfileReducerAction =
    | SetUserProfileType
    | setUserStatusType

export type Photos = {
    large: string
    small: string
}
export type ProfileAPIType = {
    fullName: string
    aboutMe: string
    userId: string
    photos: Photos
    status:string
}
export type InitialStateType = {
    profile: ProfileAPIType
}
const initialState: InitialStateType = {
    profile: {
        fullName: "",
        aboutMe: "",
        photos: {
            large: "",
            small: "",
        },
        status:"",
        userId: "",
    },
}


export const profileReducer = (state: InitialStateType = initialState, action: ProfileReducerAction): InitialStateType => {
    switch (action.type) {
        case "SET-USER-PROFILE":
            return {
                profile: {...state.profile,...action.profile}
            }
        case "SET-USER-STATUS":
            return {
                ...state,
                profile: {...state.profile,status:action.status}
            }
        default:
            return state
    }
}

//AC
export const setUserProfile = (profile: ProfileAPIType) => {
    return {type: "SET-USER-PROFILE", profile} as const
}
export const setUserStatus = (status: any) => {

    return {type: "SET-USER-STATUS", status} as const
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
export const updateStatus = (status: string): ThunkType => (dispatch: Dispatch) => {
    profileApi.updateStatus(status)
        .then(response =>
            dispatch(setUserStatus(response.data))
        )
}

