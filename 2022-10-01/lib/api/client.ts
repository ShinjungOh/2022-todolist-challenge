import axios from 'axios';

const client = axios.create({
  baseURL: 'http://localhost:9052',
});

export default client;
