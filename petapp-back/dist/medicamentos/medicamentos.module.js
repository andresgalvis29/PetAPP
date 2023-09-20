"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MedicamentosModule = void 0;
const medicamento_entity_1 = require("./../database/entities/medicamento.entity");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const medicamentos_controller_1 = require("./controllers/medicamentos.controller");
const medicamentos_service_1 = require("./services/medicamentos.service");
let MedicamentosModule = class MedicamentosModule {
};
MedicamentosModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([medicamento_entity_1.Medicamento])],
        controllers: [medicamentos_controller_1.MedicamentosController],
        providers: [medicamentos_service_1.MedicamentosService]
    })
], MedicamentosModule);
exports.MedicamentosModule = MedicamentosModule;
//# sourceMappingURL=medicamentos.module.js.map