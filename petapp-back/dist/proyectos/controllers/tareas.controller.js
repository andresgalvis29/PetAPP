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
exports.TareasController = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const roles_guard_1 = require("./../../auth/guards/roles.guard");
const jwt_auth_guard_1 = require("../../auth/guards/jwt-auth.guard");
const tareas_service_1 = require("../services/tareas.service");
const common_1 = require("@nestjs/common");
const tareas_request_dto_1 = require("../dtos/tareas-request.dto");
const public_decorator_1 = require("../../auth/decorators/public.decorator");
let TareasController = class TareasController {
    constructor(tareasService) {
        this.tareasService = tareasService;
    }
    crearTarea(tarea, req) {
        const usuario = req.user;
        return this.tareasService.crearTarea(tarea, usuario);
    }
    obtenerTareasPorUsuario(req) {
        const usuario = req.user;
        return this.tareasService.obtenerTareasPorUsuario(usuario);
    }
    actualizarTarea(tareaId, tarea) {
        return this.tareasService.actualizarTarea(tareaId, tarea);
    }
    obtenerTareaPorId(tareaId) {
        return this.tareasService.obtenerTareaPorId(tareaId);
    }
    obtenerTareas(queryParams) {
        return this.tareasService.obtenerTareas(queryParams);
    }
};
__decorate([
    common_1.Post(),
    openapi.ApiResponse({ status: 201, type: require("../../database/entities/proyectos/tarea.entity").Tarea }),
    __param(0, common_1.Body()),
    __param(1, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [tareas_request_dto_1.CrearTareaRequestDto, Object]),
    __metadata("design:returntype", void 0)
], TareasController.prototype, "crearTarea", null);
__decorate([
    common_1.Get('usuario'),
    openapi.ApiResponse({ status: 200, type: [require("../../database/entities/proyectos/tarea.entity").Tarea] }),
    __param(0, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TareasController.prototype, "obtenerTareasPorUsuario", null);
__decorate([
    common_1.Patch(':tareaId'),
    openapi.ApiResponse({ status: 200, type: require("../../database/entities/proyectos/tarea.entity").Tarea }),
    __param(0, common_1.Param('tareaId')),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, tareas_request_dto_1.ActualizarTareaRequestDto]),
    __metadata("design:returntype", void 0)
], TareasController.prototype, "actualizarTarea", null);
__decorate([
    common_1.Get(':tareaId'),
    openapi.ApiResponse({ status: 200, type: require("../../database/entities/proyectos/tarea.entity").Tarea }),
    __param(0, common_1.Param('tareaId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TareasController.prototype, "obtenerTareaPorId", null);
__decorate([
    public_decorator_1.Public(),
    common_1.Get(),
    openapi.ApiResponse({ status: 200, type: [require("../../database/entities/proyectos/tarea.entity").Tarea] }),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [tareas_request_dto_1.BuscarTareasRequestParamsDto]),
    __metadata("design:returntype", void 0)
], TareasController.prototype, "obtenerTareas", null);
TareasController = __decorate([
    swagger_1.ApiTags('Tareas'),
    common_1.Controller('tareas'),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    __metadata("design:paramtypes", [tareas_service_1.TareasService])
], TareasController);
exports.TareasController = TareasController;
//# sourceMappingURL=tareas.controller.js.map