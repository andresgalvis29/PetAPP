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
exports.JwtGeneratorService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const token_model_1 = require("../../../auth/models/token.model");
let JwtGeneratorService = class JwtGeneratorService {
    constructor(jwtService) {
        this.jwtService = jwtService;
    }
    generateJWT(usuario) {
        const payload = { rol: usuario.rol, sub: usuario.id };
        return {
            access_token: this.jwtService.sign(payload, {
                expiresIn: '365d',
            }),
        };
    }
};
JwtGeneratorService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _a : Object])
], JwtGeneratorService);
exports.JwtGeneratorService = JwtGeneratorService;
//# sourceMappingURL=jwt-generator.service.js.map