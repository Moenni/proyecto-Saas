import axios from 'axios';
const api = axios.create({
  baseURL: 'https://fakeapi.local'
});

//funcion para Login
export const loginUser= (credentials)=> api.post('/login',credentials);

//funcion para obtener datos del usuario
export const getUsers=() => api.get('/users');