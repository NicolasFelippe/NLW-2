import axios from 'axios';


const api = axios.create({

    baseURL:'http://192.168.0.38:3333'
})


export default api;