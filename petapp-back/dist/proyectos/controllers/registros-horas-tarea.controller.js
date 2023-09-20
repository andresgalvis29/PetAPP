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
exports.RegistrosHorasTareaController = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const registros_horas_tarea_request_dto_1 = require("../dtos/registros-horas-tarea-request.dto");
const jwt_auth_guard_1 = require("../../auth/guards/jwt-auth.guard");
const common_1 = require("@nestjs/common");
const public_decorator_1 = require("../../auth/decorators/public.decorator");
const registros_horas_tarea_service_1 = require("../services/registros-horas-tarea.service");
let RegistrosHorasTareaController = class RegistrosHorasTareaController {
    constructor(registrosHorasService) {
        this.registrosHorasService = registrosHorasService;
    }
    crearRegistroHoras(registroHoras) {
        return this.registrosHorasService.crearRegistroHoras(registroHoras);
    }
};
__decorate([
    public_decorator_1.Public(),
    common_1.Post(),
    openapi.ApiResponse({ status: 201, type: require("../../database/entities/proyectos/registro-horas_tarea.entity").RegistroHorasTarea }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [registros_horas_tarea_request_dto_1.CrearRegistroHorasTareaRequestDto]),
    __metadata("design:returntype", void 0)
], RegistrosHorasTareaController.prototype, "crearRegistroHoras", null);
RegistrosHorasTareaController = __decorate([
    swagger_1.ApiTags('Registros de horas de tareas'),
    common_1.Controller('registros-horas_tarea'),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [registros_horas_tarea_service_1.RegistrosHorasTareaService])
], RegistrosHorasTareaController);
exports.RegistrosHorasTareaController = RegistrosHorasTareaController;
//# sourceMappingURL=registros-horas-tarea.controller.js.map