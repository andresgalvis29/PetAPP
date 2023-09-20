import { Mesa } from '../../../../../database/entities/proyectos/mesa.entity';
import { Observable } from 'rxjs';
import { CrearMesaRequestDto } from '../../../../../proyectos/dtos/mesas-request.dto';
import { Usuario } from '../../../../../database/entities/usuarios/usuario.entity';
import { Componente } from '../../../../../database/entities/proyectos/componente.entity';
export declare class MesasServiceStub {
    crearMesa(mesa: CrearMesaRequestDto): Observable<Mesa>;
    obtenerMesas(usuario: any): Observable<Mesa[]>;
    obtenerTareasMesaYArquitectoDesarrollador(usuario: Usuario, mesaId: string): Observable<Mesa[]>;
    obtenerComponentesPorMesa(mesaId: string): Observable<Componente[]>;
}
