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
exports.MesasController = void 0;
const openapi = require("@nestjs/swagger");
const roles_guard_1 = require("../../auth/guards/roles.guard");
const jwt_auth_guard_1 = require("../../auth/guards/jwt-auth.guard");
const public_decorator_1 = require("../../auth/decorators/public.decorator");
const mesas_service_1 = require("../services/mesas.service");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const mesas_request_dto_1 = require("../dtos/mesas-request.dto");
let MesasController = class MesasController {
    constructor(mesasService) {
        this.mesasService = mesasService;
    }
    crearMesa(mesa) {
        return this.mesasService.crearMesa(mesa);
    }
    obtenerMesas() {
        return this.mesasService.obtenerMesas();
    }
    obtenerTareasPorMesaYArquitectoDesarrollador(mesaId, req) {
        const usuario = req.user;
        return this.mesasService.obtenerTareasMesaYArquitectoDesarrollador(mesaId, usuario);
    }
    obtenerComponentesPorMesa(mesaId) {
        return this.mesasService.obtenerComponentesPorMesa(mesaId);
    }
};
__decorate([
    public_decorator_1.Public(),
    common_1.Post(),
    openapi.ApiResponse({ status: 201, type: require("../../database/entities/proyectos/mesa.entity").Mesa }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [mesas_request_dto_1.CrearMesaRequestDto]),
    __metadata("design:returntype", void 0)
], MesasController.prototype, "crearMesa", null);
__decorate([
    common_1.Get(),
    openapi.ApiResponse({ status: 200 }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MesasController.prototype, "obtenerMesas", null);
__decorate([
    common_1.Get(':mesaId/tareas'),
    openapi.ApiResponse({ status: 200, type: [require("../../database/entities/proyectos/tarea.entity").Tarea] }),
    __param(0, common_1.Param('mesaId')),
    __param(1, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], MesasController.prototype, "obtenerTareasPorMesaYArquitectoDesarrollador", null);
__decorate([
    common_1.Get(':mesaId/componentes'),
    openapi.ApiResponse({ status: 200, type: [require("../../database/entities/proyectos/componente.entity").Componente] }),
    __param(0, common_1.Param('mesaId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MesasController.prototype, "obtenerComponentesPorMesa", null);
MesasController = __decorate([
    swagger_1.ApiTags('Mesas'),
    common_1.Controller('mesas'),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    __metadata("design:paramtypes", [mesas_service_1.MesasService])
], MesasController);
exports.MesasController = MesasController;
//# sourceMappingURL=mesas.controller.js.map