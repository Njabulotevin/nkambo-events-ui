import axios, { AxiosInstance } from 'axios';

export const apiClient : AxiosInstance = axios.create({
  baseURL: 'http://localhost:8080',
  // baseURL: 'https://nkambo-events.onrender.com',
  timeout: 5000,
  withCredentials: true, // Enables sending cookies and credentials
  headers: {
    'Content-Type': 'application/json'
  }
});


export const apiFetcherClient = (url : string) => fetch('http://localhost:8080'+url).then((res)=>res.json()).then((data)=>data.data)