import axios, { AxiosInstance } from 'axios';

export const apiClient : AxiosInstance = axios.create({
  baseURL: 'http://localhost:8080',
  timeout: 5000,
  withCredentials: true, // Enables sending cookies and credentials
  headers: {
    'Content-Type': 'application/json'
  }
});