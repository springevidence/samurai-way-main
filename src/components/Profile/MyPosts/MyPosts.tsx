import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div>
                New post
            </div>
            <Post message="Hey, how are you?"/>
            <Post message="It's my first post"/>
            <Post message="Happy birthday!"/>
            <Post message="How to learn React JS?"/>
        </div>
    );
};

export default MyPosts;