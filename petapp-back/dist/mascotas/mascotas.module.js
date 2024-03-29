"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MascotasModule = void 0;
const dueno_entity_1 = require("./../database/entities/dueno.entity");
const mascota_entity_1 = require("./../database/entities/mascota.entity");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const mascotas_controller_1 = require("./controllers/mascotas.controller");
const mascotas_service_1 = require("./services/mascotas.service");
let MascotasModule = class MascotasModule {
};
MascotasModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([mascota_entity_1.Mascota, dueno_entity_1.Dueno])],
        controllers: [mascotas_controller_1.MascotasController],
        providers: [mascotas_service_1.MascotasService]
    })
], MascotasModule);
exports.MascotasModule = MascotasModule;
//# sourceMappingURL=mascotas.module.js.map