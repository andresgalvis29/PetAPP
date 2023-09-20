import { Dueno } from './../../database/entities/dueno.entity';
import {
	CrearMascotaRequestBodyDto,
	ObtenerMascotasPorDuenoRequestParamsDto,
	ObtenerMascotaPorIdRequestParamsDto,
	ActualizarMascotaRequestParamsDto,
	ActualizarMascotaRequestBodyDto
} from './../dtos/mascota-request.dto';
import { Mascota } from './../../database/entities/mascota.entity';
import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';

@Injectable()
export class MascotasService {
	constructor(
		@InjectRepository(Mascota) private _mascotasRepo: Repository<Mascota>,
		@InjectRepository(Dueno) private _duenosRepo: Repository<Dueno>
	) {}

	public async crearMascota(mascota: CrearMascotaRequestBodyDto) {
		const duenoEncontrado = await this._duenosRepo.findOne(mascota.duenoId);

		if (!duenoEncontrado) {
			throw new NotFoundException('No se encontró el dueño');
		}

		const formato = mascota.imagen.split(';')[0].split('/')[1];

		if (formato !== 'png' && formato !== 'jpg' && formato !== 'jpeg') {
			throw new ConflictException('El formato de la imagen no es válido');
		}

		let base64Data: string;

		switch (formato) {
			case 'png':
				base64Data = mascota.imagen.replace(/^data:image\/png;base64,/, '');
				break;
			case 'jpeg':
				base64Data = mascota.imagen.replace(/^data:image\/jpeg;base64,/, '');
				break;
			case 'jpg':
				base64Data = mascota.imagen.replace(/^data:image\/jpg;base64,/, '');
				break;
		}

		const random = Math.floor(Math.random() * 1000000);

		console.log(base64Data);

		require('fs').writeFile(`${random}out.${formato}`, base64Data, 'base64', function(err) {
			console.log(err);
		});

		const nuevaMascota = this._mascotasRepo.create(mascota);

		nuevaMascota.imagen = `${random}out.${formato}`;

		nuevaMascota.dueno = duenoEncontrado;

		return this._mascotasRepo.save(nuevaMascota);
	}

	public async obtenerMascotasPorDueno(params: ObtenerMascotasPorDuenoRequestParamsDto): Promise<Mascota[]> {
		const duenoEncontrado = await this._duenosRepo.findOne(params.duenoId);

		if (!duenoEncontrado) {
			throw new NotFoundException('No se encontró el dueño');
		}

		return await this._mascotasRepo.find({ where: { dueno: duenoEncontrado } });
	}

	public obtenerMascotaPorId(params: ObtenerMascotaPorIdRequestParamsDto): Promise<Mascota> {
		console.log(params);
		return this._mascotasRepo.findOne(params.mascotaId);
	}

	public async actualizarMascota(
		params: ActualizarMascotaRequestParamsDto,
		body: ActualizarMascotaRequestBodyDto
	): Promise<Mascota> {
		const mascotaEncontrada = await this._mascotasRepo.findOne(params.mascotaId);

		if (!mascotaEncontrada) {
			throw new NotFoundException('No se encontró la mascota');
		}

		const { duenoId, ...datosMascota } = body;
		const mascotaActualizada = this._mascotasRepo.merge(mascotaEncontrada, datosMascota);

		return this._mascotasRepo.save(mascotaActualizada);
	}
}
