import React, { use } from 'react';
import API from '../api/api.js';
import { useState  } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/CreateExpense.css';
import Navbar from '../components/Navbar';



export default function CreateExpense(){
    const[title,setTitle] = useState("");
    const[amount,setAmount] = useState("");
    const[type,setType] = useState("");
    const[description,setDescription] = useState("");
    const[category,setCategory] = useState("");
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
     
    const handleSubmit = async(e)=>{
        e.preventDefault();
        const response = await fetch("http://localhost:8000/api/expenses", {       

     method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
         expense_amount:amount,
            expense_name:title,
            expense_type:type,
            description:description,
            expense_category:category
      }),
    });
        
        navigate('/dashboard');
    };
    
     return(
        <div>
            <Navbar/>
            <br/>
            <br/>
            
            <h2>Create Expense</h2>
            <ul class="breadcrumb">
                <li><a href="/dashboard">Home</a></li>
                 <li><a href="/expenses">Expenses</a></li>
                 <li><a href="/createExpense">Create Expense</a></li>
                </ul>
            
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Title" onChange={(e)=>setTitle(e.target.value)}/>
                <input type="number" placeholder="Amount" onChange={(e)=>setAmount(e.target.value)}/>
                 {/* <input type="text" placeholder="Type" onChange={(e)=>setType(e.target.value)}/> */}
                 <select type= "text" id="expense_type" onChange={(e)=>setType(e.target.value)}>
                     <option value="">--Select Type--</option>
                     <option value="Expense">Expense</option>
                    <option value="Income">Income</option>

                   
                </select>
                
                <input type="text" placeholder="Description" onChange={(e)=>setDescription(e.target.value)}/>
                {/* <input type="text" placeholder="Category" onChange={(e)=>setCategory(e.target.value)}/> */}
                <select type = "text" id="category" onChange={(e)=>setCategory(e.target.value)}>
                    <option value="">--Select Category--</option>
                    <option value="Food">Food</option>
                    <option value="Clothes">Clothes</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Transportation">Transportation</option>
                    <option value="House">House</option>
                    <option value="Health">Health</option>
                    <option value="Education">Education</option>
                    <option value="Others">Others</option>
                </select>
                <button  className='create-button' type="submit">Create Expense</button>
                </form>
        </div>
     );

}
