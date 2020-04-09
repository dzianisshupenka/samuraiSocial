import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Input } from '../common/controls/FormControl';
import { required, maxLengthCreator } from '../../utils/validators/validator';
import { connect } from 'react-redux';
import { loginThunk } from './../../redux/authReducer';
import { Redirect } from 'react-router-dom';

let loginStyle = {
    backgroundColor: "rgba(256, 256, 256, 0.5)",
    width: "250px",
    margin: "5px"
}

let buttonStyle = {
    margin: "5px"
}

const maxLength = maxLengthCreator(25);

const LoginForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <div >
                <Field component={Input} validate={[required, maxLength]} name={'login'} style = {loginStyle} placeholder={'login'}/>
            </div>
            <div>
                <Field component={Input} validate={[required, maxLength]} name={'password'} style = {loginStyle} placeholder={'password'}/>
            </div>
            <div>
                <Field component={Input} name={'rememberMe'} type={'checkbox'}/>
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
        props.loginThunk(formData.login, formData.password, formData.rememberMe);      
    }

    if(props.isAuth)  {
        return <Redirect to='/profile' />
    }
    
    return <div>
        <h1>Please, log in</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

const mapStateToProps = (state) => ({isAuth : state.auth.isAuth})

export default connect(mapStateToProps, {loginThunk})(Login);