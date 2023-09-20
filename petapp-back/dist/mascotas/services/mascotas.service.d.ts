import { Dueno } from './../../database/entities/dueno.entity';
import { CrearMascotaRequestBodyDto, ObtenerMascotasPorDuenoRequestParamsDto, ObtenerMascotaPorIdRequestParamsDto, ActualizarMascotaRequestParamsDto, ActualizarMascotaRequestBodyDto } from './../dtos/mascota-request.dto';
import { Mascota } from './../../database/entities/mascota.entity';
import { Repository } from 'typeorm';
export declare class MascotasService {
    private _mascotasRepo;
    private _duenosRepo;
    constructor(_mascotasRepo: Repository<Mascota>, _duenosRepo: Repository<Dueno>);
    crearMascota(mascota: CrearMascotaRequestBodyDto): Promise<Mascota>;
    obtenerMascotasPorDueno(params: ObtenerMascotasPorDuenoRequestParamsDto): Promise<Mascota[]>;
    obtenerMascotaPorId(params: ObtenerMascotaPorIdRequestParamsDto): Promise<Mascota>;
    actualizarMascota(params: ActualizarMascotaRequestParamsDto, body: ActualizarMascotaRequestBodyDto): Promise<Mascota>;
}
