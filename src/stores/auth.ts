import {ref} from "vue";
import {defineStore} from "pinia";
import TokenService from "@/services/TokenService";
import AuthService from "@/services/AuthService";

export interface User {
    name: string;
    email: string;
    password: string;
    _token: string;
}

export const useAuthStore = defineStore("auth", () => {
    const errors = ref({});
    const user = ref<User>({} as User);
    const isAuthenticated = ref(!!TokenService.getToken());

    function setAuth(authUser: User) {
        isAuthenticated.value = true;
        user.value = authUser;
        errors.value = {};
    }

    function getAuth() {
        return user;
    }

    function setError(error: any) {
        errors.value = {...error};
    }

    function purgeAuth() {
        isAuthenticated.value = false;
        user.value = {} as User;
        errors.value = [];
        TokenService.destroyToken();
    }

    function login(credentials: User) {
        let response = AuthService.login(credentials.email, credentials.password);
        if (response.success) {
            console.log(response);
        }
    }

    function logout() {
        purgeAuth();
    }

    return {
        errors,
        user,
        isAuthenticated,
        login,
        logout,
        setAuth,
    };
});
