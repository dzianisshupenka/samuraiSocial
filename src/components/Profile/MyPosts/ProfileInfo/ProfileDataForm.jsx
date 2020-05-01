import profile from './ProfileInfo.module.css';
import React from 'react';
import { reduxForm } from 'redux-form';
import { createField, Input, Textarea } from '../../../common/controls/FormControl';
import style from './../../../common/controls/FormControl.module.css';


const ProfileDataForm = ({handleSubmit, props, error}) => {
    
    return <form onSubmit={handleSubmit}>
                <button>save</button>
                {error && <div className={style.commonError}>
                {error}
            </div>}
                <div className={profile.margin}>
                    Full name: 
                {createField(Input, null, 'fullName', null, 'Full name')} 
                </div>
                <div className={profile.margin}>
                        About me: 
                    {createField(Textarea, null, 'aboutMe', null, 'About me')}
                </div>
                <div className={profile.margin}>
                        Loking for a job: 
                    {createField(Input, null, 'lookingForAJob', null, null, {type: "checkbox"})}
                </div>
                <div className={profile.margin}>
                        My professional skills: 
                    {createField(Textarea, null, 'lookingForAJobDescription', null, 'My professional skills')}
                </div>
                <div className={profile.margin}>
                    <span className={profile.field}>
                        Contacts: 
                    </span>  
                        {Object.keys(props.userProfile.contacts).map(key => {
                            return <div key={key}><b>{key}:</b> {createField(Input, null, "contacts." + key, null, key)} </div>
                        })}
                </div>
            </form>
}  

const ProfileDataReduxForm = reduxForm({
    form: 'editProfile'
})(ProfileDataForm);

export default ProfileDataReduxForm;