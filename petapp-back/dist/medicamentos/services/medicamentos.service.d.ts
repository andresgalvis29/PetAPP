import { ObtenerMedicamentosQueryDto } from './../dtos/medicamentos.dto';
import { Medicamento } from './../../database/entities/medicamento.entity';
import { CrearMedicamentoRequestBodyDto } from '../dtos/medicamentos.dto';
import { Repository } from 'typeorm';
export declare class MedicamentosService {
    private _medicamentoRepo;
    constructor(_medicamentoRepo: Repository<Medicamento>);
    crearMedicamento(body: CrearMedicamentoRequestBodyDto): any;
    obtenerMedicamentos(query: ObtenerMedicamentosQueryDto): any;
}
