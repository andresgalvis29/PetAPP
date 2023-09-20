import { Tarea } from '../../../../../database/entities/proyectos/tarea.entity';
import { Observable } from 'rxjs';
import { ActualizarTareaRequestDto, BuscarTareasRequestParamsDto, CrearTareaRequestDto } from 'src/proyectos/dtos/tareas-request.dto';
import { Usuario } from '../../../../../database/entities/usuarios/usuario.entity';
export declare class TareasServiceStub {
    crearTarea(tarea: CrearTareaRequestDto, usuario: Usuario): Observable<Tarea>;
    obtenerTareasPorUsuario(usuario: Usuario): Observable<Tarea[]>;
    actualizarTarea(tareaId: string, tarea: ActualizarTareaRequestDto): Observable<Tarea>;
    obtenerTareaPorId(tareaId: string): Observable<Tarea>;
    obtenerTareas(queryParams: BuscarTareasRequestParamsDto): Observable<Tarea[]>;
}
