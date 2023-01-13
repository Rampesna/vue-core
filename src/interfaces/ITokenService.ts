export default interface ITokenService {
    getToken(): string;

    saveToken(token: string): void;

    destroyToken(): void;
}
