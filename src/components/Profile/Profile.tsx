import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostsType, StoreType} from "../../redux/store";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

export type ProfilePropsType = {
    // posts: PostsType[]
    // addPost: () => void
    // newPostText: string
    // updateNewPostText: (newText: string) => void
    store: StoreType
}
const Profile = (props: ProfilePropsType) => {
    // let posts = [
    //     {message: "Hey, how are you?", likesCount: 13},
    //     {message: "It's my first post", likesCount: 11},
    //     {message: "Happy birthday!", likesCount: 7},
    //     {message: "How to learn React JS?", likesCount: 3}
    // ]
    return (
        <div>
            <ProfileInfo/>
            {/*<MyPosts posts={props.posts}*/}
            {/*    // dispatch={props.dispatch}*/}
            {/*         newPostText={props.newPostText}*/}
            {/*         updateNewPostText={props.updateNewPostText}*/}
            {/*         addPost={props.addPost}*/}
            {/*/>*/}
            <MyPostsContainer store={props.store}/>
        </div>
    );
};

export default Profile;