import { setAuth } from "../api/api";
import { stopSubmit } from "redux-form";


const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USER_DATA: 
            return {
                ...state,
                ...action.data
            }
        default:
            return state;

    }
}

export const setAuthUserData = (userId, email, login, isAuth) => ({type: SET_USER_DATA, data: {userId, email, login, isAuth}});

export const setAuthThunk = () => {return (dispatch) => {
           
            return setAuth.me().then(data => {
                
            if(data.resultCode === 0) {
                let {id, login, email} = data.data;
                dispatch(setAuthUserData(id, email, login, true));
            }
        });
    }
}

export const loginThunk = (email, password, rememberMe) => (dispatch) => {
   
    setAuth.login(email, password, rememberMe)
    .then(response => {
        if(response.data.resultCode === 0) {
            dispatch(setAuthThunk());
        } else {
            let message = response.data.messages[0];
            dispatch(stopSubmit('login', {_error: message}));
        }
    });
}

export const logoutThunk = () => (dispatch) => {
    setAuth.logout()
    .then(response => {
        if(response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false));
        }
    });
}

export default authReducer;