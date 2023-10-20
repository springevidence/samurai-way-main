import axios from "axios";
import {BaseResponseType} from "../components/Header/HeaderContainer";
import {InitAuthStateTypeProps} from "../redux/auth-reducer";
import {UserProfileType} from "../redux/profile-reducer";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'a3c2f99e-1c1c-4818-b9ab-09de58523ab7'
    }
})

export const usersApi = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(res => res.data)
    }
}

export const profileApi = {
    getProfile(userId: number) {
        return instance.get<UserProfileType>(`profile/${userId}`)
    },
    getStatus(userId: number){
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status: string) {
        return instance.put<BaseResponseType>('profile/status/', {status})
    }
}

export const followApi = {
    follow(userId: number) {
        return instance.post<BaseResponseType>(`follow/${userId}`).then(res => res.data)
    },
    unfollow(userId: number) {
        return instance.delete<BaseResponseType>(`follow/${userId}`).then(res => res.data)
    },
}

export const authApi = {
    authMe() {
        return instance.get<BaseResponseType<InitAuthStateTypeProps>>('auth/me')
            // .then(res => res.data)
    }
}

