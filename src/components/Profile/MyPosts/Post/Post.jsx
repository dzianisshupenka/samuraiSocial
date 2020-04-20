import React from 'react';
import post from './Post.module.css';

const Post =React.memo(props => {
    console.log('render')
    return(
            <div className={post.post}>
                <img alt='avatar' src='https://images-na.ssl-images-amazon.com/images/I/31nxvlzm90L._SY450_.jpg'/>
                {props.post} <span className={post.like}>Like {props.likesCount}</span>
            </div>    
    )
}) 
export default Post;