import React,{useState} from 'react';
import { login,logout } from './actions';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import axios from 'axios';
const Login =()=>{
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
      });
      const { name,password} = formData;
      const onChange = (e) =>{
        setFormData({ ...formData, [e.target.name]: e.target.value });
      }
      
      const onSubmit = async (e) => {
        e.preventDefault();
         login({name,password});
        
      };

      const getUsers =(e)=>{
        e.preventDefault();
        axios.get(`api/auth/user/registered`)
        .then(response=>{
          console.log(response);
        })
        .catch(err=>{
          console.log(err);
        })
      }

      const logoutStorage = (e) => {
        e.preventDefault();
         logout();
        
      };

    return(
        <>
            <h1>Login</h1>
            <h4><Link to="/register">Sign Up</Link></h4>
            <a onClick={logoutStorage}>logout</a>
            <form onSubmit={onSubmit}>
            <div className="form-group">
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={onChange}
          />
        </div>
        
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={onChange}
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Login" />
            </form>
            <div>Get All users</div>
            <button onClick={getUsers}>Get users</button>
        </>
    );
}

export default Login;