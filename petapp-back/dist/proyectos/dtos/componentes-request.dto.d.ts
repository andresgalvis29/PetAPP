export declare class CrearComponenteRequestDto {
    readonly nombre: string;
    readonly descripcion: string;
    readonly mesaId: string;
}
declare const ActualizarComponenteRequestDto_base: import("@nestjs/common").Type<Partial<CrearComponenteRequestDto>>;
export declare class ActualizarComponenteRequestDto extends ActualizarComponenteRequestDto_base {
}
export declare class BuscarComponenteRequestParamsDto {
    readonly mesaId: string;
    readonly fechaInicio: string;
    readonly fechaFin: string;
}
export {};
