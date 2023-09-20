import { HttpService } from '@nestjs/common';
import { UsuariosService } from '../../usuarios/services/usuarios.service';
import { GoogleCredentialClient } from '../models/google-credential.model';
import { JwtGeneratorService } from '../../common/utils/jwt-generator/jwt-generator.service';
export declare class AuthService {
    private usuariosService;
    private httpService;
    private jwtGeneratorService;
    constructor(usuariosService: UsuariosService, httpService: HttpService, jwtGeneratorService: JwtGeneratorService);
    validateUser(credencialCliente: GoogleCredentialClient): any;
}
