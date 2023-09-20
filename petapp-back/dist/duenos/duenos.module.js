"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DuenosModule = void 0;
const mascota_entity_1 = require("./../database/entities/mascota.entity");
const dueno_entity_1 = require("./../database/entities/dueno.entity");
const typeorm_1 = require("@nestjs/typeorm");
const common_1 = require("@nestjs/common");
const duenos_controller_1 = require("./controllers/duenos.controller");
const duenos_service_1 = require("./services/duenos.service");
let DuenosModule = class DuenosModule {
};
DuenosModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([dueno_entity_1.Dueno, mascota_entity_1.Mascota])],
        controllers: [duenos_controller_1.DuenosController],
        providers: [duenos_service_1.DuenosService]
    })
], DuenosModule);
exports.DuenosModule = DuenosModule;
//# sourceMappingURL=duenos.module.js.map