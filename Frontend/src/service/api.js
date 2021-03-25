import axios from 'axios';
const token =  localStorage.getItem('@sistema-rh');


const api = axios.create({
 baseURL: 'http://localhost:8081/',
 headers: { Authorization: `Bearer ${token}` }
});

export default api;