import React from 'react';
import { Form, Field } from 'react-final-form'

type AddPostFormPropsType = {
    addPost: (newPostText: string) => void
}
type FormValues = {
    newPostText: string
}
const AddPostForm = (props: AddPostFormPropsType) => {
    const onAddPost = (formData: FormValues) => {
        props.addPost(formData.newPostText)
    }

    return <Form
        onSubmit={onAddPost}
        // validate={validate}
        render={({handleSubmit}) => (
            <form onSubmit={handleSubmit}>
                <div>
                    <Field name={'newPostText'} type={'textarea'} component={'textarea'} placeholder={'Type post'}/>
                </div>
                <button type={'submit'}>Add post</button>
            </form>
        )}
    />
}


export default AddPostForm;


