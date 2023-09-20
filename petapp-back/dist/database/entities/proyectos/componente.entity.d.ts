import { Mesa } from './mesa.entity';
import { RegistroHorasCompoente } from './registro-horas_componente.entity';
export declare class Componente {
    id: string;
    nombre: string;
    descripcion: string;
    mesa: Mesa;
    registrosHoras: RegistroHorasCompoente[];
    createdAt: Date;
    updatedAt: Date;
}
