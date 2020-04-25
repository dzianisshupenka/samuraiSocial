import { getUsers } from '../api/api';
import followApi from '../api/api';
import { updateObjectInArray } from '../utils/objectHelper';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USER_COUNT = 'SET_TOTAL_USER_COUNT';
const TOOGLE_IS_FETCHING = 'TOOGLE_IS_FETCHING';
const TOOGLE_IS_FOLOWING_PROGRESS = 'TOOGLE_IS_FOLOWING_PROGRESS';

let initialState = {
    users: [],
    pageSize: 50,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingProgres: []
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: true})
            }
        case UNFOLLOW:
            return {...state, 
                    users: updateObjectInArray(state.users, action.userId, "id", {followed: false})
            }
        case SET_USERS:
            return { ...state, users: action.users }
        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.currentPage }
        case SET_TOTAL_USER_COUNT:
            return { ...state, totalUsersCount: action.totalCount }
        case TOOGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        case TOOGLE_IS_FOLOWING_PROGRESS:
            return{...state, 
                followingProgres: action.followingProgres 
                ? [...state.followingProgres, action.userId]
                : state.followingProgres.filter(id => id !== action.userId)}
        default:
            return state;
        
    }
}

export const follow = (userId) => ({type: FOLLOW, userId});
export const unfollow = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount = (totalCount) => ({type: SET_TOTAL_USER_COUNT, totalCount});
export const toogleIsFetching = (isFetching) => ({type: TOOGLE_IS_FETCHING, isFetching});
export const toogleFollowingProgress = (followingProgres, userId) => ({type: TOOGLE_IS_FOLOWING_PROGRESS, followingProgres, userId});

export const getUsersThunk = (currentPage, pageSize) => { 
    return async (dispatch) => {
    dispatch(toogleIsFetching(true));
    let data = await getUsers(currentPage, pageSize);   
    dispatch(setCurrentPage(currentPage));
    dispatch(toogleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
    }
}
const folowUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(toogleFollowingProgress(true, userId));
    let data = await apiMethod(userId);
        if(data.resultCode === 0) {
            dispatch(actionCreator(userId));
        }
        dispatch(toogleFollowingProgress(false, userId));
    }

export const followThunk = (userId) => {
    return async (dispatch) => {
        folowUnfollowFlow(dispatch, userId, followApi.followUser.bind(followApi), follow);
    }
}

export const unfollowThunk = (userId) => {
    return async (dispatch) => {
        folowUnfollowFlow(dispatch, userId, followApi.unfollowUser.bind(followApi), unfollow);
    }
}

export default usersReducer;