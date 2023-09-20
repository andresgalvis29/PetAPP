import { Usuario } from '../../database/entities/usuarios/usuario.entity';
import { Mesa } from '../../database/entities/proyectos/mesa.entity';
import { CrearTareaRequestDto, ActualizarTareaRequestDto, BuscarTareasRequestParamsDto } from '../dtos/tareas-request.dto';
import { Tarea } from './../../database/entities/proyectos/tarea.entity';
import { Repository } from 'typeorm';
export declare class TareasService {
    private tareasRepo;
    private mesasRepo;
    constructor(tareasRepo: Repository<Tarea>, mesasRepo: Repository<Mesa>);
    crearTarea(tarea: CrearTareaRequestDto, arquitectoDesarrollador: Usuario): Promise<Tarea>;
    actualizarTarea(tareaId: string, tarea: ActualizarTareaRequestDto): Promise<Tarea>;
    obtenerTareaPorId(tareaId: string): Promise<Tarea>;
    obtenerTareas(queryParams: BuscarTareasRequestParamsDto): Promise<Tarea[]>;
    obtenerTareasPorUsuario(colaborador: Usuario): Promise<Tarea[]>;
}
