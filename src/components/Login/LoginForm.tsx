import React from 'react';
import { Form, Field } from 'react-final-form'
import Input from "../common/FormsValidation/FormsValidation";
const LoginForm = () => {
    type FormValues = {
        email: string
        password: string
        rememberMe: boolean
        isRequired: boolean
    }

    const onLogin = (formData: FormValues) => {
        console.log(formData)
    }
    // const getValidator = (isRequired: boolean) =>
    //     isRequired ? (value:string) => (value ? undefined : "Field is required") : () => {};

    return <Form
        validate={values => {
            const errors = {
                email: '',
                password: ''
            }
            if (!values.email) {
                errors.email = 'Required'
            }
            if (!values.password) {
                errors.password = 'Required'
            }
            return errors
        }}
        onSubmit={onLogin}
        render={({handleSubmit}) => (
            <form onSubmit={handleSubmit}>
                <div>
                    <Field name={'email'}
                           // validate={getValidator(values.isRequired)}
                           render={({input, meta})=> (
                               <div>
                                   <label>email</label>
                                   <input {...input} />
                                   {meta.touched && meta.error && <span style={{color: 'red'}}>
                                       {meta.error}
                                   </span>}
                               </div>
                           )}
                    />
                </div>
                <div>
                    <Field name={'password'}
                           // validate={getValidator(values.isRequired)}
                           render={({input, meta})=> (
                               <div>
                                   <label>password</label>
                                   <input {...input} />
                                   {meta.touched && meta.error && <span style={{color: 'red'}}>
                                       {meta.error}
                                   </span>}
                               </div>
                           )}
                    />
                </div>
                <div>
                    <label>remember me</label>
                    <Field name={'rememberMe'} type={'checkbox'} component={'input'}/>
                </div>
                <button type={'submit'}>Submit</button>
            </form>
        )}
    />
};

export default LoginForm;


