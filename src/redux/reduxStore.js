import { createStore, combineReducers, applyMiddleware } from "redux";
import profileReducer from "./profileReducer";
import dialogReducer from "./dialogReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import thunkMiddleWare from "redux-thunk";
import { reducer as formReducer } from 'redux-form';

let reducers = combineReducers ({
    profilePage: profileReducer,
    messagePage: dialogReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleWare));

window.store = store;

export default store;