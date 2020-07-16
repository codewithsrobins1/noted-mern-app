import {
    USER_LOADING,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAIL
} from "../actions/types";

//Set the Initial State
const initialState = {
    token: localStorage.getItem('token'),   //get the token from localstorage
    isAuthenticated: null,                  //user initially is not authenticated
    isLoading: false,
    user: null
}

export default function(state = initialState, action){
    switch(action.type){
        //Run to see if user is currently loading
        case USER_LOADING:
            return {
                ...state,
                isLoading: true
            }
        //user is now loaded - run to see user properly loaded or not
        case USER_LOADED:
            return{
                ...state,
                isAuthenticated: true,
                isLoading: false,
                user: action.payload
            }
        //user is successfully logged in - Through Signup and Registering
        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS:
            //set the token as the payload
            localStorage.setItem('token', action.payload.token)
            return{
                ...state,
                ...action.payload,  //payload will contain the user and token
                isAuthenticated: true,
                isLoading: false
            }
        //User Successfully Logs Out
        case AUTH_ERROR:
        case LOGIN_FAIL:
        case LOGOUT_SUCCESS:
        case REGISTER_FAIL:
            //Remove the token from local storage
            localStorage.removeItem('token');
            return{
                ...state,
                token: null,   
                user: null,
                isAuthenticated: false,
                isLoading: false
            }
        default:
            return state;
    }
}