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
exports.CrearRegistroHorasTareaRequestDto = void 0;
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CrearRegistroHorasTareaRequestDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { fechaInicio: { required: true, type: () => String }, fecha: { required: true, type: () => String }, tareaId: { required: true, type: () => String }, facturable: { required: true, type: () => Boolean }, horas: { required: true, type: () => Number } };
    }
}
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsDateString(),
    __metadata("design:type", String)
], CrearRegistroHorasTareaRequestDto.prototype, "fechaInicio", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsDateString(),
    __metadata("design:type", String)
], CrearRegistroHorasTareaRequestDto.prototype, "fecha", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    class_validator_1.IsUUID(),
    __metadata("design:type", String)
], CrearRegistroHorasTareaRequestDto.prototype, "tareaId", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsBoolean(),
    __metadata("design:type", Boolean)
], CrearRegistroHorasTareaRequestDto.prototype, "facturable", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsNumber(),
    __metadata("design:type", Number)
], CrearRegistroHorasTareaRequestDto.prototype, "horas", void 0);
exports.CrearRegistroHorasTareaRequestDto = CrearRegistroHorasTareaRequestDto;
//# sourceMappingURL=registros-horas-tarea-request.dto.js.map