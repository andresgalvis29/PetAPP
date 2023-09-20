import { Mascota } from './mascota.entity';
export declare class Dueno {
    id: string;
    nombres: string;
    identificacion: string;
    telefono: string;
    imagen: string;
    get imagenUrl(): string | null;
    mascotas: Mascota[];
    createdAt: Date;
    updatedAt: Date;
}
