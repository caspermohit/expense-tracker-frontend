import React from 'react';
import { useState } from 'react';
import './../css/Register.css';
import API from '../api/api.js';
import { useNavigate } from 'react-router-dom';
import { setAuthToken } from '../api/api';

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await API.post('/register', { name, email, password });

      const token = response.data.token;

      localStorage.setItem('token', token);
      setAuthToken(token);

      navigate("/dashboard");
    } 
    catch (err) {
      console.log("REGISTER ERROR:", err.response?.data);
      setMessage("Error creating user");
    }
  };

  return (
    <div className='from-group'>
      <h2>Create User</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" onChange={(e)=>setName(e.target.value)} />
        <input type="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} />
        <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} autoComplete="off" />
        <button>Create User</button>
      </form>

      <p>{message}</p>
    </div>
  );
}