import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../common/controls/FormControl';
import { required, maxLengthCreator } from '../../utils/validators/validator';
import style from './Messages.module.css';

const maxLength = maxLengthCreator(50);

const MessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field className={style.textArea} component={Textarea} validate={[required, maxLength]} placeholder='Message'  name={'messageItem'} />
            </div>
            <div>
                <button className={style.btn}>Send message</button>
            </div>
        </form>
    )
}

const MessageFormRedux = reduxForm({
    form: 'sendMessage'
})(MessageForm)

export default MessageFormRedux;