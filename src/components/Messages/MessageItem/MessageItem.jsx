import React from 'react';
import message from './../Messages.module.css';
import { NavLink } from 'react-router-dom';

const MessageItem = (props) => {
    let path = '/messages/' + props.id;
    return (
        <div className={message.item}>
            <img className={message.img} src='https://images-na.ssl-images-amazon.com/images/I/31nxvlzm90L._SY450_.jpg'/>
            
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

export default MessageItem;