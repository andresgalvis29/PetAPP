import { RegistroHorasCompoente } from '../../../../../database/entities/proyectos/registro-horas_componente.entity';
import { Observable } from 'rxjs';
import { actualizarRegistroHorasComponenteRequestDto, CrearRegistroHorasComponenteRequestDto } from 'src/proyectos/dtos/registros-horas-componentes-request.dto';
export declare class RegistrosHorasComponentesServiceStub {
    crearRegistroHoras(registroHoras: CrearRegistroHorasComponenteRequestDto): Observable<RegistroHorasCompoente>;
    actualizarRegistroHoras(registroHorasId: string, registroHoras: actualizarRegistroHorasComponenteRequestDto): Observable<RegistroHorasCompoente>;
}
