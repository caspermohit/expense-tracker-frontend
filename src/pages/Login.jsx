import React from 'react';
import { useState } from 'react';
import  API from '../api/api.js';
import { useNavigate } from 'react-router-dom';
import { setAuthToken } from '../api/api';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';



export default function Login(){
    const [email, setEmail] = useState("");
    const[password,setPassword] = useState("");
    const [message,setMessage] = useState("");
    const navigate = useNavigate();
    
    const handleSubmit = async (e) =>{
         
        try{
            e.preventDefault();
        const { data }  = await API.post ('/login',{email,password});
        localStorage.setItem('token',data.token);
        setAuthToken(data.token);
        navigate('/dashboard');

        }
        catch(err){
            
            setMessage("Invalid email or password");
            
        }

     }

 return(
  
  <>
  <Navbar/>
  <br/>
   <br/>
    <div className='login-group'>
    <h2>Login</h2>
    <h3 style={{color:"red",marginTop:"10px",textAlign:"center"}}>{message}</h3>
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}  
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)} />

      <button type="submit">Login</button>
    </form>
    

    </div>
    </>
 )

}