import React from 'react';
import profile from'./Profile.module.css';
import ProfileInfo from './MyPosts/ProfileInfo/ProfileInfo';
import NewPostContainer from './MyPosts/NewPostsContainer';





const Content = () => {
  
    return(
    <div className={profile.content}>
      <ProfileInfo />
      <NewPostContainer />
      
  </div>)
}

export default Content;