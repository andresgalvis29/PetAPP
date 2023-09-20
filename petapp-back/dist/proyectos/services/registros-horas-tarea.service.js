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
exports.RegistrosHorasTareaService = void 0;
const tarea_entity_1 = require("../../database/entities/proyectos/tarea.entity");
const registro_horas_tarea_entity_1 = require("../../database/entities/proyectos/registro-horas_tarea.entity");
const typeorm_1 = require("@nestjs/typeorm");
const common_1 = require("@nestjs/common");
const typeorm_2 = require("typeorm");
let RegistrosHorasTareaService = class RegistrosHorasTareaService {
    constructor(registroHorasRepo, tareaRepo) {
        this.registroHorasRepo = registroHorasRepo;
        this.tareaRepo = tareaRepo;
    }
    async crearRegistroHoras(registroHoras) {
        const tarea = await this.tareaRepo.findOne(registroHoras.tareaId);
        if (!tarea) {
            throw new common_1.NotFoundException(`No existe la tarea ${registroHoras.tareaId}`);
        }
        const nuevoRegistroHoras = this.registroHorasRepo.create(registroHoras);
        nuevoRegistroHoras.tarea = tarea;
        return this.registroHorasRepo.save(nuevoRegistroHoras);
    }
};
RegistrosHorasTareaService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(registro_horas_tarea_entity_1.RegistroHorasTarea)),
    __param(1, typeorm_1.InjectRepository(tarea_entity_1.Tarea)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], RegistrosHorasTareaService);
exports.RegistrosHorasTareaService = RegistrosHorasTareaService;
//# sourceMappingURL=registros-horas-tarea.service.js.map