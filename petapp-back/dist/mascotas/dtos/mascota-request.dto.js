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
exports.ActualizarMascotaRequestBodyDto = exports.ActualizarMascotaRequestParamsDto = exports.ObtenerMascotaPorIdRequestParamsDto = exports.ObtenerMascotasPorDuenoRequestParamsDto = exports.CrearMascotaRequestBodyDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const sexo_mascota_enum_1 = require("../models/sexo-mascota.enum");
class CrearMascotaRequestBodyDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { nombres: { required: true, type: () => String }, raza: { required: true, type: () => String }, imagen: { required: true, type: () => String }, fechaNacimiento: { required: true, type: () => String }, sexo: { required: true, type: () => String }, duenoId: { required: true, type: () => String } };
    }
}
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], CrearMascotaRequestBodyDto.prototype, "nombres", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], CrearMascotaRequestBodyDto.prototype, "raza", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], CrearMascotaRequestBodyDto.prototype, "imagen", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], CrearMascotaRequestBodyDto.prototype, "fechaNacimiento", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsEnum(sexo_mascota_enum_1.SexoMascotaEnum),
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], CrearMascotaRequestBodyDto.prototype, "sexo", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsUUID(),
    class_validator_1.IsNotEmpty(),
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], CrearMascotaRequestBodyDto.prototype, "duenoId", void 0);
exports.CrearMascotaRequestBodyDto = CrearMascotaRequestBodyDto;
class ObtenerMascotasPorDuenoRequestParamsDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { duenoId: { required: true, type: () => String } };
    }
}
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsUUID(),
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], ObtenerMascotasPorDuenoRequestParamsDto.prototype, "duenoId", void 0);
exports.ObtenerMascotasPorDuenoRequestParamsDto = ObtenerMascotasPorDuenoRequestParamsDto;
class ObtenerMascotaPorIdRequestParamsDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { mascotaId: { required: true, type: () => String } };
    }
}
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsUUID(),
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], ObtenerMascotaPorIdRequestParamsDto.prototype, "mascotaId", void 0);
exports.ObtenerMascotaPorIdRequestParamsDto = ObtenerMascotaPorIdRequestParamsDto;
class ActualizarMascotaRequestParamsDto extends ObtenerMascotaPorIdRequestParamsDto {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.ActualizarMascotaRequestParamsDto = ActualizarMascotaRequestParamsDto;
class ActualizarMascotaRequestBodyDto extends swagger_1.PartialType(CrearMascotaRequestBodyDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.ActualizarMascotaRequestBodyDto = ActualizarMascotaRequestBodyDto;
//# sourceMappingURL=mascota-request.dto.js.map