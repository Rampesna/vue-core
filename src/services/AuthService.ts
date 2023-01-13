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
            response.isSuccess,
            // @ts-ignore
            response.message,
            // @ts-ignore
            response.data,
            // @ts-ignore
            response.statusCode
        );
    }

    passwordReset(username: string): ServiceResponse {
        return new ServiceResponse(true, "Password reset successful", null, 200);
    }

}

export default new AuthService;
