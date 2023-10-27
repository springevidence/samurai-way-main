import React from 'react';
import {MyPosts} from "./MyPosts";
import {
    addPostAC,
    addPostActionType,
} from "../../../redux/profile-reducer";
import {StatesType, StoreType} from "../../../redux/store";
import {connect} from "react-redux";
import {
    addMessageActionType,
} from "../../../redux/dialogs-reducer";

type MyPostsContainerType = {
    store: StoreType
}

const mapStateToProps = (state: StatesType) => {
    return {
        newPostText: state.profilePage.newPostText,
        posts: state.profilePage.posts
    }
}
const mapDispatchToProps = (dispatch: (action: addPostActionType | addMessageActionType)=>void) => {
    return {
        addPost: (newPostText: string) => {
            dispatch(addPostAC(newPostText))
        }
    }
}
export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

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