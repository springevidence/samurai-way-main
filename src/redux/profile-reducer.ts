import {ActionType, messagesType, postsType, ProfilePageTypeProps, StatesType} from "./state";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
export const profileReducer = (state: ProfilePageTypeProps, action: ActionType) => {
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