import React from 'react';
import {MyPosts} from "./MyPosts";
import {
    addPostAC,
    addPostActionType,
    updateNewPostTextAC,
    updateNewPostTextActionType
} from "../../../redux/profile-reducer";
import {StatesType, StoreType} from "../../../redux/store";
import {connect} from "react-redux";
import {
    addMessageAC,
    addMessageActionType,
    updateNewMessageTextAC,
    updateNewMessageTextActionType
} from "../../../redux/dialogs-reducer";

type MyPostsContainerType = {
    store: StoreType
}

// export const MyPostsContainer = (props: MyPostsContainerType) => {
//     const state = props.store.getState()
//     const addPost = () => {
//         props.store.dispatch(addPostAC())
//     }
//     const onPostChange = (text: string) => {
//         props.store.dispatch(updateNewPostTextAC(text))
//     }
//     return <MyPosts posts={state.profilePage.posts}
//                     addPost={addPost}
//                     updateNewPostText={onPostChange}
//                     newPostText={state.profilePage.newPostText }/>
// }
const mapStateToProps = (state: StatesType) => {
    return {
        newPostText: state.profilePage.newPostText,
        posts: state.profilePage.posts
    }
}
const mapDispatchToProps = (dispatch: (action: addPostActionType | updateNewPostTextActionType | addMessageActionType | updateNewMessageTextActionType)=>void) => {
    return {
        updateNewPostText: (text: string) => {
            dispatch(updateNewPostTextAC(text))
        },
        addPost: () => {
            dispatch(addPostAC())
        }
    }
}
export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)