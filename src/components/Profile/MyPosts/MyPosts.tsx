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
            <Post message="Hey, how are you?" likesCount={13}/>
            <Post message="It's my first post" likesCount={23}/>
            <Post message="Happy birthday!" likesCount={3}/>
            <Post message="How to learn React JS?" likesCount={13}/>
        </div>
    );
};

export default MyPosts;