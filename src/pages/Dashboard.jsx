import React from 'react';
import {useEffect , useState} from 'react';
import '../css/Dashboard.css';
import ExpensePieChart from '../components/ExpensePieChart';

export default function Dashboard(){
    const [Expense,setExpense] = useState([]);
    const [data,setData] = useState(null);
    const token = localStorage.getItem('token');

    
 useEffect(() => {
  const fetchDashboard = async () => {
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
      setData(result);
      console.log("Dashboard data:", result);
    } catch (error) {
      console.error("Dashboard error:", error);
    }
  };

  fetchDashboard();
}, []);
    if (!data) {
        return <div className='loading'>
            Loading...
        </div>;

    }
    
    return(
      <>
      
      <h2>Dashboard</h2>
      
        <div className = 'dashboard'>
            
            <div>
              <h6>Recent Expenses</h6>
             <p>{data.totalExpenses}</p>
               </div>
            <div>
              <h6>Total Income</h6>
             <p>{data.totalIncome}</p>
               </div>
            <div>
              <h6>Monthly Expenses</h6>
             <p>{data.monthlyExpenses}</p>
               </div>
            <div>
              <h6>Monthly Income</h6>
             <p>{data.monthlyIncome}</p>
               </div>
            <div>
              <h6>Monthly Savings</h6>
             <p>{data.monthlySavings}</p>
               </div>
            
        </div>

       
        <h2>Recent Expenses</h2>
        <div className='card'>
      <div className='card1'>
         <h4>expense by category</h4>
      
      <div className='card-container'>
       
      <div className='pie-chart'>
        <ExpensePieChart data={data} />

      </div>
      </div>
</div>
<div className='card2'>
  <h4>Expense by Month</h4>
  <div className='bar-graph'>
    <div>

    </div>
    
    </div>
</div>
</div>
        </>
    )


    };

