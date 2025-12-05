import React from 'react';
import {useEffect , useState} from 'react';

export default function Dashboard(){
    const [data,setData] = useState(null);
    const token = localStorage.getItem('token');

    
   useEffect(() => {
  (async () => {
    const response = await fetch("http://localhost:8000/api/dashboard", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const result = await response.json();
    console.log(result);
    setData(result);
  })();
}, []);
    if (!data) {
        return <div>Loading...</div>;

    }
    
    return(
        <div>
            <h2>Dashboard</h2>
            <p>Total Expenses : {data.totalExpenses}</p>
            <p>Total Income : {data.totalIncome}</p>
            <p>Monthly Expenses : {data.monthlyExpenses}</p>
            <p>Monthly Income : {data.monthlyIncome}</p>
            <p>Monthly Savings : {data.monthlySavings}</p>
            <p>Recent Expenses :{JSON.stringify(data.recentExpenses)}</p>
        </div>
    )


    };

