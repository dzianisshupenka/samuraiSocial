import React from 'react';
import profile from './ProfileInfo.module.css';
import Preloader from '../../../common/Preloader';

const ProfileInfo = (props) => {
    if(!props.userProfile) {
        return <Preloader />
    }
    return(
        <div>
            <div>
                <img className={profile.img} alt='head' src='http://demo.themefreesia.com/arise/wp-content/uploads/sites/2/2015/11/cropped-header-img.png'/>
            </div>
            <div className={profile.info}>
                <div><img className={profile.avatar} src={props.userProfile.photos.small}/></div>
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