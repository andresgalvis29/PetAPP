import { TareasService } from '../services/tareas.service';
import { ActualizarTareaRequestDto, BuscarTareasRequestParamsDto, CrearTareaRequestDto } from '../dtos/tareas-request.dto';
import { Request } from 'express';
export declare class TareasController {
    private tareasService;
    constructor(tareasService: TareasService);
    crearTarea(tarea: CrearTareaRequestDto, req: Request): Promise<import("../../database/entities/proyectos/tarea.entity").Tarea>;
    obtenerTareasPorUsuario(req: Request): Promise<import("../../database/entities/proyectos/tarea.entity").Tarea[]>;
    actualizarTarea(tareaId: string, tarea: ActualizarTareaRequestDto): Promise<import("../../database/entities/proyectos/tarea.entity").Tarea>;
    obtenerTareaPorId(tareaId: string): Promise<import("../../database/entities/proyectos/tarea.entity").Tarea>;
    obtenerTareas(queryParams: BuscarTareasRequestParamsDto): Promise<import("../../database/entities/proyectos/tarea.entity").Tarea[]>;
}
