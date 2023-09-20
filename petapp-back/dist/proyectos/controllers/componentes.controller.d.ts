import { ActualizarComponenteRequestDto, BuscarComponenteRequestParamsDto, CrearComponenteRequestDto } from '../dtos/componentes-request.dto';
import { ComponentesService } from '../services/componentes.service';
export declare class ComponentesController {
    private componentesService;
    constructor(componentesService: ComponentesService);
    crearComponente(componente: CrearComponenteRequestDto): Promise<import("../../database/entities/proyectos/componente.entity").Componente>;
    actualizarComponente(componenteId: string, componente: ActualizarComponenteRequestDto): Promise<import("../../database/entities/proyectos/componente.entity").Componente>;
    obtenerComponentePorId(componenteId: string): Promise<import("../../database/entities/proyectos/componente.entity").Componente>;
    obtenerComponentes(queryParams: BuscarComponenteRequestParamsDto): Promise<import("../../database/entities/proyectos/componente.entity").Componente[]>;
}
