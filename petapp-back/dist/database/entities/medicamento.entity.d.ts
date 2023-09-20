import { MedicamentosCita } from './medicamentos-cita.entity';
export declare class Medicamento {
    id: string;
    nombre: string;
    unidadMedida: string;
    tipo: string;
    citasMedicamento: MedicamentosCita[];
    createdAt: Date;
    updatedAt: Date;
}
