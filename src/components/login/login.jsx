import React from 'react';
import { reduxForm } from 'redux-form';
import { Input, createField } from '../common/controls/FormControl';
import { required, maxLengthCreator } from '../../utils/validators/validator';
import { connect } from 'react-redux';
import { loginThunk } from './../../redux/authReducer';
import { Redirect } from 'react-router-dom';
import style from './../../components/common/controls/FormControl.module.css';
import profile from './../Profile/MyPosts/ProfileInfo/ProfileInfo.module.css';


let loginStyle = {
    backgroundColor: "rgba(256, 256, 256, 0.5)",
    width: "250px",
    margin: "5px"
}

let captchaStyle = {
    width: "150px"
}

const maxLength = maxLengthCreator(25);

const LoginForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            {createField(Input, [required, maxLength], 'login', loginStyle, 'login')}
            {createField(Input, [required, maxLength], 'password', loginStyle, 'password')}
            {createField(Input, null, 'rememberMe', null, null, {type: "checkbox"}, 'remember me')}
            {props.error && <div className={style.commonError}>
                {props.error}
            </div>}
            {props.captchaUrl && <img style={captchaStyle} alt='captcha' src={props.captchaUrl}/>}
            {props.captchaUrl && createField(Input, [required], 'captcha', null, 'enter your captcha')}
            <div>
                <button style = {profile.editButton}>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
  })(LoginForm)


const Login = (props) => {

    const onSubmit =  (formData) => {
        props.loginThunk(formData.login, formData.password, formData.rememberMe, formData.captcha);      
    }

    if(props.isAuth)  {
        return <Redirect to='/profile' />
    }
    
    return <div>
        <h1>Please, log in</h1>
        <LoginReduxForm captchaUrl={props.captchaUrl} onSubmit={onSubmit}/>
    </div>
}

const mapStateToProps = (state) => ({isAuth : state.auth.isAuth,
                                     captchaUrl: state.auth.captchaUrl})

export default connect(mapStateToProps, {loginThunk})(Login);