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
exports.ActualizarDuenoRequestBodyDto = exports.ActualizarDuenoRequestParamsDto = exports.ObtenerDuenoRequestQuertyDto = exports.ObtenerDuenoRequestParamsDto = exports.CrearDuenoRequestBodyDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CrearDuenoRequestBodyDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { nombres: { required: true, type: () => String }, identificacion: { required: true, type: () => String }, telefono: { required: true, type: () => String }, imagen: { required: true, type: () => String } };
    }
}
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], CrearDuenoRequestBodyDto.prototype, "nombres", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], CrearDuenoRequestBodyDto.prototype, "identificacion", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], CrearDuenoRequestBodyDto.prototype, "telefono", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsOptional(),
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], CrearDuenoRequestBodyDto.prototype, "imagen", void 0);
exports.CrearDuenoRequestBodyDto = CrearDuenoRequestBodyDto;
class ObtenerDuenoRequestParamsDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { duenoId: { required: true, type: () => String } };
    }
}
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], ObtenerDuenoRequestParamsDto.prototype, "duenoId", void 0);
exports.ObtenerDuenoRequestParamsDto = ObtenerDuenoRequestParamsDto;
class ObtenerDuenoRequestQuertyDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { identificacion: { required: true, type: () => String } };
    }
}
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsOptional(),
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], ObtenerDuenoRequestQuertyDto.prototype, "identificacion", void 0);
exports.ObtenerDuenoRequestQuertyDto = ObtenerDuenoRequestQuertyDto;
class ActualizarDuenoRequestParamsDto extends ObtenerDuenoRequestParamsDto {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.ActualizarDuenoRequestParamsDto = ActualizarDuenoRequestParamsDto;
class ActualizarDuenoRequestBodyDto extends swagger_1.PartialType(CrearDuenoRequestBodyDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.ActualizarDuenoRequestBodyDto = ActualizarDuenoRequestBodyDto;
//# sourceMappingURL=duenos-request.dto.js.map