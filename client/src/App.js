import logo from './logo.svg';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import AddUser from './Components/AddUser';
import UserList from './Components/UserList';
import UpdateUser from './Components/UpdateUser';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">
      <Router>
        <div className='header px-3 py-3'>
          <Link to={'/'} ><button className='btn btn-primary'>Home</button></Link>
          <Link to={'/user'}>
            <button class="btn btn-primary">
              User
            </button>
          </Link>
          <Link to={'/user/add'}>
            <button className='btn btn-primary'>
              Add User
            </button>
          </Link>
          <Link to={'/user/edit/:parameter'}>
            <button className='btn btn-primary'>
              Edit
            </button>
          </Link>
        </div>
        <ToastContainer />
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route exact path='/user' element={<UserList />} />
          <Route exact path="/user/add" element={<AddUser />} />
          <Route exact path="/user/edit/:parameter" element={<UpdateUser />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
