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
      <ToastContainer />
        <Routes>
          <Route exact path="/home" Component={Home} />
          <Route exact path='/user' Component={UserList} />
          <Route exact path="/user/add" Component={AddUser} />
          <Route exact path="/user/edit/:parameter" Component={UpdateUser} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
