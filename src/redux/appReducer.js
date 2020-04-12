import { setAuthThunk } from "./authReducer";

const INITIALIZE_SUCCESS = 'INITIALIZE_SUCCESS';

let initialState = {
    initialize: false
}

const appReducer = (state = initialState, action) => {
    switch(action.type) {
        case INITIALIZE_SUCCESS:
            return {
                ...state,
                initialize: true
            }
        default :
        return state;
    }
}

export const initializeSuccess = () => ({type: INITIALIZE_SUCCESS});

export const initializeThunk = () => (dispatch) => {
    let promise = dispatch(setAuthThunk());
    promise.then(() => {
        dispatch(initializeSuccess());
    })
}

export default appReducer;