"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuariosModule = void 0;
const common_module_1 = require("../common/common.module");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const usuario_entity_1 = require("../database/entities/usuarios/usuario.entity");
const usuarios_controller_1 = require("./controllers/usuarios.controller");
const usuarios_service_1 = require("./services/usuarios.service");
let UsuariosModule = class UsuariosModule {
};
UsuariosModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([usuario_entity_1.Usuario]), common_module_1.CommonModule],
        providers: [usuarios_service_1.UsuariosService],
        controllers: [usuarios_controller_1.UsuariosController],
        exports: [usuarios_service_1.UsuariosService],
    })
], UsuariosModule);
exports.UsuariosModule = UsuariosModule;
//# sourceMappingURL=usuarios.module.js.map