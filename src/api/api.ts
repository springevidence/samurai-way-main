import axios from "axios";
import {ResponseType} from "../components/Header/HeaderContainer";
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
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(res => res.data)
    },
    getProfile(userId: number) {
        return instance.get<UserProfileType>('https://social-network.samuraijs.com/api/1.0/profile/')
    }

}
export const followApi = {
    follow(userId: number) {
        return instance.post<ResponseType>(`follow/${userId}`).then(res => res.data)
    },
    unfollow(userId: number) {
        return instance.delete<ResponseType>(`follow/${userId}`).then(res => res.data)
    },
}

export const authApi = {
    authMe() {
        return instance.get<ResponseType<InitAuthStateTypeProps>>('auth/me')
            // .then(res => res.data)
    }
}
