import React from 'react';
import friend from './Friend.module.css';

const Friend = () => {
    return (
        <div className={friend.item}>
            <img className={friend.img} alt='friend' src='https://images-na.ssl-images-amazon.com/images/I/31nxvlzm90L._SY450_.jpg'/>
            My friend
        </div>
    )
}

export default Friend;