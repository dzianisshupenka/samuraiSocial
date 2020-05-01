import React from 'react';
import profile from'./Profile.module.css';
import ProfileInfo from './MyPosts/ProfileInfo/ProfileInfo';
import NewPostContainer from './MyPosts/NewPostsContainer';

const Profile = (props) => {
    return(
      
    <div className={profile.content}>

      <ProfileInfo isOwner={props.isOwner} 
                   userProfile={props.userProfile} 
                   status={props.status} 
                   savePhoto={props.savePhoto}
                   saveProfile={props.saveProfile}
                   updateStatus={props.updateStatus}/>
      <NewPostContainer />
      
  </div>)
}

export default Profile;