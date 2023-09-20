import { Tarea } from './tarea.entity';
import { Usuario } from '../usuarios/usuario.entity';
export declare class Mesa {
    id: string;
    nombre: string;
    descripcion: string;
    numeroActa: string;
    tareas: Tarea[];
    facilitador: Usuario;
    arquitectosDesarrolladores: Usuario[];
    createdAt: Date;
    updatedAt: Date;
}
