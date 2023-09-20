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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const usuarios_service_1 = require("../../usuarios/services/usuarios.service");
const rxjs_1 = require("rxjs");
const jwt_generator_service_1 = require("../../common/utils/jwt-generator/jwt-generator.service");
let AuthService = class AuthService {
    constructor(usuariosService, httpService, jwtGeneratorService) {
        this.usuariosService = usuariosService;
        this.httpService = httpService;
        this.jwtGeneratorService = jwtGeneratorService;
    }
    validateUser(credencialCliente) {
        try {
            return this.httpService
                .get(`https://oauth2.googleapis.com/tokeninfo?id_token=${credencialCliente.credential.idToken}`)
                .pipe(rxjs_1.map(async (confirmacionGoogle) => {
                if (confirmacionGoogle.data.aud !== process.env.GOOGLE_CLIENT_ID) {
                    throw new common_1.UnauthorizedException('No es un token de google');
                }
                const usuario = await this.usuariosService.buscarPorEmailOCrear(confirmacionGoogle.data.email, credencialCliente);
                return this.jwtGeneratorService.generateJWT(usuario);
            }));
        }
        catch (error) {
            throw new common_1.UnauthorizedException('No es un token de google');
        }
    }
};
AuthService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [usuarios_service_1.UsuariosService, typeof (_a = typeof common_1.HttpService !== "undefined" && common_1.HttpService) === "function" ? _a : Object, jwt_generator_service_1.JwtGeneratorService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map