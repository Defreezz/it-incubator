import {Dispatch} from "redux";
import {userApi} from "../api/api";
import {ThunkType} from "./reduxStore";
import {setUserProfile} from "./profileReducer";

type FollowType = ReturnType<typeof toggleFollow>
type SetUsersACType = ReturnType<typeof setUsers>
type SetCurrentPage = ReturnType<typeof setCurrentPage>
type setTotalUsersCount = ReturnType<typeof setTotalItemUsersCount>
type setFetching = ReturnType<typeof setThrobbedFetching>
type setFollowingInProgress = ReturnType<typeof setFollowInProgress>

export type UsersReducerAction =
    | FollowType
    | SetUsersACType
    | SetCurrentPage
    | setTotalUsersCount
    | setFetching
    | setFollowingInProgress

export type UserType = {
    id: string
    followed: boolean
    name: string
    status: string
    photos: { small: string }
}
export type InitialStateType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: string[]
}

const initialState: InitialStateType = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [],
}
export const usersReducer = (state: InitialStateType = initialState, action: UsersReducerAction): InitialStateType => {
    switch (action.type) {
        case " TOGGLE-FOLLOW":
            return {
                ...state,
                users: state.users.map(u => u.id === action.userID ? {...u, followed: !u.followed} : u)
            }
        case "SET-USERS":
            return {
                ...state,
                users: action.users
            }
        case "SET-CURRENT-PAGE":
            return {
                ...state,
                currentPage: action.currentPage
            }
        case "SET-TOTAL-USERS-COUNT":
            return {
                ...state,
                totalUsersCount: action.usersCount
            }
        case "SET-FETCHING":
            return {
                ...state,
                isFetching: action.isFetching
            }
        case "SET-FOLLOW-PROGRESS":
            return {
                ...state,
                followingInProgress: action.following
                    ? [...state.followingInProgress, action.userID]
                    : state.followingInProgress.filter(id => id !== action.userID)
            }
        default:
            return state
    }
}
//ACs
export const toggleFollow = (userID: string) => ({type: " TOGGLE-FOLLOW", userID} as const)
export const setUsers = (users: UserType[]) => ({type: "SET-USERS", users} as const)
export const setCurrentPage = (currentPage: number) => ({type: "SET-CURRENT-PAGE", currentPage} as const)
export const setTotalItemUsersCount = (usersCount: number) => ({type: "SET-TOTAL-USERS-COUNT", usersCount} as const)
export const setThrobbedFetching = (isFetching: boolean) => ({type: "SET-FETCHING", isFetching} as const)
export const setFollowInProgress = (following: boolean, userID: string) => ({
    type: "SET-FOLLOW-PROGRESS",
    following,
    userID
} as const)
//thunkCs
export const getUsers = (currentPage: number, pageSize: number,):ThunkType => (dispatch: Dispatch) => {
    userApi.getUsers(currentPage, pageSize)
        .then(data => {
            dispatch(setThrobbedFetching(false))
            dispatch(setUsers(data.items))
            dispatch(setTotalItemUsersCount(data.totalCount))
        })
}
export const getUser = (userID:string):ThunkType=>(dispatch:Dispatch)=>{
    userApi.getUser(userID)
        .then (response =>
            dispatch(setUserProfile(response))
        )
}
export const follow = (userId: string, followed: boolean):ThunkType => (dispatch:Dispatch) =>{
    if (!followed) {
        dispatch( setFollowInProgress(true, userId))
        userApi.follow(userId)
            .then(response => {
                if (response.data.resultCode === 0) dispatch( toggleFollow(userId))
                dispatch( setFollowInProgress(false, userId))
            })
    } else {
        dispatch( setFollowInProgress(true, userId))
        userApi.unfollow(userId)
            .then(response => {
                if (response.data.resultCode === 0) dispatch( toggleFollow(userId))
                dispatch( setFollowInProgress(false, userId))

            })
    }
}