import React from 'react';
import s from './Post.module.css';

const Post = () => {
    return (
        <div className={s.item}>
            <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="avatar"/>
            Post 1
            <div>
                <span>like</span>
            </div>

        </div>
    );
};

export default Post;