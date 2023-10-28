import axios from 'axios';

const httpRequest = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  headers: {
    post: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}` 
    }
  }
});

export default httpRequest