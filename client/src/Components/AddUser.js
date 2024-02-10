import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { DispatchAddUser } from "../redux/Actions";

const AddUser = () => {

const [name, namechange] = useState('');
const [email, emailchange] = useState('');
const [phone, phonechange] = useState('');
const [role, rolechange] = useState('');

//add useDispatch para mapasa ang data sa backend
const dispatch=useDispatch();

//useNavigate after add adto sa path: 127.0.0.1/users
const navigate=useNavigate();

//nag gunit ug data na gikan sa input fields
//functtion para ipasa ang data sa dispatch
const handleSubmitAddUser = (e) => {
    const userobj = {name, email, phone, role};
    e.preventDefault();
    dispatch(DispatchAddUser(userobj));
    console.log("DATA ONCHANGE", userobj);
    navigate('/user')
};


    return (
        <div>
            <div className="card-body d-flex justify-content-center align-items-center">
                <center>
                 <form onSubmit={handleSubmitAddUser} >
                 <div className="card-header">
                 <h1>Add User!</h1>
                 </div>
                 <div className="col-12">
                 <div className="form-group">
                 <h4>Name</h4>
                 <input type="text" value={name} onChange={e=>namechange(e.target.value)} className="form-control">
                 </input>
                 </div>
                        </div>
                        <div className="col-12">
                            <div className="form-group">
                                <h4>Email</h4>
                                <input type="email" value={email} onChange={e=>emailchange(e.target.value)} className="form-control">
                                </input>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="form-group">
                                <h4>Role</h4>
                                <select value={role} onChange={e=>rolechange(e.target.value)} className="form-control">
                                    <option value="Admin">Admin</option>
                                    <option value="Staff">Staff</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <h4>Phone</h4>
                                <input type="text" value={phone} onChange={e=>phonechange(e.target.value)} className="form-control">
                                </input>
                            </div>
                        </div>
                        <div className="card-footer">
                        <br />
                        <Link to={'/user'} className="btn btn-danger">Back</Link>
                        <button className="btn btn-primary mx-2" type="submit">Submit</button>
                        </div>
                        
                        </form>
                        </center>
                        </div>
        </div>
    );
}

export default AddUser;