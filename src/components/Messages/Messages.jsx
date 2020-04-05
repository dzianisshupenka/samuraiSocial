import React from 'react';
import message from './Messages.module.css';
import MessageItem from './MessageItem/MessageItem';
import Message from './Message/Message';
import { Redirect } from 'react-router-dom';


const Messages = (props) => {
    
    let newMessage = React.createRef();

    let sendMessage = () => {
        props.onSendMessage();
    }

    let onMessageChange = () => {
        let text = newMessage.current.value;
        props.onMessageChange(text);
    }

    let dialog = props.messagePage.messageItemData.map(dialog => 
    <MessageItem name={dialog.name} id={dialog.id} />)

    let messageMap = props.messagePage.messageData.map(message => 
    <Message message={message.message} class={message.class} />)

    if(!props.auth) return <Redirect to={'/login'} />

    return(
        <div className={message.dialogs}>         
            <div className={message.dialogItems}>
            {dialog}
            </div>
            <div className={message.messages}>
            {messageMap}
            <textarea onChange={onMessageChange} ref={newMessage} className={message.text} value={props.messagePage.newMessageText} />
            <button onClick={sendMessage} className={message.btn}>Send message</button>
            </div>
            
        </div>
    )
}
export default Messages;