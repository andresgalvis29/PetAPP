import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from '../../database/entities/usuarios/usuario.entity';
import { GoogleCredentialClient } from 'src/auth/models/google-credential.model';
import { Rol } from '../../auth/models/roles.model';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuario) private usuarioRepo: Repository<Usuario>,
  ) {}

  async buscarPorEmailOCrear(
    email: string,
    credencialCliente?: GoogleCredentialClient,
  ) {
    const user = await this.usuarioRepo.findOne({ where: { email } });

    if (!user) {
      const nuevoUsuario = this.usuarioRepo.create({
        email,
        imagen: credencialCliente?.user.photoURL,
        nombres: credencialCliente?.user.displayName,
        rol: Rol.ARQUITECTO_DESARROLLADOR,
      });

      const usuarioCreado = await this.usuarioRepo.save(nuevoUsuario);

      return usuarioCreado;
    }
    return user;
  }

  async buscarPorId(id: string) {
    const usuario = this.usuarioRepo.findOne(id);

    if (!usuario) {
      throw new NotFoundException(`No existe el usuario ${id}`);
    }

    return usuario;
  }
}
