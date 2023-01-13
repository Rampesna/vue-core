const _TOKEN_KEY = "_token" as string;

import type ITokenService from "@/interfaces/ITokenService";

class TokenService implements ITokenService {
    getToken() {
        return window.localStorage.getItem(_TOKEN_KEY) as string;
    }

    saveToken(token: string) {
        window.localStorage.setItem(_TOKEN_KEY, token);
    }

    destroyToken() {
        window.localStorage.removeItem(_TOKEN_KEY);
    }
}

export default new TokenService;
