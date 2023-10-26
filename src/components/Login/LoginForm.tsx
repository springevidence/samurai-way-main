import React from 'react';
import { Form, Field } from 'react-final-form'
const LoginForm = () => {
    type FormValues = {
        email: string
        password: string
        rememberMe: boolean
    }
    const onLogin = (formData: FormValues) => {
        console.log(formData)
    }

    return <Form
        onSubmit={onLogin}
        // validate={validate}
        render={({handleSubmit}) => (
            <form onSubmit={handleSubmit}>
                <div>
                    <label>login</label>
                    <Field name={'login'} component={'input'} placeholder={"login"}/>
                </div>
                <div>
                    <label>email</label>
                    <Field name={'email'} component={'input'} placeholder={"email"}/>
                </div>
                <div>
                    <label>remember me</label>
                    <Field name={'rememberMe'} type={'checkbox'} component={'input'}/>
                </div>
                <button type={'submit'}>Submit</button>
            </form>
        )}
    />


    // return (
    //     <form>
    //         <div>
    //             <input placeholder={'login'}/>
    //         </div>
    //         <div>
    //             <input placeholder={'password'}/>
    //         </div>
    //         <div>
    //             <input type={'checkbox'}/> remember me
    //         </div>
    //         <div>
    //             <button type={'submit'}>Login</button>
    //         </div>
    //     </form>
    // );
};

export default LoginForm;


