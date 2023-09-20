import { Mascota } from './mascota.entity';
import { MedicamentosCita } from './medicamentos-cita.entity';
export declare class Cita {
    id: string;
    fecha: string;
    motivo: string;
    mascota: Mascota;
    medicamentosCita: MedicamentosCita[];
    createdAt: Date;
    updatedAt: Date;
}
