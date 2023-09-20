import { JwtService } from '@nestjs/jwt';
import { Usuario } from '../../../database/entities/usuarios/usuario.entity';
export declare class JwtGeneratorService {
    private jwtService;
    constructor(jwtService: JwtService);
    generateJWT(usuario: Usuario): {
        access_token: any;
    };
}
