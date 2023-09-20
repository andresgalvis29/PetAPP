import { actualizarRegistroHorasComponenteRequestDto, CrearRegistroHorasComponenteRequestDto } from '../dtos/registros-horas-componentes-request.dto';
import { RegistrosHorasComponentesService } from '../services/registros-horas-componentes.service';
export declare class RegistrosHorasComponentesController {
    private registrosHorasService;
    constructor(registrosHorasService: RegistrosHorasComponentesService);
    crearRegistroHoras(registroHoras: CrearRegistroHorasComponenteRequestDto): Promise<import("../../database/entities/proyectos/registro-horas_componente.entity").RegistroHorasCompoente>;
    actualizarRegistroHoras(registroHorasId: string, registroHoras: actualizarRegistroHorasComponenteRequestDto): Promise<import("typeorm").UpdateResult>;
}
