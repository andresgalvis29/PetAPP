import { HttpService, Injectable, UnauthorizedException } from '@nestjs/common';
import { UsuariosService } from '../../usuarios/services/usuarios.service';
import {
  GoogleCredentialClient,
  GoogleCredentialServer,
} from '../models/google-credential.model';

import { map } from 'rxjs';

import { JwtGeneratorService } from '../../common/utils/jwt-generator/jwt-generator.service';

@Injectable()
export class AuthService {
  constructor(
    private usuariosService: UsuariosService,
    private httpService: HttpService,
    private jwtGeneratorService: JwtGeneratorService,
  ) {}

  validateUser(credencialCliente: GoogleCredentialClient) {
    try {
      return this.httpService
        .get<GoogleCredentialServer>(
          `https://oauth2.googleapis.com/tokeninfo?id_token=${credencialCliente.credential.idToken}`,
        )
        .pipe(
          map(async (confirmacionGoogle) => {
            if (confirmacionGoogle.data.aud !== process.env.GOOGLE_CLIENT_ID) {
              throw new UnauthorizedException('No es un token de google');
            }

            const usuario = await this.usuariosService.buscarPorEmailOCrear(
              confirmacionGoogle.data.email,
              credencialCliente,
            );

            return this.jwtGeneratorService.generateJWT(usuario);
          }),
        );
    } catch (error) {
      throw new UnauthorizedException('No es un token de google');
    }
  }
}
