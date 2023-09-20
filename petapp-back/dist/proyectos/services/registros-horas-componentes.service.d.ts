import { Componente } from '../../database/entities/proyectos/componente.entity';
import { RegistroHorasCompoente } from '../../database/entities/proyectos/registro-horas_componente.entity';
import { Repository } from 'typeorm';
import { actualizarRegistroHorasComponenteRequestDto, CrearRegistroHorasComponenteRequestDto } from '../dtos/registros-horas-componentes-request.dto';
export declare class RegistrosHorasComponentesService {
    private registroHorasRepo;
    private componenteRepo;
    constructor(registroHorasRepo: Repository<RegistroHorasCompoente>, componenteRepo: Repository<Componente>);
    crearRegistroHoras(registroHoras: CrearRegistroHorasComponenteRequestDto): Promise<RegistroHorasCompoente>;
    actualizarRegistroHoras(registroHorasId: string, registroHoras: actualizarRegistroHorasComponenteRequestDto): Promise<import("typeorm").UpdateResult>;
}
