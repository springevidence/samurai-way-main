import React from 'react';
import {Field, Form} from "react-final-form";

type FormValues = {
    newMessage: string
}
type AddMessageFormPropsType = {
    sendMessage: (newMessage: string) => void
}
const AddMessageForm = (props: AddMessageFormPropsType) => {
    const onSenMessage = (formData: FormValues) => {
        props.sendMessage(formData.newMessage)
    }
    return <Form
        onSubmit={onSenMessage}
        // validate={validate}
        render={({handleSubmit}) => (
            <form onSubmit={handleSubmit}>
                <div>
                    <Field name={'newMessage'} type={'textarea'} component={'textarea'} placeholder={'Type your message'}/>
                </div>
                <button type={'submit'}>Send</button>
            </form>
        )}
    />

};

export default AddMessageForm;