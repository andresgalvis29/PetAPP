"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const Joi = require("joi");
const auth_module_1 = require("./auth/auth.module");
const common_module_1 = require("./common/common.module");
const config_1 = require("@nestjs/config");
const database_module_1 = require("./database/database.module");
const common_1 = require("@nestjs/common");
const usuarios_module_1 = require("./usuarios/usuarios.module");
const config_2 = require("./config");
const enviroments_1 = require("./enviroments");
const duenos_module_1 = require("./duenos/duenos.module");
const mascotas_module_1 = require("./mascotas/mascotas.module");
const medicamentos_module_1 = require("./medicamentos/medicamentos.module");
const citas_module_1 = require("./citas/citas.module");
const media_module_1 = require("./media/media.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            config_1.ConfigModule.forRoot({
                envFilePath: enviroments_1.enviroments[process.env.NODE_ENV] || '.env',
                load: [config_2.default],
                isGlobal: true,
                validationSchema: Joi.object({
                    JWT_SECRET: Joi.string().required(),
                    POSTGRES_DB: Joi.string().required(),
                    POSTGRES_HOST: Joi.string().required(),
                    POSTGRES_PORT: Joi.number().required(),
                    POSTGRES_USER: Joi.string().required(),
                    POSTGRES_PASSWORD: Joi.string().required()
                })
            }),
            database_module_1.DatabaseModule,
            usuarios_module_1.UsuariosModule,
            auth_module_1.AuthModule,
            common_module_1.CommonModule,
            duenos_module_1.DuenosModule,
            mascotas_module_1.MascotasModule,
            medicamentos_module_1.MedicamentosModule,
            citas_module_1.CitasModule,
            media_module_1.MediaModule
        ],
        controllers: [],
        providers: []
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map