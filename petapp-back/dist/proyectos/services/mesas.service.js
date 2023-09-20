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
exports.MesasService = void 0;
const usuario_entity_1 = require("../../database/entities/usuarios/usuario.entity");
const mesa_entity_1 = require("../../database/entities/proyectos/mesa.entity");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const tarea_entity_1 = require("../../database/entities/proyectos/tarea.entity");
const componente_entity_1 = require("../../database/entities/proyectos/componente.entity");
let MesasService = class MesasService {
    constructor(mesasRepo, tareasRepo, componentesRepo, usuariosRepo) {
        this.mesasRepo = mesasRepo;
        this.tareasRepo = tareasRepo;
        this.componentesRepo = componentesRepo;
        this.usuariosRepo = usuariosRepo;
    }
    async crearMesa(mesa) {
        const facilitador = await this.usuariosRepo.findOne(mesa.facilitadorId);
        if (!facilitador) {
            throw new common_1.NotFoundException(`No existe el facilitador ${mesa.facilitadorId}`);
        }
        const nuevaMesa = this.mesasRepo.create(mesa);
        nuevaMesa.facilitador = facilitador;
        return this.mesasRepo.save(nuevaMesa);
    }
    async obtenerMesas() {
        const proyectosColaborador = await this.mesasRepo.find();
        return {
            proyectosColaborador,
        };
    }
    async obtenerTareasMesaYArquitectoDesarrollador(mesaId, usuario) {
        const tareas = await this.tareasRepo.find({
            relations: ['registrosHoras', 'mesa'],
            where: {
                arquitectoDesarrollador: {
                    id: usuario.id,
                },
                mesa: {
                    id: mesaId,
                },
            },
        });
        return tareas;
    }
    async obtenerComponentesPorMesa(mesaId) {
        const componentes = await this.componentesRepo.find({
            relations: ['registrosHoras', 'mesa'],
            where: {
                mesa: {
                    id: mesaId,
                },
            },
        });
        return componentes;
    }
};
MesasService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(mesa_entity_1.Mesa)),
    __param(1, typeorm_1.InjectRepository(tarea_entity_1.Tarea)),
    __param(2, typeorm_1.InjectRepository(componente_entity_1.Componente)),
    __param(3, typeorm_1.InjectRepository(usuario_entity_1.Usuario)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], MesasService);
exports.MesasService = MesasService;
//# sourceMappingURL=mesas.service.js.map