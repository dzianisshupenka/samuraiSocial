import React from 'react';
import { addPostActionCreator, updateNewPostActionCreator } from '../../../redux/profileReducer';
import NewPost from './NewPosts';
import Post from './Post/Post';
import { connect } from 'react-redux';

// const NewPostContainer = () => {

//   return (
//     <StoreContext.Consumer>
//       {
//         (store) => {
//           let addPost = () => {
//             store.dispatch(addPostActionCreator())
//           }
//           let onPostChange = (text) => {
//             store.dispatch(updateNewPostActionCreator(text))
//           }
//           let newPost = store.getState().profilePage.newPostText;
//           let posts = store.getState().profilePage.postData.map(p => <Post post={p.post} likesCount={p.likesCount}/>)
//           return <NewPost posts={posts} addPost={addPost} newPostChange={onPostChange} newPostText= {newPost}/>
//         }
//       }
//     </StoreContext.Consumer>
//     )
// }

let mapStateToProps = (state) => {
  return {
    newPostText: state.profilePage.newPostText,
    posts: state.profilePage.postData.map(p => <Post post={p.post} key={p.id} likesCount={p.likesCount}/>)
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostActionCreator())
    },
    newPostChange: (text) => {
      dispatch(updateNewPostActionCreator(text))
    }
  }
}

const NewPostContainer = connect(mapStateToProps, mapDispatchToProps)(NewPost);

export default NewPostContainer;