import { Tarea } from './tarea.entity';
export declare class RegistroHorasTarea {
    id: string;
    fecha: string;
    horas: number;
    tarea: Tarea;
    facturable: boolean;
    createdAt: Date;
    updatedAt: Date;
}
