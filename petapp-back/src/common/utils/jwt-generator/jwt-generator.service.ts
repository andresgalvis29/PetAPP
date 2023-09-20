import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PayloadToken } from 'src/auth/models/token.model';
import { Usuario } from '../../../database/entities/usuarios/usuario.entity';

@Injectable()
export class JwtGeneratorService {
  constructor(private jwtService: JwtService) {}

  generateJWT(usuario: Usuario) {
    const payload: PayloadToken = { rol: usuario.rol, sub: usuario.id };
    return {
      access_token: this.jwtService.sign(payload, {
        expiresIn: '365d',
      }),
    };
  }
}
