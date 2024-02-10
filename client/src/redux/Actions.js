import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


//GIIMPORT ANG ACTION-TYPES
import { ADD_USER, DELETE_USER, FAILED_REQUEST, GET_USER_LIST, MAKE_REQUEST } from "./ActionTypes"

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


//MAGDELETE UG USER
export const deleteUser =()=>{
    return{
        type: DELETE_USER
        
    } 
} 


//MAG ADD UG USER
export const addUser =()=>{
    return{
        type: ADD_USER
    }
}


//DISPATCH FUNCTION PARAMAGFETCH UG DATA!
export const FetchUserList =()=> {
    return (dispatch) => {
        // setTimeout(() => {
    
            dispatch(makeRequest());
            axios.get('http://localhost:8000/user')
            .then(res=>{
                const userlist=res.data;
                dispatch(getUserList(userlist));
            }).catch(err=>{
                dispatch(failRequest(err.message))
            })
        // }, 2000);

    }
}

//DISPATCH FUNCTION PARA MAG DELETE UG USER
export const RemoveUser =(code)=> {
    return (dispatch) => {
        // setTimeout(() => {
    
            dispatch(makeRequest());
            axios.delete('http://localhost:8000/user/' + code)
            .then(res=>{
                dispatch(deleteUser());
                toast.success('User deleted successfully!');
            }).catch(err=>{
                dispatch(failRequest(err.message))
            })
        // }, 2000);

    }
}


//DISPATCH FUNCTION PARA MAG DELETE UG USER
export const DispatchAddUser =(data)=> {
    return (dispatch) => {
        // setTimeout(() => {
    
            dispatch(makeRequest());
            axios.post('http://localhost:8000/user/',data)
            .then(res=>{
                dispatch(addUser());
                toast.success('User Added successfully!');
            }).catch(err=>{
                dispatch(failRequest(err.message))
            })
        // }, 2000);

    }
}



