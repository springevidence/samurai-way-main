import React from 'react';
import s from './Profile.module.css';
import {MyPosts} from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionType, postsType} from "../../redux/state";

export type ProfilePropsType = {
    posts: postsType[]
    // addPost: () => void
    newPostText: string
    // updateNewPostText: (newText: string) => void
    dispatch: (action: ActionType) => void
}
const Profile = (props: ProfilePropsType) => {
    let posts = [
        {message: "Hey, how are you?",  likesCount: 13},
        {message: "It's my first post",  likesCount: 11},
        {message: "Happy birthday!",  likesCount: 7},
        {message: "How to learn React JS?",  likesCount: 3}
    ]
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts}
                     dispatch={props.dispatch}
                     newPostText={props.newPostText}
                    />
        </div>
    );
};

export default Profile;