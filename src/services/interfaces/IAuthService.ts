import type ServiceResponse from "@/core/ServiceResponse";

interface IAuthService {
    login(username: string, password: string): ServiceResponse;
    passwordReset(username: string): ServiceResponse;
}

export default IAuthService;