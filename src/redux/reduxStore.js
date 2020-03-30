import { createStore, combineReducers } from "redux";
import profileReducer from "./profileReducer";
import dialogReducer from "./dialogReducer";
import usersReducer from "./usersReducer";

let reducers = combineReducers ({
    profilePage: profileReducer,
    messagePage: dialogReducer,
    usersPage: usersReducer
})

let store = createStore(reducers);

window.store = store;

export default store;