import { Tarea } from '../../database/entities/proyectos/tarea.entity';
import { RegistroHorasTarea } from '../../database/entities/proyectos/registro-horas_tarea.entity';
import { CrearRegistroHorasTareaRequestDto } from '../dtos/registros-horas-tarea-request.dto';
import { Repository } from 'typeorm';
export declare class RegistrosHorasTareaService {
    private registroHorasRepo;
    private tareaRepo;
    constructor(registroHorasRepo: Repository<RegistroHorasTarea>, tareaRepo: Repository<Tarea>);
    crearRegistroHoras(registroHoras: CrearRegistroHorasTareaRequestDto): Promise<RegistroHorasTarea>;
}
