export declare class CrearTareaRequestDto {
    readonly nombre: string;
    readonly descripcion: string;
    readonly mesaId: string;
}
declare const ActualizarTareaRequestDto_base: import("@nestjs/common").Type<Partial<CrearTareaRequestDto>>;
export declare class ActualizarTareaRequestDto extends ActualizarTareaRequestDto_base {
}
export declare class BuscarTareasRequestParamsDto {
    readonly mesaId: string;
    readonly fechaInicio: string;
    readonly fechaFin: string;
}
export {};
