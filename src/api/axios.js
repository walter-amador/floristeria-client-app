import axios from 'axios';

const BASE_URL = "http://192.168.0.34:5000/api/v1";

export default axios.create({
    baseURL: BASE_URL
});

export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true
});