import axios from 'axios';


const api = axios.create({
    baseURL: 'https://to-do-back-ace.herokuapp.com/'
})
export default api;
