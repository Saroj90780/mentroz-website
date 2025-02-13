import './App.css';
import { UserLogin } from './components/login.jsx';
import { AdminUsers } from './components/admin-users.jsx';
import {  Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="container-fluid">
      <div className="app">
        {/* <div className="row main-div">
          <div className="col-6">
            <img src={ loginImg } className='login-img' alt='lmage' />
          </div>
          <div className="col-6">
            <div className="login-form gap-3">
              <h2>Sign In</h2>
              <div className="form-box">
                <div className="form-group">
                  <label for="username">Username</label>
                  <input type="text" className="form-control" id="username" placeholder="Enter username
                  "/>
                </div>
                <div className="form-group">
                  <label for="password">Password</label>
                  <input type="password" className="form-control" id="password" placeholder="Enter password
                  "/>
                </div>
                <button type="submit" className="btn btn-primary m-auto">Submit</button>
              </div>
              <div className='form-footer'>
                <span><img src={googleicon} className='googleimg'></img></span>
                <p>Don't have an account? <a href="#">Sign up</a></p>
              </div>
            </div>
          </div>
        </div> */}

        {/* <BrowserRouter> */}
          <Routes>
            <Route path='/Userlogin' element={ <UserLogin /> } />
            <Route path='/' element={ <AdminUsers /> } />
          </Routes>
        {/* </BrowserRouter> */}
      </div>
    </div>
  );
}

export default App;
