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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistrosHorasComponentesController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const public_decorator_1 = require("../../auth/decorators/public.decorator");
const registros_horas_componentes_request_dto_1 = require("../dtos/registros-horas-componentes-request.dto");
const registros_horas_componentes_service_1 = require("../services/registros-horas-componentes.service");
let RegistrosHorasComponentesController = class RegistrosHorasComponentesController {
    constructor(registrosHorasService) {
        this.registrosHorasService = registrosHorasService;
    }
    crearRegistroHoras(registroHoras) {
        return this.registrosHorasService.crearRegistroHoras(registroHoras);
    }
    actualizarRegistroHoras(registroHorasId, registroHoras) {
        return this.registrosHorasService.actualizarRegistroHoras(registroHorasId, registroHoras);
    }
};
__decorate([
    public_decorator_1.Public(),
    common_1.Post(),
    openapi.ApiResponse({ status: 201, type: require("../../database/entities/proyectos/registro-horas_componente.entity").RegistroHorasCompoente }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [registros_horas_componentes_request_dto_1.CrearRegistroHorasComponenteRequestDto]),
    __metadata("design:returntype", void 0)
], RegistrosHorasComponentesController.prototype, "crearRegistroHoras", null);
__decorate([
    public_decorator_1.Public(),
    common_1.Patch(':registroHorasId'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, common_1.Param('registroHorasId')),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, registros_horas_componentes_request_dto_1.actualizarRegistroHorasComponenteRequestDto]),
    __metadata("design:returntype", void 0)
], RegistrosHorasComponentesController.prototype, "actualizarRegistroHoras", null);
RegistrosHorasComponentesController = __decorate([
    swagger_1.ApiTags('Registros de horas de componentes'),
    common_1.Controller('registros-horas-componentes'),
    __metadata("design:paramtypes", [registros_horas_componentes_service_1.RegistrosHorasComponentesService])
], RegistrosHorasComponentesController);
exports.RegistrosHorasComponentesController = RegistrosHorasComponentesController;
//# sourceMappingURL=registros-horas-componentes.controller.js.map