import React from 'react';
import profile from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return(
        <div>
            <div>
                <img className={profile.img} alt='head' src='http://demo.themefreesia.com/arise/wp-content/uploads/sites/2/2015/11/cropped-header-img.png'/>
            </div>
            <div className={profile.info}>
                <div><img className={profile.avatar} src='https://images-na.ssl-images-amazon.com/images/I/31nxvlzm90L._SY450_.jpg'/></div>
                description
            </div>
        </div>
    
    )
}

export default ProfileInfo;