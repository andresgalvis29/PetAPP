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
exports.UsuariosService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const usuario_entity_1 = require("../../database/entities/usuarios/usuario.entity");
const google_credential_model_1 = require("../../auth/models/google-credential.model");
const roles_model_1 = require("../../auth/models/roles.model");
let UsuariosService = class UsuariosService {
    constructor(usuarioRepo) {
        this.usuarioRepo = usuarioRepo;
    }
    async buscarPorEmailOCrear(email, credencialCliente) {
        const user = await this.usuarioRepo.findOne({ where: { email } });
        if (!user) {
            const nuevoUsuario = this.usuarioRepo.create({
                email,
                imagen: credencialCliente === null || credencialCliente === void 0 ? void 0 : credencialCliente.user.photoURL,
                nombres: credencialCliente === null || credencialCliente === void 0 ? void 0 : credencialCliente.user.displayName,
                rol: roles_model_1.Rol.ARQUITECTO_DESARROLLADOR,
            });
            const usuarioCreado = await this.usuarioRepo.save(nuevoUsuario);
            return usuarioCreado;
        }
        return user;
    }
    async buscarPorId(id) {
        const usuario = this.usuarioRepo.findOne(id);
        if (!usuario) {
            throw new common_1.NotFoundException(`No existe el usuario ${id}`);
        }
        return usuario;
    }
};
UsuariosService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(usuario_entity_1.Usuario)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], UsuariosService);
exports.UsuariosService = UsuariosService;
//# sourceMappingURL=usuarios.service.js.map