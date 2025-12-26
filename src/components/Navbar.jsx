import React from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import '../css/Navbar.css';

export default function Navbar() {
    const navigate = useNavigate();
       const user = JSON.parse(localStorage.getItem('user'));
    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/');
    }
    return (
        <div className='navbar'>
            <div className='logo'>
                <Link to='/'>Expense Tracker</Link>
            </div>
            <div className='links'>
                <Link to='/dashboard'>Dashboard</Link>
                <Link to='/expenses'>Expenses</Link>

               

{localStorage.getItem('token') ? (
  <>
    <p>Welcome, {user?.name}</p>
    <button className='logout-button' onClick={handleLogout}>Logout</button>
  </>
) : (
  <Link to="/login">Login</Link>
)}
               
            </div>
        </div>
        
    )
}