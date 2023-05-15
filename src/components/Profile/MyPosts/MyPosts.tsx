import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    let postData = [
        {message: "Hey, how are you?",  likesCount: 13},
        {message: "It's my first post",  likesCount: 11},
        {message: "Happy birthday!",  likesCount: 7},
        {message: "How to learn React JS?",  likesCount: 3}
    ]
    return (
        <div className={s.postsBlock}>My posts
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div>
                New post
            </div>
           <div className={s.posts}>
               <Post message={postData[0].message} likesCount={postData[0].likesCount}/>
               <Post message={postData[1].message} likesCount={postData[1].likesCount}/>
               <Post message={postData[2].message} likesCount={postData[2].likesCount}/>
               <Post message={postData[3].message} likesCount={postData[3].likesCount}/>
           </div>

        </div>
    );
};

export default MyPosts;