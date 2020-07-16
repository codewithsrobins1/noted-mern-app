import axios from 'axios';
import {GET_NOTES, ADD_NOTE, DELETE_NOTE, NOTES_LOADING} from './types'
import {tokenConfig} from './authAction';
import {returnErrors} from './errorActions';

//Set the State of Loading
export const setNotesLoading = () => {
    return {
        type: NOTES_LOADING
    };
}

//GET THE NOTES FROM DB
export const getNotes = () => dispatch => {
    //Set Loading to be True when making request to backend - 
    dispatch(setNotesLoading())

    //Use axios for GET request to the DB
    axios
        .get('/api/notes')
        .then(res => 
            dispatch({
                type: GET_NOTES,
                payload: res.data   //the data from the DB
            }))
        .catch(err =>
            //Return Error Message and Status
            dispatch(returnErrors(err.response.data, err.response.status))    
        )       
}

//ADD A NOTE TO THE DB
export const addNote = note => (dispatch, getState) => {    //send token along from state
    axios
        .post('/api/notes', note, tokenConfig(getState))    //token request attached in the header
        .then (res => 
            dispatch({
                type: ADD_NOTE,
                payload: res.data   //returns the new note added
            }))
        .catch(err => 
            //Return Error Message and Status
            dispatch(returnErrors(err.response.data, err.response.status))
        )
}


// //EDIT A NOTE - RETURN NEW NOTE TO THE DB
// export const editNote = note => (dispatch, getState) => {
    
// }

//DELETE THE NOTE FROM THE DB
export const deleteNote = (id) => (dispatch, getState) => {     //send token along from state
    axios
        .delete(`/api/items/${id}`, tokenConfig(getState))      //token request attached in the header
        .then(res => 
            dispatch({
                type: DELETE_NOTE,
                payload: id         
            }))

}