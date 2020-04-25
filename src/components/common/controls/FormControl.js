import React from 'react';
import style from './FormControl.module.css';
import { Field } from 'redux-form';

export const Textarea = ({input, meta , ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={style.formControl + ' ' + (hasError ? style.error : '')} >
            <textarea  {...input} {...props} />
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const Input = ({input, meta , ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={style.formControl + ' ' + (hasError ? style.error : '')} >
            <input  {...input} {...props} />
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const createField = (component, validators, name, style, placeholder, props = {}, text = '') => (
    <div>
        <Field  component={component} 
                validate={validators} 
                name={name} 
                style = {style} 
                placeholder={placeholder}
                {...props}/> {text}
    </div>
)