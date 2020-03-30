import React from 'react';
import profile from'./../Profile.module.css';

const NewPost = (props) => {
  
  let newPost = React.createRef()

  let onAddPost = () => {
    props.addPost();
  }

  let onPostChange = () => {
    let text = newPost.current.value;
    props.newPostChange(text);
  }

    return(
    <div>
      <div className={profile.posts}>
        <h3>My posts</h3>
        <div >
          <textarea onChange={ onPostChange } ref={newPost} value={props.newPostText}/>
          <div>
            <button onClick= { onAddPost }>Add post</button>
          </div>
        </div>
      </div>
      <div >
        {props.posts}
      </div>
      
    </div>)
}

export default NewPost;