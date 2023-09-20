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
Object.defineProperty(exports, "__esModule", { value: true });
exports.MedicamentosController = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const medicamentos_service_1 = require("./../services/medicamentos.service");
const medicamentos_dto_1 = require("./../dtos/medicamentos.dto");
const common_1 = require("@nestjs/common");
let MedicamentosController = class MedicamentosController {
    constructor(_medicamentosService) {
        this._medicamentosService = _medicamentosService;
    }
    _crearMedicamento(medicamento) {
        return this._medicamentosService.crearMedicamento(medicamento);
    }
    _obtenerMedicamentos(query) {
        return this._medicamentosService.obtenerMedicamentos(query);
    }
};
__decorate([
    common_1.Post(),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [medicamentos_dto_1.CrearMedicamentoRequestBodyDto]),
    __metadata("design:returntype", void 0)
], MedicamentosController.prototype, "_crearMedicamento", null);
__decorate([
    common_1.Get(),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [medicamentos_dto_1.ObtenerMedicamentosQueryDto]),
    __metadata("design:returntype", void 0)
], MedicamentosController.prototype, "_obtenerMedicamentos", null);
MedicamentosController = __decorate([
    swagger_1.ApiTags('Medicamentos'),
    common_1.Controller('medicamentos'),
    __metadata("design:paramtypes", [medicamentos_service_1.MedicamentosService])
], MedicamentosController);
exports.MedicamentosController = MedicamentosController;
//# sourceMappingURL=medicamentos.controller.js.map