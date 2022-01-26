import axios from "axios";

export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "72c3c40f-c389-4146-a1a6-b62c9e00a280"
    }
})


export const userApi = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`/users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    getUser(userID: string) {
        return instance.get(`/profile/` + userID)
            .then(response => response.data)
    },
    follow(userId: string) {
        return instance.post(`/follow/${userId}`)
    },
    unfollow(userId: string) {
        return instance.delete(`/follow/${userId}`)
    }
}

export const loginApi = {
    me() {
        return instance.get(`/auth/me`)
    },
}
