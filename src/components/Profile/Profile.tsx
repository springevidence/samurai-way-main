import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {postsType} from "../../redux/state";

export type ProfilePropsType = {
    posts: postsType[]
    addPost: (postMessage: string) => void
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
            <MyPosts posts={props.posts} addPost={props.addPost}/>
        </div>
    );
};

export default Profile;