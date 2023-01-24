import ServiceResponse from "@/core/helpers/ServiceResponse";
import type IAuthService from "@/interfaces/IAuthService";
import ApiEndpoints from "@/core/config/ApiEndpoints";
import ApiService from "@/core/services/ApiService";

class AuthService implements IAuthService {
    // @ts-ignore
    async login(email: string, password: string): ServiceResponse {
        let response = await ApiService.post(ApiEndpoints.LOGIN, {
            email: email,
            password: password,
        });

        return new ServiceResponse(
            // @ts-ignore
            response.coreResponse.success,
            // @ts-ignore
            response.coreResponse.message,
            // @ts-ignore
            response.coreResponse.data,
            // @ts-ignore
            response.coreResponse.status
        );
    }

    // @ts-ignore
    async getProfile(): ServiceResponse {
        ApiService.setHeader();
        let response = await ApiService.get(ApiEndpoints.GET_PROFILE);

        return new ServiceResponse(
            // @ts-ignore
            response.coreResponse.success,
            // @ts-ignore
            response.coreResponse.message,
            // @ts-ignore
            response.coreResponse.data,
            // @ts-ignore
            response.coreResponse.status
        );
    }

    passwordReset(username: string): ServiceResponse {
        return new ServiceResponse(true, "Password reset successful", null, 200);
    }

}

export default new AuthService;
