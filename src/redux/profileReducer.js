import {setUserProfiler} from '../api/api';


const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    userProfile: null,
    postData: [
        {id: 1, post: 'First post', likesCount: 13},
        {id: 2, post: 'Second post', likesCount: 3},
        {id: 3, post: 'Third post', likesCount: 1},
        ],
    newPostText: 'react.learning'
    }

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST: 
            let newPost = {
                id: 4,
                post: state.newPostText,
                likesCount: 0
            }
            return {...state,
                         newPostText: '',
                        postData: [...state.postData, newPost]};
        
        case UPDATE_NEW_POST_TEXT: 
            return {...state,
                         newPostText: action.newText};
        case SET_USER_PROFILE:
            return {...state, userProfile: action.userProfile};
        
        default:
            return state;
    }
}

export const addPostActionCreator =  () => {
    return { type: ADD_POST }
}

export const updateNewPostActionCreator = (text) => {
    return { type: UPDATE_NEW_POST_TEXT, newText: text }
}

export const setUserProfile = (userProfile) => {return {type: SET_USER_PROFILE, userProfile}}

export const setProfileThunk = (userId) => { return (dispatch) => {
        setUserProfiler(userId)
        .then(data => {
          dispatch(setUserProfile(data));
        });
}} 

export default profileReducer;