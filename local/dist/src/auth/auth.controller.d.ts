import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(params: any): Promise<any>;
    checkLogin(): string;
}
