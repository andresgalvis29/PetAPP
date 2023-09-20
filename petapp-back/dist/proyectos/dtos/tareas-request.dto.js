"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuscarTareasRequestParamsDto = exports.ActualizarTareaRequestDto = exports.CrearTareaRequestDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CrearTareaRequestDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { nombre: { required: true, type: () => String }, descripcion: { required: true, type: () => String }, mesaId: { required: true, type: () => String } };
    }
}
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CrearTareaRequestDto.prototype, "nombre", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CrearTareaRequestDto.prototype, "descripcion", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    class_validator_1.IsUUID(),
    __metadata("design:type", String)
], CrearTareaRequestDto.prototype, "mesaId", void 0);
exports.CrearTareaRequestDto = CrearTareaRequestDto;
class ActualizarTareaRequestDto extends swagger_1.PartialType(CrearTareaRequestDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.ActualizarTareaRequestDto = ActualizarTareaRequestDto;
class BuscarTareasRequestParamsDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { mesaId: { required: true, type: () => String }, fechaInicio: { required: true, type: () => String }, fechaFin: { required: true, type: () => String } };
    }
}
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], BuscarTareasRequestParamsDto.prototype, "mesaId", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], BuscarTareasRequestParamsDto.prototype, "fechaInicio", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], BuscarTareasRequestParamsDto.prototype, "fechaFin", void 0);
exports.BuscarTareasRequestParamsDto = BuscarTareasRequestParamsDto;
//# sourceMappingURL=tareas-request.dto.js.map