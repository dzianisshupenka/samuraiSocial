import React from 'react';
import message from './Messages.module.css';
import MessageItem from './MessageItem/MessageItem';
import Message from './Message/Message';
import MessageFormRedux from './MessageForm';


const Messages = (props) => {
    
    const onSubmit = (formData) => {
        props.sendMessage(formData.messageItem)
    }
 
    let dialog = props.messagePage.messageItemData.map(dialog => 
    <MessageItem name={dialog.name} id={dialog.id} />)

    let messageMap = props.messagePage.messageData.map(message => 
    <Message message={message.message} class={message.class} />)

    return(
        <div className={message.dialogs}>         
            <div className={message.dialogItems}>
            {dialog}
            </div>
            <div className={message.messages}>
            {messageMap}
            <MessageFormRedux onSubmit={onSubmit}/>
            </div>
            
        </div>
    )
}
export default Messages;