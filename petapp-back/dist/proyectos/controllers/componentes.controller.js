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
exports.ComponentesController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const public_decorator_1 = require("../../auth/decorators/public.decorator");
const roles_decorator_1 = require("../../auth/decorators/roles.decorator");
const jwt_auth_guard_1 = require("../../auth/guards/jwt-auth.guard");
const roles_guard_1 = require("../../auth/guards/roles.guard");
const roles_model_1 = require("../../auth/models/roles.model");
const componentes_request_dto_1 = require("../dtos/componentes-request.dto");
const componentes_service_1 = require("../services/componentes.service");
let ComponentesController = class ComponentesController {
    constructor(componentesService) {
        this.componentesService = componentesService;
    }
    crearComponente(componente) {
        return this.componentesService.crearComponente(componente);
    }
    actualizarComponente(componenteId, componente) {
        return this.componentesService.actualizarComponente(componenteId, componente);
    }
    obtenerComponentePorId(componenteId) {
        return this.componentesService.obtenerComponentePorId(componenteId);
    }
    obtenerComponentes(queryParams) {
        return this.componentesService.obtenerComponentes(queryParams);
    }
};
__decorate([
    roles_decorator_1.Roles(roles_model_1.Rol.FACILITADOR),
    common_1.Post(),
    openapi.ApiResponse({ status: 201, type: require("../../database/entities/proyectos/componente.entity").Componente }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [componentes_request_dto_1.CrearComponenteRequestDto]),
    __metadata("design:returntype", void 0)
], ComponentesController.prototype, "crearComponente", null);
__decorate([
    roles_decorator_1.Roles(roles_model_1.Rol.FACILITADOR),
    common_1.Patch(':componenteId'),
    openapi.ApiResponse({ status: 200, type: require("../../database/entities/proyectos/componente.entity").Componente }),
    __param(0, common_1.Param('componenteId')),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, componentes_request_dto_1.ActualizarComponenteRequestDto]),
    __metadata("design:returntype", void 0)
], ComponentesController.prototype, "actualizarComponente", null);
__decorate([
    roles_decorator_1.Roles(roles_model_1.Rol.FACILITADOR),
    common_1.Get(':componenteId'),
    openapi.ApiResponse({ status: 200, type: require("../../database/entities/proyectos/componente.entity").Componente }),
    __param(0, common_1.Param('componenteId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ComponentesController.prototype, "obtenerComponentePorId", null);
__decorate([
    public_decorator_1.Public(),
    common_1.Get(),
    openapi.ApiResponse({ status: 200, type: [require("../../database/entities/proyectos/componente.entity").Componente] }),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [componentes_request_dto_1.BuscarComponenteRequestParamsDto]),
    __metadata("design:returntype", void 0)
], ComponentesController.prototype, "obtenerComponentes", null);
ComponentesController = __decorate([
    swagger_1.ApiTags('Componentes'),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    common_1.Controller('componentes'),
    __metadata("design:paramtypes", [componentes_service_1.ComponentesService])
], ComponentesController);
exports.ComponentesController = ComponentesController;
//# sourceMappingURL=componentes.controller.js.map