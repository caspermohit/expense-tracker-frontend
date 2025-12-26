import React from 'react';
import Navbar from '../components/Navbar';
import { use ,useEffect, useState } from 'react';
import API from '../api/api.js';
import '../css/Expenses.css';


export default function Expenses(){
    const [expenses,setExpenses] = useState([]);
    const token = localStorage.getItem('token');
    
   useEffect(() => {
     const fetchExpenses = async () => {
       try {
         const response = await fetch("http://localhost:8000/api/dashboard", {
           headers: {
             Authorization: `Bearer ${token}`,
           },
         });
   
         if (!response.ok) {
           throw new Error("API Error");
         }
   
         const result = await response.json();
         setExpenses(result);
         console.log(result);
       } catch (error) {
         console.error("Expenses error:", error);
       }
     };

     fetchExpenses();
   }, []);
   



    return(
        <>
        <Navbar/>
         <div>
          <br/>
          <br/>
        <h2>Recent Expenses</h2>
        <ul class="breadcrumb">
                <li><a href="/dashboard">Home </a></li>
                 <li><a href="/expenses">Expenses</a></li>
                </ul>
        <button  className='create' onClick={()=>{window.location.href="/createExpense"}}>Create Expense</button>

        <div className='expense-card'style={{backgroundColor:"#b9e3eaff"}}>
            <div className="expense-content" >
              <div style={{ fontWeight: 'bold' }}>Title</div>
              <div style={{ fontWeight: 'bold' }}>Description</div>
              <div style={{ fontWeight: 'bold' }}>Amount</div>
              <div style={{ fontWeight: 'bold' }}>Type</div>
              <div style={{ fontWeight: 'bold' }}>Category</div>
            </div>
          </div>

        {expenses?.recentExpenses?.length > 0 ? (
          expenses.recentExpenses.map((expense) => (
            <div className='expense-card'>
            <div key={expense.id} className="expense-content">
              <div>{expense.expense_name}</div>
              <div>{expense.description}</div>
              <div> {expense.expense_amount}</div>
            <div style={{ color: expense.expense_type === 'Expense' ? 'red' : 'green' }}>
                 {expense.expense_type}
            </div>
              <div>{expense.expense_category}</div>
            </div>
            </div>
          ))
        ) : (
          <p>No recent expenses found.</p>
        )}
      </div>
        </>
    )
}
   