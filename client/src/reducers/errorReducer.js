import {GET_ERRORS, CLEAR_ERRORS} from '../actions/types'

const initialState = {
    msg: {},            //JSON comes from the server
    status: null,       //status comes from the server
    id: null            
}

export default function(state = initialState, action){
    switch(action.type){
        //Display the Errors
        case GET_ERRORS:
            return {
                msg: action.payload.msg,
                status: action.payload.status,
                id: action.payload.id
            }
        //Clear the Errors
        case CLEAR_ERRORS:
            return {
                msg: {},
                status: null,
                id: null
            }
        default:
            return state
    }
}