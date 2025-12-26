import React from 'react';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import CreateExpense from './pages/CreateExpense';
import Expenses from './pages/Expenses';
import { BrowserRouter,Routes,Route, Navigate } from 'react-router-dom';

export default function App(){
  const token = localStorage.getItem ('token');
  return(
    <BrowserRouter>
    <Routes>
      <Route path ='/'element ={<Login/>}/>
      <Route path ='/register' element ={<Register/>}/>
      <Route path ='/login' element ={<Login/>}/>
      <Route path ='/dashboard' element ={token ? <Dashboard/>:<Navigate to='/login'/>}/>
      <Route path ='/createExpense' element ={token ? <CreateExpense/>:<Navigate to='/login'/>}/>
      <Route path ='/expenses' element ={token ? <Expenses/>:<Navigate to='/login'/>}/>
      </Routes>
      </BrowserRouter>
    )
  
}

