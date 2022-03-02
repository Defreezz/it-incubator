import {ThunkType} from "./reduxStore";
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
    contacts?: {
        "facebook": string,
        "website": string,
        "vk": string,
        "twitter": string,
        "instagram": string,
        "youtube": string,
        "github": string,
        "mainLink": string
    },
    lookingForAJob?: boolean,
    lookingForAJobDescription?: string,
    userId: string
    fullName: string
    aboutMe: string
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

//thunksC
export const getUserProfile = (userID: string): ThunkType => dispatch => {
    dispatch(setUserProfile(initialState.profile))
    dispatch(getUserStatus(userID))
    profileApi.getUserProfile(userID)
        .then(response =>
            dispatch(setUserProfile(response))
        )
}

const getUserStatus = (userID: string): ThunkType => dispatch => {
    profileApi.getStatus(userID)
        .then(response =>
            dispatch(setUserStatus(response.data))
        )
}


