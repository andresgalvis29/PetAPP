import { Observable } from 'rxjs';
import { Componente } from '../../../../../database/entities/proyectos/componente.entity';
import { BuscarComponenteRequestParamsDto, CrearComponenteRequestDto } from '../../../../../proyectos/dtos/componentes-request.dto';
export declare class ComponentesServiceStub {
    crearComponente(componente: CrearComponenteRequestDto): Observable<Componente>;
    actualizarComponente(componenteId: string, componente: CrearComponenteRequestDto): Observable<Componente>;
    obtenerComponentePorId(componenteId: string): Observable<Componente>;
    obtenerComponentes(params: BuscarComponenteRequestParamsDto): Observable<Componente[]>;
}
