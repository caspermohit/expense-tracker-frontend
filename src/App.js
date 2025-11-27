
import './App.css';
import { useState , useEffect } from 'react';
import axios from 'axios';
import CreateUserPage from './pages/CreateUser';


function App() {
  
  const [message, setMessage] = useState("");
 useEffect(() => {
  axios.get(`${process.env.REACT_APP_API_URL}/expenses`)
  .then((res) =>setMessage(res.data.message))
  .catch((err) => console.log(err));
 },[]);
  return (
   <div style={{textAlign:'center' , marginTop:'50px'}}>
    <h1>Expense Tracker</h1>
    <CreateUserPage/>

   </div>
  );
}

export default App;
