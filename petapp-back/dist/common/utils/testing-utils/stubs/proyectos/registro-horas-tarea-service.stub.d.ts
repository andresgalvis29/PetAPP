import { RegistroHorasTarea } from '../../../../../database/entities/proyectos/registro-horas_tarea.entity';
import { Observable } from 'rxjs';
import { CrearRegistroHorasTareaRequestDto } from '../../../../../proyectos/dtos/registros-horas-tarea-request.dto';
export declare class RegistrosHorasTareaServiceStub {
    crearRegistroHoras(registro: CrearRegistroHorasTareaRequestDto): Observable<RegistroHorasTarea>;
}
