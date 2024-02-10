import { connect } from 'react-redux';
import { FetchUserList, RemoveUser, } from "../redux/Actions";
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const UserList = (props) => {
    console.log("DATA SA CHOI", props);

    useEffect(() => {
        props.loaduser();
    }, [])

    const handleDelete =(code) =>{
        if(window.confirm("DO YOU WANT TO DELETE?")){
            props.removeuser(code);
            props.loaduser();
            toast.success('User has been deleted Successfully!'); 
        }
    }


    return (
        //argument kung galoading ba or wala 
        props.user.loading ? <div><h1>Loading...paghulat!</h1></div> : props.user.errmessage ? <div>{props.user.errmessage}</div>
            :
            <div>
            <ToastContainer />
      
                <div className="col-8 text mx-auto">
               
                    <div className="card-header userlist"></div>
                    <h1 className='userHeader'>User List!</h1>
                    <div className="buttonAdd">
                    <Link to={'/user/add'} className="btn btn-secondary">Add User</Link>
                    </div>
                    <br />
                
                    <table className="table table-bordered text-align-center">
                        <thead>
                            <tr>
                                <td>Id</td>
                                <td>Name</td>
                                <td>Email</td>
                                <td>Phone</td>
                                <td>Role</td>
                                <td>Action</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                props.user.userlist && props.user.userlist.map((item, index) =>
                                    <tr key={index}>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.phone}</td>
                                        <td>{item.role}</td>
                                        <td className=''>

                                            <Link to={'/user/edit/'+item.id} className="btn btn-warning">Edit</Link>

                                            <button onClick={()=>{handleDelete(item.id)}} className="btn btn-danger">Delete</button>
                                        
                                        </td>
                                    </tr>

                                )
                            }
                        </tbody>

                    </table>
                </div>
            </div>
    );
}

//magbirag data ipasa sa mga components
const mapToStateToProps = (state) => {
    return {
        user: state.user
    }
}

//maglabayg data sa serverside
const mapDispatchToProps = (dispatch) => {
    return {
        loaduser: () => dispatch(FetchUserList()),
        removeuser: (code) =>dispatch(RemoveUser(code))
    }
}

export default connect(mapToStateToProps, mapDispatchToProps)(UserList);