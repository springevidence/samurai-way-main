import React from 'react';
import { Form, Field } from 'react-final-form'
import {FormValues} from "./Login";

type LoginFormPropsType = {
    onSubmit: (formData: FormValues) => void
    loginError: string | null | undefined
}
const LoginForm = (props: LoginFormPropsType) => {

     type FormErrorType = {
        email?: string
        password?: string
        rememberMe?: boolean
    }
    const validate = (values: FormValues ) => {
        const error: FormErrorType = {}
        if (!values.email) {
            error.email = 'Field is required'
        }
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            error.email = 'Invalid email address'
        }
        else if (!values.password) {
            error.password = 'Field is required'
        }
        return error
    }

    return <Form
        onSubmit={props.onSubmit}
        validate={validate}

        render={({handleSubmit}) => (
            <form onSubmit={handleSubmit}>
                <div>
                    <Field name={'email'}
                           render={({input, meta})=> (
                               <div>
                                   <label>email</label>
                                   <input {...input} />

                                   {(meta.error || meta.submitError) && meta.touched && (
                                       <span style={{color: 'red'}}>{meta.error || meta.submitError}</span>
                                   )}
                               </div>
                           )}
                    />
                </div>
                <div>
                    <Field name={'password'}
                           render={({input, meta})=> (
                               <div>
                                   <label>password</label>
                                   <input {...input} type={'password'}/>

                                   {(meta.error || meta.submitError) && meta.touched && (
                                       <span style={{color: 'red'}}>{meta.error || meta.submitError}</span>
                                   )}
                               </div>
                           )}
                    />
                </div>
                <div>
                    <label>remember me</label>
                    <Field name={'rememberMe'} type={'checkbox'} component={'input'}/>
                </div>
                {props.loginError && <div style={{color: 'red'}}>{props.loginError}</div>}
                <button type={'submit'}>Submit</button>
            </form>
        )}
    />
};

export default LoginForm;


