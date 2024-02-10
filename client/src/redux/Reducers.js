import { ADD_USER, DELETE_USER, FAILED_REQUEST, GET_USER_LIST, MAKE_REQUEST } from "./ActionTypes"

//initializer
const initialState ={
    loading: true,
    userlist: [],
    userobj:{},
    errmessage:''
}

//return value dapat true
export const Reducer =(state=initialState, action) => {
    switch(action.type){
        case MAKE_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FAILED_REQUEST:
            return {
                ...state,
                loading:false,
                errmessage: action.payload
            }
        case GET_USER_LIST:
            return{
                ...state,
                loading: false,
                errmessage: '',
                userlist: action.payload,
                userobj:{}
            }
        case DELETE_USER:
            return{
                ...state,
                loading: false,
            }
        case ADD_USER:
            return{
                ...state,
                loading: false 
            }
        default: return state
    }
}