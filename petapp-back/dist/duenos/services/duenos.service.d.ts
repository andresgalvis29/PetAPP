import { CrearDuenoRequestBodyDto, ObtenerDuenoRequestParamsDto, ActualizarDuenoRequestParamsDto, ActualizarDuenoRequestBodyDto, ObtenerDuenoRequestQuertyDto } from './../dtos/duenos-request.dto';
import { Dueno } from './../../database/entities/dueno.entity';
import { Repository } from 'typeorm';
export declare class DuenosService {
    private _duenosRepo;
    constructor(_duenosRepo: Repository<Dueno>);
    crearDueno(dueno: CrearDuenoRequestBodyDto): Promise<Dueno>;
    obtenerDuenos(query: ObtenerDuenoRequestQuertyDto): Promise<Dueno[]>;
    obtenerUnDueno(params: ObtenerDuenoRequestParamsDto): Promise<Dueno>;
    actualizarDueno(params: ActualizarDuenoRequestParamsDto, body: ActualizarDuenoRequestBodyDto): Promise<Dueno>;
}
