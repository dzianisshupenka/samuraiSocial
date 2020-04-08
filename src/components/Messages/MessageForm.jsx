import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../common/controls/FormControl';
import { required, maxLengthCreator } from '../../utils/validators/validator';

const maxLength = maxLengthCreator(50);

const MessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} validate={[required, maxLength]} placeholder='Message'  name={'messageItem'} />
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