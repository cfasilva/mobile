import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://192.168.15.133:3333',
});