import axios from 'axios';

const api = axios.create({
  // baseURL: 'http://192.168.0.107:7777',
  baseURL: 'http://10.210.6.217:7777',
});

export default api;
