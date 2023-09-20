export declare class CrearRegistroHorasComponenteRequestDto {
    readonly fechaInicio: string;
    readonly fecha: string;
    readonly componenteId: string;
    readonly facturable: boolean;
    readonly horas: number;
}
declare const actualizarRegistroHorasComponenteRequestDto_base: import("@nestjs/common").Type<Partial<CrearRegistroHorasComponenteRequestDto>>;
export declare class actualizarRegistroHorasComponenteRequestDto extends actualizarRegistroHorasComponenteRequestDto_base {
}
export {};
