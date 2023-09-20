import { Dueno } from './../../database/entities/dueno.entity';
import { Repository } from 'typeorm';
import { Mascota } from '@database/entities/mascota.entity';
export declare class MediaService {
    private _duenoRepo;
    private _mascotaRepo;
    constructor(_duenoRepo: Repository<Dueno>, _mascotaRepo: Repository<Mascota>);
    obtenerFotoDuenoPorId(duenoId: string): unknown;
    obtenerFotoMascotaPorId(mascotaId: string): unknown;
}
