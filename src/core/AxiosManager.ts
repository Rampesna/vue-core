import axios from 'axios';

const token = localStorage.getItem('_token');

const AxiosManager = axios.create({
    timeout: 1000,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
});

AxiosManager.interceptors.request.use(
    config => {
        // @ts-ignore
        config.headers.Authorization = `Bearer ${token}`;
        return config;
    }
);

AxiosManager.interceptors.response.use(
    response => {
        // @ts-ignore
        response.coreResponse = response.data;
        return response;
    },
    error => {
        error.coreResponse = error.response.data;
        return error;
    }
);

export default AxiosManager;
