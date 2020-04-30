import React from 'react';
import profile from './ProfileInfo.module.css';
import Preloader from '../../../common/Preloader';
import photoNull from '../../../../img/31nxvlzm90L._SY450_.jpg';
import ProfileStatusHook from './ProfileStatusHook';

const ProfileInfo = (props) => {
    if(!props.userProfile) {
        return <Preloader />
    }

    const onMainPhotoSelected = (e) => {
        props.savePhoto(e.target.files[0])
        
    }

    return(
        <div>
            <div className={profile.info}>
                <div><img alt='avatar' className={profile.avatar} 
                src={props.userProfile.photos.small===null ? photoNull : props.userProfile.photos.small}/></div>
                <div>
                    {props.isOwner && <input type='file' onChange={onMainPhotoSelected}/>}
                </div>
                <ProfileStatusHook status={props.status} updateStatus={props.updateStatus}/>
                <div className={profile.margin}>
                    <span className={profile.field}>
                        My name is: 
                    </span>  
                    {props.userProfile.fullName} 
                </div>
                <div className={profile.margin}>
                    <span className={profile.field}>
                        I think i: 
                    </span>  
                    {props.userProfile.aboutMe}
                </div>
                <span className={`${profile.margin} ${profile.field}`}>{props.userProfile.lookingForAJob ? "I want to work hard" : "I don't want to work"}</span>
            </div>
        </div>
    
    )
    
}

export default ProfileInfo;