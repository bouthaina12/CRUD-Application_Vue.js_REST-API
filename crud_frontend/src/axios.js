// src/axios.js
import axios from 'axios';

// Create an Axios instance with the base URL of your API
const api = axios.create({
  baseURL: process.env.VUE_APP_API_URL || 'http://127.0.0.1:8000/api/',
  timeout: 10000,
});

// Export the Axios instance for use in other components
export default api;