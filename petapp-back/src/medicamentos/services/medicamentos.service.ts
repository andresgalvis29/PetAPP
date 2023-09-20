import { ObtenerMedicamentosQueryDto } from './../dtos/medicamentos.dto';
import { Medicamento } from './../../database/entities/medicamento.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { CrearMedicamentoRequestBodyDto } from '../dtos/medicamentos.dto';
import { Repository, ILike } from 'typeorm';

@Injectable()
export class MedicamentosService {
	constructor(@InjectRepository(Medicamento) private _medicamentoRepo: Repository<Medicamento>) {}

	public crearMedicamento(body: CrearMedicamentoRequestBodyDto) {
		const medicamentoCreado = this._medicamentoRepo.create(body);

		return this._medicamentoRepo.save(medicamentoCreado);
	}

	public obtenerMedicamentos(query: ObtenerMedicamentosQueryDto) {
		if (query.nombre && query.nombre.length > 0) {
			return this._medicamentoRepo.find({
				where: {
					nombre: ILike(`%${query.nombre}%`)
				}
			});
		} else {
			return this._medicamentoRepo.find();
		}
	}
}
