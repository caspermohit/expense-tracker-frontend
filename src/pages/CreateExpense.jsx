import React, { use } from 'react';
import API from '../api/api.js';
import { useState  } from 'react';
import { useNavigate } from 'react-router-dom';



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
            category:category
      }),
    });
        const data = await response.json();
        navigate('/dashboard');
    };
    
     return(
        <div>
            <h2>Create Expense</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Title" onChange={(e)=>setTitle(e.target.value)}/>
                <input type="number" placeholder="Amount" onChange={(e)=>setAmount(e.target.value)}/>
                <input type="text" placeholder="Type" onChange={(e)=>setType(e.target.value)}/>
                <input type="text" placeholder="Description" onChange={(e)=>setDescription(e.target.value)}/>
                <input
                      list="expenseCategories"
                      placeholder="Select or type category" onChange = {(e)=>setCategory(e.target.value)}/>
                      
                     <datalist id="expenseCategories">
                     <option value="Food" />
                     <option value="Travel" />
                    <option value="Shopping" />
                     <option value="Rent" />
                     <option value="Bills" />
                     <option value="Groceries" />
                    <option value="Entertainment" />
                    <option value="Medical" />
                    <option value="Education" />
                     <option value="Other" />

      </datalist>

                <button type="submit">Create Expense</button>
                </form>
        </div>
     );

}
