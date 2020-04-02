import { getUsers } from '../api/api';
import followApi from '../api/api';

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
                users: state.users.map(u => {
                    if (u.id === action.userId) { return {...u, followed: true}}
                    return u;
                })
            }
        case UNFOLLOW:
            return {...state, users: state.users.map(u => {
                    if (u.id === action.userId) { return { ...u, followed: false }}
                    return u;
                })
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
    return (dispatch) => {
    dispatch(toogleIsFetching(true));
      getUsers(currentPage, pageSize).then(data => {
                dispatch(setCurrentPage(currentPage));
                dispatch(toogleIsFetching(false));
                dispatch(setUsers(data.items));
                dispatch(setTotalUsersCount(data.totalCount));
              });
    }
}

export const followThunk = (userId) => {
    return (dispatch) => {
    dispatch(toogleFollowingProgress(true, userId));
    followApi.followUser(userId)
          .then(data => {
            if(data.resultCode === 0) {
              dispatch(follow(userId));
            }
          dispatch(toogleFollowingProgress(false, userId));
          });
        }
}

export const unfollowThunk = (userId) => {
    return (dispatch) => {
    dispatch(toogleFollowingProgress(true, userId));
    followApi.unfollowUser(userId)
          .then(data => {
            if(data.resultCode === 0) {
              dispatch(unfollow(userId));
            }
          dispatch(toogleFollowingProgress(false, userId));
          });
        }
}

export default usersReducer;