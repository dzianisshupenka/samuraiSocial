import React from 'react';
import profile from'./../Profile.module.css';
import NewPostFormRedux from './NewPostForm';

const NewPost = props => {
  let onSubmit = (formData) => {
    props.addPost(formData.newPostItem)
  }

    return(
    <div>
      <div className={profile.posts}>
        <h3>My posts</h3>
        <NewPostFormRedux onSubmit={onSubmit}/>
      </div>
      <div >
        {props.posts}
      </div>
      
    </div>)
}

export default NewPost;