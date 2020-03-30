import React from 'react';
import profile from'./Profile.module.css';
import ProfileInfo from './MyPosts/ProfileInfo/ProfileInfo';
import NewPostContainer from './MyPosts/NewPostsContainer';

const Profile = (props) => {
    return(
      
    <div className={profile.content}>

      <ProfileInfo userProfile={props.userProfile}/>
      <NewPostContainer />
      
  </div>)
}

export default Profile;