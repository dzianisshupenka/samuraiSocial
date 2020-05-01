import {setUserProfiler, userStatus} from '../api/api';
import { stopSubmit } from 'redux-form';


const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const UPDATE_PHOTO_SUCCES = 'UPDATE_PHOTO_SUCCES';

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
            return {...state, status: action.status};
        case UPDATE_PHOTO_SUCCES:
            return{...state, userProfile: {...state.userProfile, photos: action.photo}}
        
        default:
            return state;
    }
}

export const addPost =  (newPostItem) => { return { type: ADD_POST, newPostItem } }

export const setStatus = (status) => { return {type: SET_STATUS, status: status} }

export const setUserProfile = (userProfile) => { return {type: SET_USER_PROFILE, userProfile} }

export const updatePhotoSucces = (photo) => { return {type: UPDATE_PHOTO_SUCCES, photo} }

export const setProfileThunk = (userId) => async (dispatch) => {
        let data = await setUserProfiler(userId);

        dispatch(setUserProfile(data));
}

export const savePhotoThunk = (photo) => async (dispatch) => {
    let data = await userStatus.uploadProfilePhoto(photo);

    dispatch(updatePhotoSucces(data.data.data.photos))
}

export const saveProfileThunk = (profileData) => async (dispatch, getState) => {
    const userId = getState().auth.userId;
    let data = await userStatus.saveProfileData(profileData);
    if (data.data.resultCode === 0) {
        dispatch(setProfileThunk(userId))
    } else {
        dispatch(stopSubmit('editProfile', {_error: data.data.messages[0]}))
        return Promise.reject(data.data.messages[0]);
    }
    
}

export const getStatusThunk = (userId) => async (dispatch) => {
        let response= await userStatus.getUserStatus(userId);
        
        dispatch(setStatus(response.data));
}

export const updateStatusThunk = (status) => async (dispatch) => {
        let response = await userStatus.updateUserStatus(status);
    
        if(response.data.resultCode === 0) {
            dispatch(setStatus(status))
        }       
}

export default profileReducer;