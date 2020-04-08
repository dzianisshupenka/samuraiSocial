import React from 'react';
import { addPost } from '../../../redux/profileReducer';
import NewPost from './NewPosts';
import Post from './Post/Post';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return {
    newPostText: state.profilePage.newPostText,
    posts: state.profilePage.postData.map(p => <Post post={p.post} key={p.id} likesCount={p.likesCount}/>)
  }
}

const NewPostContainer = connect(mapStateToProps, {addPost})(NewPost);

export default NewPostContainer;