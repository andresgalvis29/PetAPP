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
exports.RegistrosHorasComponentesService = void 0;
const componente_entity_1 = require("../../database/entities/proyectos/componente.entity");
const registro_horas_componente_entity_1 = require("../../database/entities/proyectos/registro-horas_componente.entity");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let RegistrosHorasComponentesService = class RegistrosHorasComponentesService {
    constructor(registroHorasRepo, componenteRepo) {
        this.registroHorasRepo = registroHorasRepo;
        this.componenteRepo = componenteRepo;
    }
    async crearRegistroHoras(registroHoras) {
        const componente = await this.componenteRepo.findOne(registroHoras.componenteId);
        if (!componente) {
            throw new common_1.NotFoundException(`No existe el componente ${registroHoras.componenteId}`);
        }
        const nuevoRegistroHoras = this.registroHorasRepo.create(registroHoras);
        nuevoRegistroHoras.componente = componente;
        return this.registroHorasRepo.save(nuevoRegistroHoras);
    }
    async actualizarRegistroHoras(registroHorasId, registroHoras) {
        const registroHorasActual = await this.registroHorasRepo.findOne(registroHorasId);
        if (!registroHorasActual) {
            throw new common_1.NotFoundException(`No existe el registro de horas para el componente ${registroHoras.componenteId}`);
        }
        return this.registroHorasRepo.update(registroHorasActual, registroHoras);
    }
};
RegistrosHorasComponentesService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(registro_horas_componente_entity_1.RegistroHorasCompoente)),
    __param(1, typeorm_1.InjectRepository(componente_entity_1.Componente)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], RegistrosHorasComponentesService);
exports.RegistrosHorasComponentesService = RegistrosHorasComponentesService;
//# sourceMappingURL=registros-horas-componentes.service.js.map