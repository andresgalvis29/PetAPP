import { Componente } from './componente.entity';
export declare class RegistroHorasCompoente {
    id: string;
    fecha: string;
    horas: number;
    componente: Componente;
    facturable: boolean;
    createdAt: Date;
    updatedAt: Date;
}
