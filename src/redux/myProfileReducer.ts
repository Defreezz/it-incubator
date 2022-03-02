import {v1} from "uuid";
import {ThunkType} from "./reduxStore";
import {profileApi} from "../api/api";
import {Photos, ProfileAPIType} from "./profileReducer";

type SendPostType = ReturnType<typeof sendPost>
type setMyStatusType = ReturnType<typeof setMyStatus>
type saveMyPhotoType = ReturnType<typeof saveMyPhoto>
type setMyProfileType = ReturnType<typeof setMyProfile>

export type MyProfileReducerAction =
    | SendPostType
    | setMyStatusType
    | saveMyPhotoType
    | setMyProfileType

export type MyProfileType = {
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

export type PostType = {
    id: string,
    message: string,
    likeCount: number
}


export type InitialStateType = {
    myProfile:MyProfileType
    myStatus:string
    posts: PostType[]
}

let initialState: InitialStateType = {
    myProfile: {
        fullName: "",
        aboutMe: "",
        photos: {
            large: "",
            small: "",
        },
        lookingForAJobDescription: "asd",
        status: "",
        userId: "",
    },
    myStatus: "",
    posts: [
        {id: v1(), message: "jeeeeeeeeeronimo", likeCount: 12},
        {id: v1(), message: "Assssssssss", likeCount: 1},
        {id: v1(), message: "QWErty", likeCount: 22},
        {id: v1(), message: "asd", likeCount: 3},
    ],


}

export const myProfileReducer = (state: InitialStateType = initialState, action: MyProfileReducerAction): InitialStateType => {

    switch (action.type) {
        case "ADD-POST":
            return {
                ...state,
                posts: [{id: v1(), message: action.newPostText, likeCount: 0}, ...state.posts]
            }
        case "SET-MY-PROFILE":
            return {
                ...state,
                myProfile: {...state.myProfile, ...action.profile}
            }
        case "SET-MY-STATUS":
            return {
                ...state,
                myStatus: action.status
            }
        case "SET-MY-PHOTO":
            return {
                ...state,
                myProfile: {...state.myProfile, photos: {...state.myProfile.photos, large: action.file}}

            }

        default:
            return state
    }
}


export const sendPost = (newPostText: string) => ({type: "ADD-POST", newPostText} as const)
export const setMyProfile = (profile:Partial<MyProfileType> ) =>  ({type: "SET-MY-PROFILE", profile} as const)
export const setMyStatus = (status: string) =>  ({type: "SET-MY-STATUS", status} as const)
export const saveMyPhoto = (file: string) => ({type: "SET-MY-PHOTO", file} as const)

//thunks
export const getMyProfile = (userID: string): ThunkType => dispatch => {
    dispatch(setMyProfile(initialState.myProfile))
    dispatch(getMyStatus(userID))
    profileApi.getUserProfile(userID)
        .then(response =>
            dispatch(setMyProfile(response))
        )
}
export const getMyStatus = (userID: string): ThunkType => dispatch => {
    profileApi.getStatus(userID)
        .then(response =>
            dispatch(setMyStatus(response.data))
        )
}

export const updateMyStatus = (status: string): ThunkType => dispatch => {
    profileApi.updateStatus(status)
        .then(response => {
                if (response.data.resultCode === 0)
                    dispatch(setMyStatus(status))
            }
        )
}

export const savePhoto = (file: File, userID: string): ThunkType => dispatch => {
    profileApi.setPhoto(file)
        .then(response => {
                if (response.data.resultCode === 0)
                    dispatch(getMyProfile(userID))
            }
        )
}

export const updateMyProfile = (updateModel:Partial<ProfileAPIType>):ThunkType => (dispatch, getState) => {
    const currentProfile = getState().profilePage.profile
    profileApi.updateProfile({...currentProfile,...updateModel,lookingForAJobDescription:"asd"})
        .then(response=>{
            if(response.data.resultCode === 0)
                dispatch(setMyProfile({...currentProfile,...updateModel}))
        })
}
