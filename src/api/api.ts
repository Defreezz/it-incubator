import axios from "axios";
import {UserType} from "../redux/usersReducer";
import {InitialStateType} from "../redux/authReducer";
import {ProfileAPIType} from "../redux/profileReducer";

type GetUsersType = {
    error: 0|1
    items: UserType[]
    totalCount: number
}
type ProfileType = ProfileAPIType
type CommonResponseType<T> = {
    data: T
    fieldsErrors: []
    messages: []
    resultCode: 0|1
}


export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "b701020f-78a1-4daa-8002-6ee349adc8a0"
    }
})


export const userApi = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get<GetUsersType>(`/users?page=${currentPage}&count=${pageSize}`)
            .then(response => response)
    },
    follow(userId: string) {
        return instance.post<CommonResponseType<{ }>>(`/follow/${userId}`)
    },
    unfollow(userId: string) {
        return instance.delete<CommonResponseType<{ }>>(`/follow/${userId}`)
    }
}
export const loginApi = {
    me() {
        return instance.get<CommonResponseType<InitialStateType>>(`/auth/me`)
    },
}
export const profileApi = {
    getProfile(userID: string) {
        return instance.get<ProfileType>(`/profile/` + userID)
            .then(response => response.data)
    },
    getStatus(userID:string){
        return instance.get<string>(`/profile/status/`+ userID)
    },
    updateStatus(status:string){
        return instance.put(`/profile/status/`,{status:status})
    }
}


