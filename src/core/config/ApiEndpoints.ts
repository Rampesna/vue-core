class ApiEndpoints {
    static BASE_URL = 'http://localhost:8000/api';
    static VERSION = '/';
    static BASE_ENDPOINT = ApiEndpoints.BASE_URL + ApiEndpoints.VERSION;
    static LOGIN = '/user/authentication/login';
    static GET_PROFILE = '/user/getProfile';
}

export default ApiEndpoints;
