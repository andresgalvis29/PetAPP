import { Componente } from '../../database/entities/proyectos/componente.entity';
import { Mesa } from '../../database/entities/proyectos/mesa.entity';
import { Repository } from 'typeorm';
import { ActualizarComponenteRequestDto, BuscarComponenteRequestParamsDto, CrearComponenteRequestDto } from '../dtos/componentes-request.dto';
export declare class ComponentesService {
    private componentesRepo;
    private mesasRepo;
    constructor(componentesRepo: Repository<Componente>, mesasRepo: Repository<Mesa>);
    crearComponente(componente: CrearComponenteRequestDto): Promise<Componente>;
    actualizarComponente(componenteId: string, componente: ActualizarComponenteRequestDto): Promise<Componente>;
    obtenerComponentePorId(componenteId: string): Promise<Componente>;
    obtenerComponentes(queryParams: BuscarComponenteRequestParamsDto): Promise<Componente[]>;
}
