import axios from "axios";
import {ResponseType} from "../components/Header/HeaderContainer";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'c9ffe2fa-b1e3-4f61-a3fc-f9093486d953'
    }
})

export const usersApi = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(res => res.data)
    },
}
export const followApi = {
    follow(userId: number) {
        return instance.post<ResponseType>(`follow/${userId}`).then(res => res.data)
    },
    unfollow(userId: number) {
        return instance.delete<ResponseType>(`follow/${userId}`).then(res => res.data)
    },
}
