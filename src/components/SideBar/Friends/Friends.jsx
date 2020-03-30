import React from 'react';
import friends from './Friends.module.css';
import Friend from './Friend/Friend';

const Friends = () => {
    return (
        <div className={friends.friends}>
            <div>
                Friends
            </div>
            <div className={friends.item}>
                <Friend />
                <Friend />
                <Friend />
            </div>
        </div>
    )
}
export default Friends;