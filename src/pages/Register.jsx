import React from 'react';
import { useState } from 'react';
import './../css/Register.css';
import API from '../api/api.js';
import { useNavigate  } from 'react-router-dom';
import { setAuthToken } from '../api/api';

export default function Register(){
     const [name, setName] = useState("");
     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");
     const navigate = useNavigate();

     const[ message,setMessage] = useState("");
     const handleSubmit = async (e) =>{
        e.preventDefault();
        try{
                const { response }  = await API.post ('/register',{
                     name:name,
                     email:email,
                     password:password
                     
                 });   
                 const {token,user}= response.data;
                 localStorage.setItem('token', token);
                 localStorage.setItem('user',JSON.stringify(user));
                 
                 setMessage("User created successfully");
                 setAuthToken(token);
                 navigate('/dashboard');
                

            }
            catch(err){
            setMessage("error in creating user");
        } 
     };

     return(
        <div className='from-group'>
                <h2>Create User</h2>
            <form onSubmit={handleSubmit}>
                
                <input type="text" placeholder="Name"  onChange={(e)=>setName(e.target.value)}/>
                <input  type = "email" placeholder = "Email" onChange={(e)=>setEmail()}/>
                <input type = "password" placeholder ="Password" autoComplete = "off" onChange={(e)=>setPassword(e.target.value)}/>
                <button>Create User</button>
            </form>
                <p>{message}</p>
        </div>
     );



}
