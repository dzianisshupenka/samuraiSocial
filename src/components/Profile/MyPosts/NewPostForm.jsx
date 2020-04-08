import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { required, maxLengthCreator } from '../../../utils/validators/validator';
import { Textarea } from '../../common/controls/FormControl';

const maxLength = maxLengthCreator(10);

const NewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} placeholder='Post message' name='newPostItem' validate= {[required, maxLength]}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const NewPostFormRedux = reduxForm({form:'newPost'})(NewPostForm);

export default NewPostFormRedux;