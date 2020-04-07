import React from 'react';
import { reduxForm, Field } from 'redux-form';

let loginStyle = {
    backgroundColor: "rgba(256, 256, 256, 0.5)",
    width: "250px",
    margin: "5px"
}

let buttonStyle = {
    margin: "5px"
}

const LoginForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <div >
                <Field component={'input'} name={'login'} style = {loginStyle} placeholder={'login'}/>
            </div>
            <div>
                <Field component={'input'} name={'password'} style = {loginStyle} placeholder={'password'}/>
            </div>
            <div>
                <Field component={'input'} name={'rememberMe'} type={'checkbox'}/>
            </div>
            <div>
                <button style = {buttonStyle}>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
  })(LoginForm)


const Login = (props) => {

    const onSubmit =  (formData) => {
        console.log(formData);      
    }
    
    return <div>
        <h1>Please, log in</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

export default Login;