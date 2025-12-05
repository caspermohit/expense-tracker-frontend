import React from 'react';
import { useState } from 'react';
import  API from '../api/api.js';
import { useNavigate } from 'react-router-dom';
import { setAuthToken } from '../api/api';
import { Link } from 'react-router-dom';




export default function Login(){
    const [email, setEmail] = useState("");
    const[password,setPassword] = useState("");
    const navigate = useNavigate();
    
    const handleSubmit = async (e) =>{
        e.preventDefault();
        const { data }  = await API.post ('/login',{email,password});
        localStorage.setItem('token',data.token);
        setAuthToken(data.token);
        navigate('/dashboard');

     }

 return(
    <div className='login-group'>
    <h2>Login</h2>
    <form onSubmit = {handleSubmit}>
        <input type = 'email' placeholder = 'Email' onChange={(e)=>setEmail(e.target.value)}/>
        <input type = 'password' placeholder = 'Password' onChange={(e)=>setPassword(e.target.value)}/>
        <button type = 'submit' classname = 'form-button'>Login</button>
         <Link to = '/register'>dont have an account? Register</Link>

    </form>

    </div>
 )

}