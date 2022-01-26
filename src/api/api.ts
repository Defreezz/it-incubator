import axios from "axios";
import {setAuthStatus, setUserData} from "../redux/authReducer";

export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "48f39b3b-88cd-43fa-b014-7ded7a46fb5b"
    }
})

export const userApi = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`/users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    follow(userId: string) {
        return instance.post(`/follow/${userId}`)
    },
    unfollow(userId: string) {
        return instance.delete(`/follow/${userId}`)
    }
}

export const authAPI = {
    auth() {
        return instance.get(`/auth/me`)
    }
}