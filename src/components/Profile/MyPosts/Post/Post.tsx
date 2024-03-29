import React from 'react';
import s from './Post.module.css';

type PostType = {
    message: string
    likesCount: number
}
const Post = (props: PostType) => {
    return (
        <div className={s.item}>
            <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="avatar"/>
            {props.message}
            <div>
                <span>{props.likesCount} likes</span>
            </div>

        </div>
    );
};

export default Post;