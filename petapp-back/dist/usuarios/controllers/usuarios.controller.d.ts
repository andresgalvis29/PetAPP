import { Request } from 'express';
import { Usuario } from '@database/entities/usuarios/usuario.entity';
export declare class UsuariosController {
    obtenerUsuarioAutenticado(req: Request): Usuario;
}
