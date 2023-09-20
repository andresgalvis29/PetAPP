import { Cita } from './cita.entity';
import { Dueno } from './dueno.entity';
export declare class Mascota {
    id: string;
    nombres: string;
    raza: string;
    imagen: string;
    get imagenUrl(): string | null;
    fechaNacimiento: string;
    sexo: string;
    dueno: Dueno;
    citas: Cita[];
    createdAt: Date;
    updatedAt: Date;
}
