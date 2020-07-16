import {
    GET_NOTES,
    ADD_NOTE,
    DELETE_NOTE,
    NOTES_LOADING
} from '../actions/types'

//Set the Initial State
const initialState = {
    items: [],
    loading: false
};

export default function(state = initialState, action){
    switch(action.type){
        case GET_NOTES:
            return{
                ...state,
                notes: action.payload,
                loading: false
            }
        case ADD_NOTE:{
            return{
                ...state,
                notes: [action.payload, ...state.notes] //add the new item to the state
            }
        }
        case DELETE_NOTE:
            return{
                ...state,
                notes: state.items.filter(item => item._id !== action.payload)  //return the items that do not match the id
            }
        case NOTES_LOADING:
            return{
                ...state,
                loading: true
            }
        default:
            return state;
    }
}