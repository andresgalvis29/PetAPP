import { ConfigType } from '@nestjs/config';
import { UsuariosService } from 'src/usuarios/services/usuarios.service';
import config from '../../config';
import { PayloadToken } from '../models/token.model';
declare const JwtStrategy_base: any;
export declare class JwtStrategy extends JwtStrategy_base {
    private usuariosService;
    constructor(configService: ConfigType<typeof config>, usuariosService: UsuariosService);
    validate(payload: PayloadToken): unknown;
}
export {};
