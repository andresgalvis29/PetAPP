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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuariosController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const jwt_auth_guard_1 = require("../../auth/guards/jwt-auth.guard");
const roles_model_1 = require("../../auth/models/roles.model");
const roles_decorator_1 = require("../../auth/decorators/roles.decorator");
const roles_guard_1 = require("../../auth/guards/roles.guard");
const express_1 = require("express");
const usuario_entity_1 = require("../../database/entities/usuarios/usuario.entity");
const swagger_1 = require("@nestjs/swagger");
let UsuariosController = class UsuariosController {
    obtenerUsuarioAutenticado(req) {
        const usuario = req.user;
        return usuario;
    }
};
__decorate([
    common_1.Get('perfil'),
    roles_decorator_1.Roles(roles_model_1.Rol.FACILITADOR, roles_model_1.Rol.ARQUITECTO_DESARROLLADOR),
    openapi.ApiResponse({ status: 200, type: require("../../database/entities/usuarios/usuario.entity").Usuario }),
    __param(0, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof express_1.Request !== "undefined" && express_1.Request) === "function" ? _a : Object]),
    __metadata("design:returntype", void 0)
], UsuariosController.prototype, "obtenerUsuarioAutenticado", null);
UsuariosController = __decorate([
    swagger_1.ApiTags('Usuarios'),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    common_1.Controller('usuarios')
], UsuariosController);
exports.UsuariosController = UsuariosController;
//# sourceMappingURL=usuarios.controller.js.map