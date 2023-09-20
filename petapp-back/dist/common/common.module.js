"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommonModule = void 0;
const jwt_1 = require("@nestjs/jwt");
const common_1 = require("@nestjs/common");
const jwt_generator_service_1 = require("./utils/jwt-generator/jwt-generator.service");
const config_1 = require("../config");
let CommonModule = class CommonModule {
};
CommonModule = __decorate([
    common_1.Module({
        imports: [
            jwt_1.JwtModule.registerAsync({
                inject: [config_1.default.KEY],
                useFactory: (configService) => {
                    return {
                        secret: configService.jwtSecret,
                        signOptions: {
                            expiresIn: '10d',
                        },
                    };
                },
            }),
        ],
        providers: [jwt_generator_service_1.JwtGeneratorService],
        exports: [jwt_generator_service_1.JwtGeneratorService],
    })
], CommonModule);
exports.CommonModule = CommonModule;
//# sourceMappingURL=common.module.js.map