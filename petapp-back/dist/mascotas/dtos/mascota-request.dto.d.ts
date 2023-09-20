export declare class CrearMascotaRequestBodyDto {
    nombres: string;
    raza: string;
    imagen: string;
    fechaNacimiento: string;
    sexo: string;
    duenoId: string;
}
export declare class ObtenerMascotasPorDuenoRequestParamsDto {
    duenoId: string;
}
export declare class ObtenerMascotaPorIdRequestParamsDto {
    mascotaId: string;
}
export declare class ActualizarMascotaRequestParamsDto extends ObtenerMascotaPorIdRequestParamsDto {
}
declare const ActualizarMascotaRequestBodyDto_base: any;
export declare class ActualizarMascotaRequestBodyDto extends ActualizarMascotaRequestBodyDto_base {
}
export {};
