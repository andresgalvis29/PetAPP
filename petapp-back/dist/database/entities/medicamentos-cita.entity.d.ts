import { Medicamento } from './medicamento.entity';
import { Cita } from './cita.entity';
export declare class MedicamentosCita {
    id: string;
    cantidad: string;
    frecuencia: string;
    cita: Cita;
    medicamento: Medicamento;
    createdAt: Date;
    updatedAt: Date;
}
