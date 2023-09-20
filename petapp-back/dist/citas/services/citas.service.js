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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CitasService = void 0;
const medicamento_entity_1 = require("./../../database/entities/medicamento.entity");
const cita_entity_1 = require("./../../database/entities/cita.entity");
const mascota_entity_1 = require("./../../database/entities/mascota.entity");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const medicamentos_cita_entity_1 = require("../../database/entities/medicamentos-cita.entity");
let CitasService = class CitasService {
    constructor(_mascotasRepo, _citasRepo, _medicamentosRepo, _medicamentosCitaRepo) {
        this._mascotasRepo = _mascotasRepo;
        this._citasRepo = _citasRepo;
        this._medicamentosRepo = _medicamentosRepo;
        this._medicamentosCitaRepo = _medicamentosCitaRepo;
    }
    async crearCita(body) {
        const { mascotaId } = body, datosCita = __rest(body, ["mascotaId"]);
        const mascota = await this._mascotasRepo.findOne(mascotaId);
        if (!mascota) {
            throw new common_1.NotFoundException('No se encontró la mascota');
        }
        let cita = this._citasRepo.create(datosCita);
        cita.mascota = mascota;
        return this._citasRepo.save(cita);
    }
    obtenerCitas() {
        return this._citasRepo.find({ relations: ['mascota', 'mascota.dueno'] });
    }
    obtenerCita(citaId) {
        return this._citasRepo.findOne(citaId, { relations: ['mascota', 'mascota.dueno'] });
    }
    async agregarMedicamentoACita(citaId, medicamentoId) {
        const medicamento = await this._medicamentosRepo.findOne(medicamentoId);
        if (!medicamento) {
            throw new common_1.NotFoundException('No se encontró el medicamento');
        }
        const cita = await this._citasRepo.findOne(citaId);
        if (!cita) {
            throw new common_1.NotFoundException('No se encontró la cita');
        }
        const medicamentosCitaNuevo = this._medicamentosCitaRepo.create({
            cita,
            medicamento
        });
        return this._medicamentosCitaRepo.save(medicamentosCitaNuevo);
    }
    async obtenerMedicamentosDeCita(citaId) {
        const medicamentosCita = await this._medicamentosCitaRepo.find({
            where: {
                cita: { id: citaId }
            },
            relations: ['medicamento']
        });
        console.log(medicamentosCita);
        return medicamentosCita;
    }
    async actualizarMedicamentosCita(medicamentosCitaId, body) {
        const medicamentosCita = await this._medicamentosCitaRepo.findOne(medicamentosCitaId);
        if (!medicamentosCita) {
            throw new common_1.NotFoundException('No se encontró el medicamento');
        }
        this._medicamentosCitaRepo.merge(medicamentosCita, body);
        return this._medicamentosCitaRepo.save(medicamentosCita);
    }
};
CitasService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(mascota_entity_1.Mascota)),
    __param(1, typeorm_1.InjectRepository(cita_entity_1.Cita)),
    __param(2, typeorm_1.InjectRepository(medicamento_entity_1.Medicamento)),
    __param(3, typeorm_1.InjectRepository(medicamentos_cita_entity_1.MedicamentosCita)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _b : Object, typeof (_c = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _c : Object, typeof (_d = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _d : Object])
], CitasService);
exports.CitasService = CitasService;
//# sourceMappingURL=citas.service.js.map