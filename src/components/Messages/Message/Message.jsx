import React from 'react';
import message from './../Messages.module.css';


const Message = (props) => {
   
return <div className={props.class}><div className={message.message}>{props.message}</div></div>
}

export default Message;