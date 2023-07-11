import axios from 'axios';

const api = axios.create({
    baseURL: 'http://srv-03.r7st.com.br:5000'
});

export default api;