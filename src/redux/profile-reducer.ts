import { PostsType, ProfilePageTypeProps} from "./store";
import {addMessageActionType, updateNewMessageTextActionType} from "./dialogs-reducer";

// const ADD_POST = 'ADD-POST';
// const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

export type addPostActionType = {
    type: 'ADD-POST'
}
export type updateNewPostTextActionType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}
const initState = {
        posts: [
            {id: 1, message: "Hey, how are you?", likesCount: 13},
            {id: 2, message: "It's my first post", likesCount: 11},
            {id: 3, message: "Happy birthday!", likesCount: 7},
            {id: 4, message: "How to learn React JS?", likesCount: 3}
        ],
        newPostText: ''
    }
export const profileReducer = (state: ProfilePageTypeProps = initState, action: addPostActionType | updateNewPostTextActionType | addMessageActionType | updateNewMessageTextActionType) => {
    switch (action.type) {
        case 'ADD-POST':
            return {...state,
                posts: [{
                    id: 5,
                    message: state.newPostText,
                    likesCount: 0
                }, ...state.posts],
                newPostText: ''};

        case 'UPDATE-NEW-POST-TEXT':
            // if (action.newText != null) {
            // }
            return {...state, newPostText: action.newText};
        default:
            return state;
    }
}

export const addPostAC = (): addPostActionType => ({
    type: 'ADD-POST'
})
export const updateNewPostTextAC = (text: string): updateNewPostTextActionType => ({
    type: 'UPDATE-NEW-POST-TEXT',
    newText: text
}
)