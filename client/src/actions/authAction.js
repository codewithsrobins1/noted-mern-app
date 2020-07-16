import axios from 'axios';
import {returnErrors} from './errorActions'


import {
    USER_LOADING,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAIL
} from "./types"


//LOGIN USER
export const login = ({email, password}) => dispatch => {
    //Set the Content Type in the Header
    const config = {
        headers: {
            'Content-Type': 'application/json'      //indicate the media type of the resource
        },
    }

    //Request Body - Contains the Email and Password
    const body = JSON.stringify({ email, password })

    //Request to Server -- Passing along the body that contains the data -- config contains the header info
    axios.post('/api/auth', body, config)
        .then(res => dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data       //endpoint and token get sent to reducer
        }))
        .catch(err => {
            //Return Error Message -- Status -- Message
            dispatch(returnErrors(err.response.data, err.response.status, 'LOGIN_FAIL'));
            dispatch({
                type: LOGIN_FAIL
            })
        })
}

//LOGOUT USER
export const logout = () => {
    return {
        type: LOGOUT_SUCCESS
    }
}


//CHECK USER FOR TOKEN AND LOAD
export const loadUser = () => (dispatch, getState) => {     //send token along from state
    //User Loading
    dispatch({
        type: USER_LOADING
    })

    //FETCH The User -- Pass the Token
    axios.get('/api/auth/user', tokenConfig(getState))
        .then(res => dispatch({
            type: USER_LOADED,
            payload: res.data          //{token, user{name: , password: }}
        }))
        .catch(err => {
            //Return Error Message -- Status -- Message
            dispatch(returnErrors(err.response.data,  err.response.status));
            dispatch({
                type: AUTH_ERROR
            });
        });
}

//REGISTER USER -- PASS OBJECT WITH NAME AND EMAIL
export const register = ({name, email, password}) => dispatch => {
    //Need to Set the Content Type
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    }

    //Request Body
    const body = JSON.stringify({name, email, password})

    //Request to Server -- Passing along the body which contains the data -- config contains header info
    axios.post('/api/users', body, config)
        .then(res => dispatch ({
            type: REGISTER_SUCCESS,     //registration went okay
            payload: res.data           //endpoint and token get sent to the reducer
        }))
        .catch(err => {
            //Return Error Message -- Status -- Message
            dispatch(returnErrors(err.response.data, err.response.status))
            dispatch({
                type: REGISTER_FAIL
            })
        })
}









