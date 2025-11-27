import React from 'react';
import { useState } from 'react';
import  { CreateUser } from '../api/api';

export default function CreateUserPage(){
     const [form , setForm] = useState({
        name:"",
        email:"",
        password:"",
        
    });
     const[ message,setMessage] = useState("");
     const handleSubmit = async (e) =>{
        e.preventdefault();
        try{
            const res = await CreateUser(form);
            setMessage(res.data.message);
            
        }
        catch(err){
            setMessage("error in creating user");
        } 
     };

     return(
        <div>
            <h2>Create User</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" onChange={(e)=>setForm({...form,name:e.target.value})}/>
                <input  type = "email" placeholder = "Email" onChange={(e)=>setForm({...form,email:e.target.value})}/>
                <input type = "password" placeholder ="Password" onChange={(e)=>setForm({...form,password:e.target.value})}/>
                <button type="submit">Submit</button>
            </form>
                <p>{message}</p>
        </div>
     );



}
