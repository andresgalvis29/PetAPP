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
exports.TareasService = void 0;
const mesa_entity_1 = require("../../database/entities/proyectos/mesa.entity");
const tarea_entity_1 = require("./../../database/entities/proyectos/tarea.entity");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let TareasService = class TareasService {
    constructor(tareasRepo, mesasRepo) {
        this.tareasRepo = tareasRepo;
        this.mesasRepo = mesasRepo;
    }
    async crearTarea(tarea, arquitectoDesarrollador) {
        const mesa = await this.mesasRepo.findOne(tarea.mesaId);
        if (!mesa) {
            throw new common_1.NotFoundException(`No existe la mesa ${tarea.mesaId}`);
        }
        const nuevaTarea = this.tareasRepo.create(tarea);
        nuevaTarea.mesa = mesa;
        nuevaTarea.arquitectoDesarrollador = arquitectoDesarrollador;
        return this.tareasRepo.save(nuevaTarea);
    }
    async actualizarTarea(tareaId, tarea) {
        const tareaExistente = await this.tareasRepo.findOne(tareaId);
        if (!tareaExistente) {
            throw new common_1.NotFoundException(`No existe la tarea ${tareaId}`);
        }
        const nuevaTarea = this.tareasRepo.merge(tareaExistente, tarea);
        if (tarea.mesaId) {
            const mesa = await this.mesasRepo.findOne(tarea.mesaId);
            if (!mesa) {
                throw new common_1.NotFoundException(`No existe la mesa ${tarea.mesaId}`);
            }
            nuevaTarea.mesa = mesa;
        }
        return this.tareasRepo.save(nuevaTarea);
    }
    async obtenerTareaPorId(tareaId) {
        const tarea = this.tareasRepo.findOne(tareaId, {
            relations: ['registrosHoras', 'mesa'],
        });
        if (!tarea) {
            throw new common_1.NotFoundException(`No existe la tarea ${tareaId}`);
        }
        return tarea;
    }
    async obtenerTareas(queryParams) {
        if (queryParams.mesaId && queryParams.fechaInicio && queryParams.fechaFin) {
            return this.tareasRepo.find({
                where: {
                    proyecto: {
                        id: queryParams.mesaId,
                    },
                    updatedAt: typeorm_2.Between(queryParams.fechaInicio, queryParams.fechaFin),
                },
                relations: ['registrosHoras', 'mesa'],
            });
        }
        return this.tareasRepo.find({
            relations: ['registrosHoras', 'mesa'],
        });
    }
    async obtenerTareasPorUsuario(colaborador) {
        return this.tareasRepo.find({
            where: { colaborador },
            relations: ['registrosHoras', 'mesa'],
        });
    }
};
TareasService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(tarea_entity_1.Tarea)),
    __param(1, typeorm_1.InjectRepository(mesa_entity_1.Mesa)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], TareasService);
exports.TareasService = TareasService;
//# sourceMappingURL=tareas.service.js.map