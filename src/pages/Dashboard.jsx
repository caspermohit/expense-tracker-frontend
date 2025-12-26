import React from 'react';
import {useEffect , useState} from 'react';
import '../css/Dashboard.css';
import ExpensePieChart from '../components/ExpensePieChart';
import Navbar from '../components/Navbar';
import MonthlyBarChart from '../components/MonthlyBarChart';  





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
      console.log(result);
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
      <Navbar/>
      <br/>
      <br/>
      
      <h2>Dashboard</h2>

      
        <div className = 'dashboard'>
            
            <div className='dashboard-card-left'>
           
                   <h6>Total</h6>
              
           
             <div className='dashboard-card-1'>
               <div>
                <label>TotalExpenses:</label> 
                <label>{data.totalExpenses}</label>
                </div>

              <div> <label>Total Income:</label>
              <label>{data.totalIncome}</label>
              </div>
             
              <div>
                 <label>Total Savings:</label>
                <label>{data.totalSavings}</label>
                </div>
             </div>

              
            </div>
            <div className='dashboard-card-right'>
           
            <h6>This Month</h6>
          
             <div className='dashboard-card-2'>
              <div><label> Monthly Income:</label>
            <label>{data.monthlyIncome}</label>
             </div>
            
             <div> <label>  Monthly Expenses:</label>
            <label>{data.monthlyExpenses}</label> 
             </div>
             
             <div><label> Monthly Savings:</label>
             <label>{data.monthlySavings}</label>
             </div>
             </div>
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
      <MonthlyBarChart monthlyData={data.monthlyChart} />
    </div>
    
    </div>
</div>
</div>
        </>
    )


    };

