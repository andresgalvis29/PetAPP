"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CitasModule = void 0;
const medicamentos_cita_entity_1 = require("../database/entities/medicamentos-cita.entity");
const medicamento_entity_1 = require("./../database/entities/medicamento.entity");
const mascota_entity_1 = require("./../database/entities/mascota.entity");
const cita_entity_1 = require("./../database/entities/cita.entity");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const citas_controller_1 = require("./controllers/citas.controller");
const citas_service_1 = require("./services/citas.service");
let CitasModule = class CitasModule {
};
CitasModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([cita_entity_1.Cita, mascota_entity_1.Mascota, medicamento_entity_1.Medicamento, medicamentos_cita_entity_1.MedicamentosCita])],
        controllers: [citas_controller_1.CitasController],
        providers: [citas_service_1.CitasService]
    })
], CitasModule);
exports.CitasModule = CitasModule;
//# sourceMappingURL=citas.module.js.map