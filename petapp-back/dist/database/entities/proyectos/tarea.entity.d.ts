import { Mesa } from './mesa.entity';
import { Usuario } from './../usuarios/usuario.entity';
import { RegistroHorasTarea } from './registro-horas_tarea.entity';
export declare class Tarea {
    id: string;
    nombre: string;
    descripcion: string;
    mesa: Mesa;
    arquitectoDesarrollador: Usuario;
    registrosHoras: RegistroHorasTarea[];
    createdAt: Date;
    updatedAt: Date;
}
