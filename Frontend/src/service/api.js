import axios from 'axios';
// const token =  localStorage.getItem('@creative-code');


const api = axios.create({
 baseURL: 'http://localhost:8081/',
//  headers: { Authorization: `Bearer ${token}` }
});

export default api;