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
exports.DuenosService = void 0;
const dueno_entity_1 = require("./../../database/entities/dueno.entity");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let DuenosService = class DuenosService {
    constructor(_duenosRepo) {
        this._duenosRepo = _duenosRepo;
    }
    async crearDueno(dueno) {
        const duenoExistente = await this._duenosRepo.findOne({ identificacion: dueno.identificacion });
        if (duenoExistente) {
            throw new common_1.ConflictException('Ya existe un dueno con esa identificación');
        }
        const formato = dueno.imagen.split(';')[0].split('/')[1];
        if (formato !== 'png' && formato !== 'jpg' && formato !== 'jpeg') {
            throw new common_1.ConflictException('El formato de la imagen no es válido');
        }
        let base64Data;
        switch (formato) {
            case 'png':
                base64Data = dueno.imagen.replace(/^data:image\/png;base64,/, '');
                break;
            case 'jpeg':
                base64Data = dueno.imagen.replace(/^data:image\/jpeg;base64,/, '');
                break;
            case 'jpg':
                base64Data = dueno.imagen.replace(/^data:image\/jpg;base64,/, '');
                break;
        }
        const random = Math.floor(Math.random() * 1000000);
        console.log(base64Data);
        require('fs').writeFile(`${random}out.${formato}`, base64Data, 'base64', function (err) {
            console.log(err);
        });
        const nuevoDueno = this._duenosRepo.create(dueno);
        nuevoDueno.imagen = `${random}out.${formato}`;
        return await this._duenosRepo.save(nuevoDueno);
    }
    async obtenerDuenos(query) {
        if (query.identificacion && query.identificacion.length > 0) {
            return await this._duenosRepo.find({
                where: {
                    identificacion: typeorm_2.Like(`${query.identificacion}%`)
                },
                relations: ['mascotas']
            });
        }
        else {
            return await this._duenosRepo.find({ relations: ['mascotas'] });
        }
    }
    async obtenerUnDueno(params) {
        return await this._duenosRepo.findOne(params.duenoId);
    }
    async actualizarDueno(params, body) {
        const duenoEncontrado = await this._duenosRepo.findOne(params.duenoId);
        if (!duenoEncontrado) {
            throw new common_1.NotFoundException('No se encontró el dueno');
        }
        const duenoActualizado = this._duenosRepo.merge(duenoEncontrado, body);
        return await this._duenosRepo.save(duenoActualizado);
    }
};
DuenosService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(dueno_entity_1.Dueno)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], DuenosService);
exports.DuenosService = DuenosService;
//# sourceMappingURL=duenos.service.js.map