import React, { useState } from 'react';
import profile from './ProfileInfo.module.css';
import Preloader from '../../../common/Preloader';
import photoNull from '../../../../img/31nxvlzm90L._SY450_.jpg';
import ProfileStatusHook from './ProfileStatusHook';
import ProfileDataReduxForm from './ProfileDataForm';

const Contact = ({contactTitle, contactValue}) => {
    return <div className={profile.contacts}> {contactTitle}: {contactValue==null ? 'ne ukazano' : contactValue}</div>
    }  

const ProfileData = ({props, setEditMode}) => {

    return <div>
                 {props.isOwner && <button onClick={setEditMode}>edit</button>}
                <div className={profile.margin}>
                <span className={profile.field}>
                    Full name: 
                </span>  
                {props.userProfile.fullName} 
                </div>
                <div className={profile.margin}>
                    <span className={profile.field}>
                        About me: 
                    </span>  
                    {props.userProfile.aboutMe}
                </div>
                <div className={profile.margin}>
                    <span className={profile.field}>
                        Loking for a job: 
                    </span>  
                    {props.userProfile.lookingForAJob ? "yes" : "no"}
                </div>
                <div className={profile.margin}>
                    <span className={profile.field}>
                        Professional skills: 
                    </span>  
                    {props.userProfile.lookingForAJobDescription}
                </div>
                <div className={profile.margin}>
                    <span className={profile.field}>
                        Contacts: 
                    </span>  
                        {Object.keys(props.userProfile.contacts).map(key => {
                            return <Contact key={key} contactTitle={key} contactValue={props.userProfile.contacts[key]} />
                        })}
                </div>
            </div>
    
}

const ProfileInfo = (props) => {

    let [editMode, setEditMode] = useState(false);

    if(!props.userProfile) {
        return <Preloader />
    }

    const onMainPhotoSelected = (e) => {
        props.savePhoto(e.target.files[0])
        
    }

    const onSubmit = (formData) => {
        props.saveProfile(formData)
        .then(() => {
            setEditMode(false);
        })
    }

    return <div className={profile.info}>
        <div><img alt='avatar' className={profile.avatar} 
        src={props.userProfile.photos.small===null ? photoNull : props.userProfile.photos.small}/></div>
        <div>
            {props.isOwner && <input type='file' onChange={onMainPhotoSelected}/>}
        </div>
        <ProfileStatusHook status={props.status} updateStatus={props.updateStatus}/>
       
        {editMode ? <ProfileDataReduxForm initialValues={props.userProfile} props={props} onSubmit={onSubmit} /> : <ProfileData props={props} setEditMode={setEditMode}/>}
    </div>
}

export default ProfileInfo;