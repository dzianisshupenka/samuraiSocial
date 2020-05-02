import { setAuth, sequrityAPI } from "../api/api";
import { stopSubmit } from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA';
const GET_CAPTCHA_URL = 'GET_CAPTCHA_URL';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null
};

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USER_DATA: 
            return {
                ...state,
                ...action.data
            }
        case GET_CAPTCHA_URL:
            return {
                ...state,
                ...action.data
            }
        default:
            return state;
    }
}

export const setAuthUserData = (userId, email, login, isAuth, captcha) => ({type: SET_USER_DATA, data: {userId, email, login, isAuth, captcha}});

export const getCaptchaUrl = (captchaUrl) => ({type: GET_CAPTCHA_URL, data: {captchaUrl}})

export const setAuthThunk = () => async (dispatch) => {
           
    let data = await setAuth.me();
    if(data.resultCode === 0) {
        let {id, login, email} = data.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
}


export const loginThunk = (email, password, rememberMe, captcha) => async (dispatch) => {
   
    let response = await setAuth.login(email, password, rememberMe, captcha);
    
    if(response.data.resultCode === 0) {
        dispatch(setAuthThunk());
    } else {
        if (response.data.resultCode === 10) {
            dispatch(getCaptchaUrlThunk());
        }
        let message = response.data.messages[0];
        dispatch(stopSubmit('login', {_error: message}));
    }
}

export const getCaptchaUrlThunk = () => async (dispatch) => {
    let response = await sequrityAPI.getCaptchaUrl()
    const captchaUrl = response.data.url;
    dispatch(getCaptchaUrl(captchaUrl));

}

export const logoutThunk = () => async (dispatch) => {
    
    let response = await setAuth.logout();

    if(response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }
}

export default authReducer;