import React from 'react';
import s from './Post.module.css';

type propsTypePost = {
    message: string
}
const Post = (props: propsTypePost) => {
    return (
        <div className={s.item}>
            <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="avatar"/>
            {props.message}
            <div>
                <span>like</span>
            </div>

        </div>
    );
};

export default Post;