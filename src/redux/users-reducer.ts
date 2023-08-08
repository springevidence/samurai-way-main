import {UserType} from "./store";

export type followActionType = {
    type: 'FOLLOW'
    userId: number

}
export type unfollowActionType = {
    type: 'UNFOLLOW'
    userId: number
}
export type setUsersActionType = {
    type: 'SET_USERS'
    users: UserType[]
}
type StateType = {
    users: UserType[]
}
const initState = {
    users: [
        // {id: 1, photoUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngwing.com%2Fen%2Fsearch%3Fq%3Duser%2BAvatar&psig=AOvVaw2-gpBHIw62h92Tw3geW5_O&ust=1689856696244000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLD5yfLkmoADFQAAAAAdAAAAABAE', followed: true, fullName: "Nikolay", status: "sleeping", location: {city: "Minsk", country: "Belarus"}},
        // {id: 2, photoUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngwing.com%2Fen%2Fsearch%3Fq%3Duser%2BAvatar&psig=AOvVaw2-gpBHIw62h92Tw3geW5_O&ust=1689856696244000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLD5yfLkmoADFQAAAAAdAAAAABAE',followed: false, fullName: "John", status: "eating", location: {city: "Rostov-on-Don", country: "Russia"}},
        // {id: 3, photoUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngwing.com%2Fen%2Fsearch%3Fq%3Duser%2BAvatar&psig=AOvVaw2-gpBHIw62h92Tw3geW5_O&ust=1689856696244000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLD5yfLkmoADFQAAAAAdAAAAABAE',followed: true, fullName: "Jack", status: "working", location: {city: "New York", country: "USA"}},
        // {id: 4, photoUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngwing.com%2Fen%2Fsearch%3Fq%3Duser%2BAvatar&psig=AOvVaw2-gpBHIw62h92Tw3geW5_O&ust=1689856696244000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLD5yfLkmoADFQAAAAAdAAAAABAE',followed: true, fullName: "Vladimir", status: "driving", location: {city: "Moscow", country: "Russia"}}
    ]
}
export const usersReducer = (state: StateType = initState, action: followActionType | unfollowActionType | setUsersActionType) => {
    switch (action.type) {
        case 'FOLLOW':
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)};
        case 'UNFOLLOW':
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)};
        case 'SET_USERS':
            return {...state, users: [...state.users, ...action.users]}
        default:
            return state;
    }
}

export const followAC = (userId: number): followActionType => ({
    type: 'FOLLOW',
    userId
})
export const unfollowAC = (userId: number): unfollowActionType => ({
    type: 'UNFOLLOW',
    userId
})
export const setUsersAC = (users: UserType[]): setUsersActionType => ({
    type: 'SET_USERS',
    users
})
