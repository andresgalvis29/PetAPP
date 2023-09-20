import { Medicamento } from './../../database/entities/medicamento.entity';
import { Cita } from './../../database/entities/cita.entity';
import { Mascota } from './../../database/entities/mascota.entity';
import { CrearCitaRequestBodyDto } from './../dtos/citas-request.dto';
import { Repository } from 'typeorm';
import { MedicamentosCita } from '@database/entities/medicamentos-cita.entity';
export declare class CitasService {
    private _mascotasRepo;
    private _citasRepo;
    private _medicamentosRepo;
    private _medicamentosCitaRepo;
    constructor(_mascotasRepo: Repository<Mascota>, _citasRepo: Repository<Cita>, _medicamentosRepo: Repository<Medicamento>, _medicamentosCitaRepo: Repository<MedicamentosCita>);
    crearCita(body: CrearCitaRequestBodyDto): unknown;
    obtenerCitas(): any;
    obtenerCita(citaId: string): any;
    agregarMedicamentoACita(citaId: string, medicamentoId: string): unknown;
    obtenerMedicamentosDeCita(citaId: string): unknown;
    actualizarMedicamentosCita(medicamentosCitaId: string, body: any): unknown;
}
