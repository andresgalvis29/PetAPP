import { MesasService } from '../services/mesas.service';
import { Request } from 'express';
import { CrearMesaRequestDto } from '../dtos/mesas-request.dto';
export declare class MesasController {
    private mesasService;
    constructor(mesasService: MesasService);
    crearMesa(mesa: CrearMesaRequestDto): Promise<import("../../database/entities/proyectos/mesa.entity").Mesa>;
    obtenerMesas(): Promise<{
        proyectosColaborador: import("../../database/entities/proyectos/mesa.entity").Mesa[];
    }>;
    obtenerTareasPorMesaYArquitectoDesarrollador(mesaId: string, req: Request): Promise<import("../../database/entities/proyectos/tarea.entity").Tarea[]>;
    obtenerComponentesPorMesa(mesaId: string): Promise<import("../../database/entities/proyectos/componente.entity").Componente[]>;
}
