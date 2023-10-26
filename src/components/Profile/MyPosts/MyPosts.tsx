import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {PostsType} from "../../../redux/profile-reducer";
import AddPostForm from "./Post/AddPostForm";

type MyPostsType = {
    posts: PostsType[]
    addPost: (newPostText: string) => void
    newPostText: string
}
export const MyPosts = (props: MyPostsType) => {
    const postsElements =
        props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)
    const addPost = (newPostText: string) => {
        props.addPost(newPostText);
    }

    return (
        <div className={s.postsBlock}>My posts
            <div>
                <AddPostForm addPost={addPost}/>
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




// const onPostChange = () => {
//     if (newPostElement.current) {
//         const text = newPostElement.current.value;
//         props.updateNewPostText(text)
//         // props.dispatch(updateNewPostTextAC(text))
//     }
// }