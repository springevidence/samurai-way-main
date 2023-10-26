import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {PostsType} from "../../../redux/profile-reducer";
import AddPostForm from "./Post/AddPostForm";

type MyPoststype = {
    posts: PostsType[]
    addPost: () => void
    updateNewPostText: (text: string) => void
    newPostText: string
}
export const MyPosts = (props: MyPoststype) => {
    const postsElements =
        props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)
    const newPostElement = React.createRef<HTMLTextAreaElement>();  //what type?
    const addPost = () => {
        props.addPost();
        // props.addPost(newPostElement.current ? newPostElement.current.value : ' ')
        // props.dispatch(addPostAC())
    }
    const onPostChange = () => {
        if (newPostElement.current) {
            const text = newPostElement.current.value;
            props.updateNewPostText(text)
            // props.dispatch(updateNewPostTextAC(text))
        }
    }
    return (
        <div className={s.postsBlock}>My posts
            <div>
                <AddPostForm/>
                {/*<div>*/}
                {/*    <textarea*/}
                {/*        placeholder={'Type post'}*/}
                {/*        ref={newPostElement}*/}
                {/*        value={props.newPostText}*/}
                {/*        onChange={onPostChange}*/}
                {/*    />*/}
                {/*</div>*/}
                {/*<div>*/}
                {/*    <button onClick={addPost}>Add post</button>*/}
                {/*</div>*/}
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
