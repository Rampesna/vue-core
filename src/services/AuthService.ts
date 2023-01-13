import ServiceResponse from "@/core/ServiceResponse";
import type IAuthService from "@/services/interfaces/IAuthService";

class AuthService implements IAuthService{
     login(username: string, password: string): ServiceResponse {
        return new ServiceResponse(true, "Login successful", null, 200);
    }

    passwordReset(username: string): ServiceResponse {
        return new ServiceResponse(true, "Password reset successful", null, 200);
    }

}




export default new AuthService;