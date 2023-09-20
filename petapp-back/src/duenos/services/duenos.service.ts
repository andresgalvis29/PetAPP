import {
	CrearDuenoRequestBodyDto,
	ObtenerDuenoRequestParamsDto,
	ActualizarDuenoRequestParamsDto,
	ActualizarDuenoRequestBodyDto,
	ObtenerDuenoRequestQuertyDto
} from './../dtos/duenos-request.dto';
import { Dueno } from './../../database/entities/dueno.entity';
import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';

@Injectable()
export class DuenosService {
	constructor(@InjectRepository(Dueno) private _duenosRepo: Repository<Dueno>) {}

	public async crearDueno(dueno: CrearDuenoRequestBodyDto): Promise<Dueno> {
		const duenoExistente = await this._duenosRepo.findOne({ identificacion: dueno.identificacion });

		if (duenoExistente) {
			throw new ConflictException('Ya existe un dueno con esa identificación');
		}
		const formato = dueno.imagen.split(';')[0].split('/')[1];

		if (formato !== 'png' && formato !== 'jpg' && formato !== 'jpeg') {
			throw new ConflictException('El formato de la imagen no es válido');
		}

		let base64Data: string;

		switch (formato) {
			case 'png':
				base64Data = dueno.imagen.replace(/^data:image\/png;base64,/, '');
				break;
			case 'jpeg':
				base64Data = dueno.imagen.replace(/^data:image\/jpeg;base64,/, '');
				break;
			case 'jpg':
				base64Data = dueno.imagen.replace(/^data:image\/jpg;base64,/, '');
				break;
		}

		const random = Math.floor(Math.random() * 1000000);

		console.log(base64Data);

		require('fs').writeFile(`${random}out.${formato}`, base64Data, 'base64', function(err) {
			console.log(err);
		});

		const nuevoDueno = this._duenosRepo.create(dueno);

		nuevoDueno.imagen = `${random}out.${formato}`;

		return await this._duenosRepo.save(nuevoDueno);
	}

	public async obtenerDuenos(query: ObtenerDuenoRequestQuertyDto): Promise<Dueno[]> {
		if (query.identificacion && query.identificacion.length > 0) {
			return await this._duenosRepo.find({
				where: {
					identificacion: Like(`${query.identificacion}%`)
				},
				relations: [ 'mascotas' ]
			});
		} else {
			return await this._duenosRepo.find({ relations: [ 'mascotas' ] });
		}
	}

	public async obtenerUnDueno(params: ObtenerDuenoRequestParamsDto): Promise<Dueno> {
		return await this._duenosRepo.findOne(params.duenoId);
	}

	public async actualizarDueno(
		params: ActualizarDuenoRequestParamsDto,
		body: ActualizarDuenoRequestBodyDto
	): Promise<Dueno> {
		const duenoEncontrado = await this._duenosRepo.findOne(params.duenoId);

		if (!duenoEncontrado) {
			throw new NotFoundException('No se encontró el dueno');
		}

		const duenoActualizado = this._duenosRepo.merge(duenoEncontrado, body);

		return await this._duenosRepo.save(duenoActualizado);
	}
}
