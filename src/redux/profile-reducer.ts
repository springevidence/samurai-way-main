import {ActionType, messagesType, postsType, ProfilePageTypeProps, StatesType} from "./store";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const initState =
    {
        posts: [
            {id: 1, message: "Hey, how are you?", likesCount: 13},
            {id: 2, message: "It's my first post", likesCount: 11},
            {id: 3, message: "Happy birthday!", likesCount: 7},
            {id: 4, message: "How to learn React JS?", likesCount: 3}
        ],
        newPostText: ''
    }

export const profileReducer = (state: ProfilePageTypeProps = initState, action: ActionType) => {
    switch (action.type) {
        case ADD_POST:
            const newPost: postsType = { //what type
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }
            state.posts.unshift(newPost)
            state.newPostText = ''
            return state;
        case UPDATE_NEW_POST_TEXT:
            if (action.newText != null) {
                state.newPostText = action.newText;
            }
            return state;
        default:
            return state;
    }
}

export const addPostAC = () => ({type: ADD_POST})
export const updateNewPostTextAC = (text: string) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
})