import React from 'react';
import { Form, Field } from 'react-final-form'
const AddPostForm = () => {
    const onSubmit = () => {
        console.log()
    }

    return <Form
        onSubmit={onSubmit}
        // validate={validate}
        render={({handleSubmit}) => (
            <form onSubmit={handleSubmit}>
                <div>
                    <Field name={'addPost'} type={'textarea'} component={'textarea'}/>
                </div>
                <button type={'submit'}>Add post</button>
            </form>
        )}
    />
}


export default AddPostForm;


