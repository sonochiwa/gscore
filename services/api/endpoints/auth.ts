import axios from 'axios';

const endpoints = {
  login: (data: any) => axios.post('/users/sign-in', data),
  registration: (data: any) => axios.post('/users/sign-up', data),
  getProfile: () => axios.get('/users/me'),
  updateProfile: (data: any) => axios.patch('/users/me', data)
};

export default endpoints;