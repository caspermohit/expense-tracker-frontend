import axios from 'axios';
 const API = axios.create({
    baseURL: 'http://localhost:8000/api',
    headers:{
        'Content-Type': 'application/json',
        'Accept':'application/json',
    },


 });
 export function  setAuthToken(token){
    if (token){
        API.defaults.headers.common['Authorization']= `Bearer ${token}`;
        
    }
    else{
        API.defaults.headers.common['Authorization']= null;
    }
 }
 export default API;

 
 
