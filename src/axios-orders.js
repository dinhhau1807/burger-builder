import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burger-builder-1999.firebaseio.com/',
});

export default instance;
