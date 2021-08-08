import React,{useState} from 'react';
import { register } from './actions';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
const Register =()=>{
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
      });
      const { name, email, password, password2 } = formData;
      const onChange = (e) =>{
        setFormData({ ...formData, [e.target.name]: e.target.value });
      }
      
      const onSubmit = async (e) => {
        e.preventDefault();
          register({name, email, password});
        
      };
    return(
        <>
            <h1>Register</h1>
            <h4><Link to="/login">Log in</Link></h4>
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
            type="email"
            placeholder="Email Address"
            name="email"
            value={formData.email}
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
        <input type="submit" className="btn btn-primary" value="Register" />
            </form>
        </>
    );
}

export default Register;