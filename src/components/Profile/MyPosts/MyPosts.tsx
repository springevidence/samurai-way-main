import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    let posts = [
        {message: "Hey, how are you?",  likesCount: 13},
        {message: "It's my first post",  likesCount: 11},
        {message: "Happy birthday!",  likesCount: 7},
        {message: "How to learn React JS?",  likesCount: 3}
    ]

    let postsElements = posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)
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
               {postsElements}
           </div>

        </div>
    );
};

export default MyPosts;