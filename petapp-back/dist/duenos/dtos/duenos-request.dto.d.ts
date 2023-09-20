export declare class CrearDuenoRequestBodyDto {
    nombres: string;
    identificacion: string;
    telefono: string;
    imagen: string;
}
export declare class ObtenerDuenoRequestParamsDto {
    duenoId: string;
}
export declare class ObtenerDuenoRequestQuertyDto {
    identificacion: string;
}
export declare class ActualizarDuenoRequestParamsDto extends ObtenerDuenoRequestParamsDto {
}
declare const ActualizarDuenoRequestBodyDto_base: any;
export declare class ActualizarDuenoRequestBodyDto extends ActualizarDuenoRequestBodyDto_base {
}
export {};
