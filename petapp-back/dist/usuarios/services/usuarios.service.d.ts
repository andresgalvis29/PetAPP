import { Repository } from 'typeorm';
import { Usuario } from '../../database/entities/usuarios/usuario.entity';
import { GoogleCredentialClient } from 'src/auth/models/google-credential.model';
export declare class UsuariosService {
    private usuarioRepo;
    constructor(usuarioRepo: Repository<Usuario>);
    buscarPorEmailOCrear(email: string, credencialCliente?: GoogleCredentialClient): unknown;
    buscarPorId(id: string): unknown;
}
