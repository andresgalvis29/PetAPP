import { Dueno } from './../../database/entities/dueno.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable, Res } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Mascota } from '@database/entities/mascota.entity';

@Injectable()
export class MediaService {
	constructor(
		@InjectRepository(Dueno) private _duenoRepo: Repository<Dueno>,
		@InjectRepository(Mascota) private _mascotaRepo: Repository<Mascota>
	) {}

	public async obtenerFotoDuenoPorId(duenoId: string) {
		const dueno = await this._duenoRepo.findOne(duenoId);

		//console.log(dueno.imagen);
		return dueno.imagen;
	}

	public async obtenerFotoMascotaPorId(mascotaId: string) {
		const mascota = await this._mascotaRepo.findOne(mascotaId);

		//console.log(dueno.imagen);
		return mascota.imagen;
	}
}
