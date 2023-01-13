class ApiEndpoints {
    static BASE_URL = 'http://localhost:5000/api';
    static VERSION = '/v1';
    static BASE_ENDPOINT = ApiEndpoints.BASE_URL + ApiEndpoints.VERSION;
    static LOGIN = ApiEndpoints.BASE_ENDPOINT + '/user/auth/login';
    static GET_PROFILE = ApiEndpoints.BASE_ENDPOINT + '/user/getProfile';
}

export default ApiEndpoints;
