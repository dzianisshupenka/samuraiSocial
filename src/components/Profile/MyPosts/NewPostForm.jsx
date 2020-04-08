import React from 'react';
import { reduxForm, Field } from 'redux-form';

const NewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component='input' name='newPostItem' />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const NewPostFormRedux = reduxForm({form:'newPost'})(NewPostForm);

export default NewPostFormRedux;