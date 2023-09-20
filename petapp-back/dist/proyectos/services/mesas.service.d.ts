import { CrearMesaRequestDto } from '../dtos/mesas-request.dto';
import { Usuario } from '../../database/entities/usuarios/usuario.entity';
import { Mesa } from '../../database/entities/proyectos/mesa.entity';
import { Repository } from 'typeorm';
import { Tarea } from '../../database/entities/proyectos/tarea.entity';
import { Componente } from '../../database/entities/proyectos/componente.entity';
export declare class MesasService {
    private mesasRepo;
    private tareasRepo;
    private componentesRepo;
    private usuariosRepo;
    constructor(mesasRepo: Repository<Mesa>, tareasRepo: Repository<Tarea>, componentesRepo: Repository<Componente>, usuariosRepo: Repository<Usuario>);
    crearMesa(mesa: CrearMesaRequestDto): Promise<Mesa>;
    obtenerMesas(): Promise<{
        proyectosColaborador: Mesa[];
    }>;
    obtenerTareasMesaYArquitectoDesarrollador(mesaId: string, usuario: Usuario): Promise<Tarea[]>;
    obtenerComponentesPorMesa(mesaId: string): Promise<Componente[]>;
}
