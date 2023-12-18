import {addPostAC, ProfilePageTypeProps, profileReducer} from "./profile-reducer";
import {v1} from "uuid";


const initState: ProfilePageTypeProps = {
    posts: [
        {id: 1, message: "Hey, how are you?", likesCount: 13},
        {id: 2, message: "It's my first post", likesCount: 11},
        {id: 3, message: "Happy birthday!", likesCount: 7},
        {id: 4, message: "How to learn React JS?", likesCount: 3}
    ],
    profile: {aboutMe: '',
        contacts: {
            facebook: '',
            website: null,
            vk: '',
            twitter: '',
            instagram: '',
            youtube: null,
            github: '',
            mainLink: null
        },
        lookingForAJob: false,
        lookingForAJobDescription: '',
        fullName: '',
        userId: +v1(),
        photos: {
            small: '',
            large: ''
        }},
    status: ''
}

test('new post should be added', () => {
    const action = addPostAC('hey, it is my new post!')
    const result = profileReducer(initState, action)
    expect(result.posts.length).toBe(5)
})
