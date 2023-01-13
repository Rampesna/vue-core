import axios from 'axios';

const token = localStorage.getItem('token') || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYjk1ODNjYzE3OWYxNTZjZTk3OTlkNCIsImVtYWlsIjoiYWRtaW5AYWRtaW4uY29tIiwibmFtZSI6IkFkbWluIiwiaWF0IjoxNjczMjU1MjMyfQ.gTxGc4hLMl9xtgRA8ftMWDo1icMLTkHNoGM7E4ecRdc';

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
        return response.status === 200 ? response.data : response.response.data;
    }
);

export default AxiosManager;
