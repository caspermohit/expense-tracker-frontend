import axios from 'axios';
 const axiosClient = axios.create({
    baseURL: 'http://localhost:8000/api',
    headers:{
        'Content-Type': 'application/json',
    },

 });
 axiosClient.interceptors.request.use( (config) =>{
    const token = localStorage.getItem('token');
    if(token){
        config.headers.Authorization =  `Bearer ${token}`;
        
    }
    return config;
       
 }
 );

 export const CreateUser =(data)=>{
     return axiosClient.post('/register',data);   
 }
 export const CreateExpense =(data)=>{
    return axiosClient.post('/expenses',data);
 }
  export const Dashboard =()=>{
    return axiosClient.get('/dashboard');
}
export const Login =(data) =>{
    return axiosClient.post('/login',data);
}
 
 export default axiosClient;