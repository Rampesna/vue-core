import ServiceResponse from "@/core/ServiceResponse";
import type IAuthService from "@/interfaces/IAuthService";
import AxiosManager from "@/core/AxiosManager";
import ApiEndpoints from "@/config/ApiEndpoints";

class AuthService implements IAuthService {
    // @ts-ignore
    async login(email: string, password: string): ServiceResponse {
        let response = await AxiosManager.post(ApiEndpoints.LOGIN, {
            email: email,
            password: password,
        });

        return new ServiceResponse(
            // @ts-ignore
            response.coreResponse.isSuccess,
            // @ts-ignore
            response.coreResponse.message,
            // @ts-ignore
            response.coreResponse.data,
            // @ts-ignore
            response.coreResponse.statusCode
        );
    }

    passwordReset(username: string): ServiceResponse {
        return new ServiceResponse(true, "Password reset successful", null, 200);
    }

}

export default new AuthService;
