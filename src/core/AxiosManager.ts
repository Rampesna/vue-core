import axios from 'axios';
import TokenService from "@/services/TokenService";

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
        config.headers.Authorization = `Bearer ${TokenService.getToken()}`;
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
