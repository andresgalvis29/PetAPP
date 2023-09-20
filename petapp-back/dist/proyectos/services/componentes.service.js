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
exports.ComponentesService = void 0;
const componente_entity_1 = require("../../database/entities/proyectos/componente.entity");
const mesa_entity_1 = require("../../database/entities/proyectos/mesa.entity");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let ComponentesService = class ComponentesService {
    constructor(componentesRepo, mesasRepo) {
        this.componentesRepo = componentesRepo;
        this.mesasRepo = mesasRepo;
    }
    async crearComponente(componente) {
        const mesa = await this.mesasRepo.findOne(componente.mesaId);
        if (!mesa) {
            throw new common_1.NotFoundException(`No existe la mesa ${componente.mesaId}`);
        }
        const nuevoComponente = this.componentesRepo.create(componente);
        nuevoComponente.mesa = mesa;
        return this.componentesRepo.save(nuevoComponente);
    }
    async actualizarComponente(componenteId, componente) {
        const compoenenteExistente = await this.componentesRepo.findOne(componenteId);
        if (!compoenenteExistente) {
            throw new common_1.NotFoundException(`No existe el componente ${componenteId}`);
        }
        const nuevaTarea = this.componentesRepo.merge(compoenenteExistente, componente);
        if (componente.mesaId) {
            const mesa = await this.mesasRepo.findOne(componente.mesaId);
            if (!mesa) {
                throw new common_1.NotFoundException(`No existe la mesa ${componente.mesaId}`);
            }
            nuevaTarea.mesa = mesa;
        }
        return this.componentesRepo.save(nuevaTarea);
    }
    async obtenerComponentePorId(componenteId) {
        const componente = this.componentesRepo.findOne(componenteId, {
            relations: ['registrosHoras', 'mesa'],
        });
        if (!componente) {
            throw new common_1.NotFoundException(`No existe el componente ${componenteId}`);
        }
        return componente;
    }
    async obtenerComponentes(queryParams) {
        if (queryParams.mesaId && queryParams.fechaInicio && queryParams.fechaFin) {
            return this.componentesRepo.find({
                where: {
                    mesa: {
                        id: queryParams.mesaId,
                    },
                    updatedAt: typeorm_2.Between(queryParams.fechaInicio, queryParams.fechaFin),
                },
                relations: ['registrosHoras', 'mesa'],
            });
        }
        return this.componentesRepo.find({
            relations: ['registrosHoras', 'mesa'],
        });
    }
};
ComponentesService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(componente_entity_1.Componente)),
    __param(1, typeorm_1.InjectRepository(mesa_entity_1.Mesa)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], ComponentesService);
exports.ComponentesService = ComponentesService;
//# sourceMappingURL=componentes.service.js.map