import { CrearRegistroHorasTareaRequestDto } from '../dtos/registros-horas-tarea-request.dto';
import { RegistrosHorasTareaService } from '../services/registros-horas-tarea.service';
export declare class RegistrosHorasTareaController {
    private registrosHorasService;
    constructor(registrosHorasService: RegistrosHorasTareaService);
    crearRegistroHoras(registroHoras: CrearRegistroHorasTareaRequestDto): Promise<import("../../database/entities/proyectos/registro-horas_tarea.entity").RegistroHorasTarea>;
}
