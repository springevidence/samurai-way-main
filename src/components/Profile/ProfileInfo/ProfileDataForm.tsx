import React from 'react';
import {ContactsType, UserProfileType} from "../../../redux/profile-reducer";
import {Form, Field} from 'react-final-form'
import { FORM_ERROR } from 'final-form'

type ProfileDataPropsType = {
    profile: UserProfileType
    onSubmit: (profile: UserProfileType) => void
}

const ProfileDataForm = (props: ProfileDataPropsType) => {
    type ProfileDataFormErrorType = {
        facebook: string | null
        website: string | null
        vk: string | null
        twitter: string | null
        instagram: string | null
        youtube: string | null
        github: string | null
        mainLink: string | null
    }
    // const validate = (values: UserProfileType) => {
    //     const error: ProfileDataFormErrorType = {}
    //     // Object.keys(values.contacts).map(elem => {
    //     //     if (!values.contacts[elem as keyof ContactsType]) {
    //     //         error[elem as keyof ContactsType] = 'Field is required'
    //     //     }
    //         // else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values[elem as keyof ContactsType])) {
    //         //     error[elem as keyof ContactsType]  = 'Invalid email address'
    //         // }
    //     // })
    //
    //     // if (!values.contacts.facebook) {
    //     //     error.facebook = 'Field is required'
    //     // }
    //
    //     return error
    // }
    return (
        <div>
            <Form
                onSubmit={props.onSubmit}
                // validate={validate}
                render={({handleSubmit}) => (
                    <form onSubmit={handleSubmit}>
                        <div>
                            <Field name={'fullName'}
                                   initialValue={props.profile.fullName}
                                   render={({input}) => (
                                       <div>
                                           <label><b>Full name: </b></label>
                                           <input {...input} />
                                       </div>
                                   )}
                            />
                        </div>
                        <div>
                            <Field type={'textarea'}
                                   initialValue={props.profile.aboutMe}
                                   name={'aboutMe'}
                                   render={({input}) => (
                                       <div>
                                           <label><b>About me: </b></label>
                                           <textarea {...input} />
                                       </div>
                                   )}
                            />
                        </div>
                        <div>
                            <label><b>Looking for a job: </b></label>
                            <Field name={'lookingForAJob'}
                                   initialValue={props.profile.lookingForAJob}
                                   type={'checkbox'}
                                   component={'input'}/>
                        </div>
                        <div>
                            <Field name={'lookingForAJobDescription'}
                                   initialValue={props.profile.lookingForAJobDescription}
                                   render={({input}) => (
                                       <div>
                                           <label><b>Description: </b></label>
                                           <input {...input} />
                                       </div>
                                   )}
                            />
                        </div>
                        <div><b>Contacts: </b>
                            {Object.keys(props.profile.contacts).map(elem => {
                                return (
                                    <div key={elem}>
                                        <Field name={'contacts.' + elem}
                                               render={({input, meta}) => (
                                                   <div>
                                                       <label>{elem}: </label>
                                                       <input {...input} />
                                                       {(meta.error || meta.submitError) && meta.touched && (
                                                           <span
                                                               style={{color: 'red'}}>{meta.error || meta.submitError}</span>
                                                       )}
                                                   </div>
                                               )}/>
                                    </div>
                                )
                            })}
                        </div>

                        <button type={'submit'}>Save</button>
                    </form>
                )}
            />
        </div>
    );
};

export default ProfileDataForm;