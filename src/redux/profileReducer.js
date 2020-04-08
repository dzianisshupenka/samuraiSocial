import {setUserProfiler, userStatus} from '../api/api';


const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    userProfile: null,
    postData: [
        {id: 1, post: 'First post', likesCount: 13},
        {id: 2, post: 'Second post', likesCount: 3},
        {id: 3, post: 'Third post', likesCount: 1},
        ],
    status: 'set status'
    }

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST: 
            let newPost = {
                id: 4,
                post: action.newPostItem,
                likesCount: 0
            }
            return {...state,
                        postData: [...state.postData, newPost]};
        
        case SET_USER_PROFILE:
            return {...state, userProfile: action.userProfile};
        case SET_STATUS:
            return {...state, status: action.status}
        
        default:
            return state;
    }
}

export const addPost =  (newPostItem) => { return { type: ADD_POST, newPostItem } }

export const setStatus = (status) => { return {type: SET_STATUS, status: status} }

export const setUserProfile = (userProfile) => { return {type: SET_USER_PROFILE, userProfile} }

export const setProfileThunk = (userId) => { return (dispatch) => {
        setUserProfiler(userId)
        .then(data => {
          dispatch(setUserProfile(data));
        });
}} 

export const getStatusThunk = (userId) => { return (dispatch) => {
        userStatus.getUserStatus(userId)
        .then(response => {
            dispatch(setStatus(response.data));
        });
}} 

export const updateStatusThunk = (status) => { return (dispatch) => {
        userStatus.updateUserStatus(status)
        .then(response => {
            if(response.data.resultCode === 0) {
                dispatch(setStatus(status))
            }
        })
}}

export default profileReducer;