import { AuthService } from '../services/auth.service';
import { GoogleCredentialClient } from '../models/google-credential.model';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(payload: GoogleCredentialClient): unknown;
}
