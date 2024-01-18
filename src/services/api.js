// api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:your-node-server-port/api', // Replace with your actual server URL
});

export default api;
