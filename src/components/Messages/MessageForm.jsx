import React from 'react';
import { Field, reduxForm } from 'redux-form';

const MessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={'input'} name={'messageItem'}/>
            </div>
            <div>
                <button>Send message</button>
            </div>
        </form>
    )
}

const MessageFormRedux = reduxForm({
    form: 'sendMessage'
})(MessageForm)

export default MessageFormRedux;