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
exports.MedicamentosService = void 0;
const medicamento_entity_1 = require("./../../database/entities/medicamento.entity");
const typeorm_1 = require("@nestjs/typeorm");
const common_1 = require("@nestjs/common");
const typeorm_2 = require("typeorm");
let MedicamentosService = class MedicamentosService {
    constructor(_medicamentoRepo) {
        this._medicamentoRepo = _medicamentoRepo;
    }
    crearMedicamento(body) {
        const medicamentoCreado = this._medicamentoRepo.create(body);
        return this._medicamentoRepo.save(medicamentoCreado);
    }
    obtenerMedicamentos(query) {
        if (query.nombre && query.nombre.length > 0) {
            return this._medicamentoRepo.find({
                where: {
                    nombre: typeorm_2.ILike(`%${query.nombre}%`)
                }
            });
        }
        else {
            return this._medicamentoRepo.find();
        }
    }
};
MedicamentosService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(medicamento_entity_1.Medicamento)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], MedicamentosService);
exports.MedicamentosService = MedicamentosService;
//# sourceMappingURL=medicamentos.service.js.map