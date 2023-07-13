import React from 'react';
import {ProfilePropsType} from '../Profile';
import {MyPosts} from "./MyPosts";
import {addPostAC, updateNewPostTextAC} from "../../../redux/profile-reducer";
import {text} from "stream/consumers";
import {PostsType, StatesType, StoreType} from "../../../redux/store";
import {AppRootStateType} from "../../../redux/redux-store";

type MyPostsContainerType = {
    store: StoreType
}
export const MyPostsContainer = (props: MyPostsContainerType) => {
    const state = props.store.getState()
    const addPost = () => {
        props.store.dispatch(addPostAC())
    }
    const onPostChange = (text: string) => {
        props.store.dispatch(updateNewPostTextAC(text))
    }
    return <MyPosts posts={state.profilePage.posts}
                    addPost={addPost}
                    updateNewPostText={onPostChange}
                    newPostText={state.profilePage.newPostText }/>
}