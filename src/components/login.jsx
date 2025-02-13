import axios from "axios";
import { useFormik } from "formik";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";
import loginImg from '../image/5-Career-Counseling-Skills-That-You-Need-to-Develop-in-2022_blog-copy-removebg-preview.png';


export function UserLogin(){


    const [users, setUsers] = useState([{UserId:'', UserName:'', Password:'', Email:'', Mobile:''}]);

    const [cookies, setCookie, removeCookie] = useCookies(['username']);

    let navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            UserId:'',
            Password:''
        },
        onSubmit: (user)=>{
            axios.get(`http://127.0.0.1:5050/get-users`)
            .then(response=>{
                var result = response.data.find(item=> item.UserId===user.UserId);
                if(result){
                    if(result.Password===user.Password){
                        setCookie('username', result.UserName);
                        navigate('/user-dash');
                    } else {
                        alert('Invalid Password');
                    }
                } else {
                    alert('Invalid User Id')
                }
            }) 
        }
    })

    return(
        // <div className="bg-light p-4 m-4 w-25">
        //     <h3>User Login</h3>
        //     <form onSubmit={formik.handleSubmit}>
        //         <dl>
        //             <dt>User Id</dt>
        //             <dd><input type="text" onChange={formik.handleChange} name="UserId"/></dd>
        //             <dt>Password</dt>
        //             <dd><input type="password" onChange={formik.handleChange} name="Password" /></dd>
        //         </dl>
        //         <button type="submit" className="btn btn-warning"> Login </button>
        //         <div className="my-2">
        //         <Link to="/user-register">New User Register</Link>
        //         </div>
        //     </form>
        // </div>
        
        <div className="row main-div">
          <div className="col-6">
            <img src={ loginImg } className='login-img' alt='lmage' />
          </div>
          <div className="col-6">
            <div className="login-form gap-3">
              <h2>Sign In</h2>
              <form className="form-box" onSubmit={formik.handleSubmit}>
                <div className="form-group">
                  <label for="username">Username</label>
                  <input type="text" className="form-control" id="username" placeholder="Enter username
                  " onChange={formik.handleChange}/>
                </div>
                <div className="form-group">
                  <label for="password">Password</label>
                  <input type="password" className="form-control" id="password" placeholder="Enter password
                  " onChange={formik.handleChange}/>
                </div>
                <button type="submit" className="btn btn-primary m-auto">Submit</button>
              </form>
              <div className='form-footer'>
                {/* <span><img src={googleicon} className='googleimg'></img></span> */}
                <p>Don't have an account? <Link to="/user-register">Register Now</Link></p>
              </div>
            </div>
          </div>
        </div>
    )
}