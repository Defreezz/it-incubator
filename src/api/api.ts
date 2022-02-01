import axios from "axios";

export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "b701020f-78a1-4daa-8002-6ee349adc8a0"
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
export const loginApi = {
    me() {
        return instance.get(`/auth/me`)
    },
}
export const profileApi = {
    getProfile(userID: string) {
        return instance.get(`/profile/` + userID)
            .then(response => response.data)
    },
    getStatus(userID:string){
        return instance.get(`/profile/status/`+ userID)
    },
    updateStatus(status:string){
        return instance.put(`/profile/status/`,{status})
    }
}


