//GIIMPORT ANG ACTION-TYPES
import { FAILED_REQUEST, GET_USER_LIST, MAKE_REQUEST } from "./ActionTypes"

//NAG FETCH UG REQUEST
export const makeRequest =()=>{
    return{
        type: MAKE_REQUEST
        
    } 
} 

//FAILED ANG REQUEST
export const failRequest =(err)=>{
    return{
        type: FAILED_REQUEST,
        payload: err
    }
}

//MAGFETCH UG DATA AS SUCCESS
export const getUserList =(data)=>{
    return{
        type: GET_USER_LIST,
        payload: data
    }
}