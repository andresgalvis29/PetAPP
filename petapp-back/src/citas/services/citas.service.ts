import { Medicamento } from './../../database/entities/medicamento.entity';
import { Cita } from './../../database/entities/cita.entity';
import { Mascota } from './../../database/entities/mascota.entity';
import { CrearCitaRequestBodyDto } from './../dtos/citas-request.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MedicamentosCita } from '@database/entities/medicamentos-cita.entity';

@Injectable()
export class CitasService {
	constructor(
		@InjectRepository(Mascota) private _mascotasRepo: Repository<Mascota>,
		@InjectRepository(Cita) private _citasRepo: Repository<Cita>,
		@InjectRepository(Medicamento) private _medicamentosRepo: Repository<Medicamento>,
		@InjectRepository(MedicamentosCita) private _medicamentosCitaRepo: Repository<MedicamentosCita>
	) {}

	public async crearCita(body: CrearCitaRequestBodyDto) {
		const { mascotaId, ...datosCita } = body;

		const mascota = await this._mascotasRepo.findOne(mascotaId);

		if (!mascota) {
			throw new NotFoundException('No se encontró la mascota');
		}

		let cita = this._citasRepo.create(datosCita);

		cita.mascota = mascota;

		return this._citasRepo.save(cita);
	}

	public obtenerCitas() {
		return this._citasRepo.find({ relations: [ 'mascota', 'mascota.dueno' ] });
	}

	public obtenerCita(citaId: string) {
		return this._citasRepo.findOne(citaId, { relations: [ 'mascota', 'mascota.dueno' ] });
	}

	public async agregarMedicamentoACita(citaId: string, medicamentoId: string) {
		const medicamento = await this._medicamentosRepo.findOne(medicamentoId);

		if (!medicamento) {
			throw new NotFoundException('No se encontró el medicamento');
		}

		const cita = await this._citasRepo.findOne(citaId);

		if (!cita) {
			throw new NotFoundException('No se encontró la cita');
		}

		const medicamentosCitaNuevo = this._medicamentosCitaRepo.create({
			cita,
			medicamento
		});

		return this._medicamentosCitaRepo.save(medicamentosCitaNuevo);
	}

	public async obtenerMedicamentosDeCita(citaId: string) {
		const medicamentosCita = await this._medicamentosCitaRepo.find({
			where: {
				cita: { id: citaId }
			},
			relations: [ 'medicamento' ]
		});

		console.log(medicamentosCita);

		return medicamentosCita;
	}

	public async actualizarMedicamentosCita(medicamentosCitaId: string, body: any) {
		const medicamentosCita = await this._medicamentosCitaRepo.findOne(medicamentosCitaId);

		if (!medicamentosCita) {
			throw new NotFoundException('No se encontró el medicamento');
		}

		this._medicamentosCitaRepo.merge(medicamentosCita, body);

		return this._medicamentosCitaRepo.save(medicamentosCita);
	}
}
