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
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MascotasService = void 0;
const dueno_entity_1 = require("./../../database/entities/dueno.entity");
const mascota_entity_1 = require("./../../database/entities/mascota.entity");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let MascotasService = class MascotasService {
    constructor(_mascotasRepo, _duenosRepo) {
        this._mascotasRepo = _mascotasRepo;
        this._duenosRepo = _duenosRepo;
    }
    async crearMascota(mascota) {
        const duenoEncontrado = await this._duenosRepo.findOne(mascota.duenoId);
        if (!duenoEncontrado) {
            throw new common_1.NotFoundException('No se encontró el dueño');
        }
        const formato = mascota.imagen.split(';')[0].split('/')[1];
        if (formato !== 'png' && formato !== 'jpg' && formato !== 'jpeg') {
            throw new common_1.ConflictException('El formato de la imagen no es válido');
        }
        let base64Data;
        switch (formato) {
            case 'png':
                base64Data = mascota.imagen.replace(/^data:image\/png;base64,/, '');
                break;
            case 'jpeg':
                base64Data = mascota.imagen.replace(/^data:image\/jpeg;base64,/, '');
                break;
            case 'jpg':
                base64Data = mascota.imagen.replace(/^data:image\/jpg;base64,/, '');
                break;
        }
        const random = Math.floor(Math.random() * 1000000);
        console.log(base64Data);
        require('fs').writeFile(`${random}out.${formato}`, base64Data, 'base64', function (err) {
            console.log(err);
        });
        const nuevaMascota = this._mascotasRepo.create(mascota);
        nuevaMascota.imagen = `${random}out.${formato}`;
        nuevaMascota.dueno = duenoEncontrado;
        return this._mascotasRepo.save(nuevaMascota);
    }
    async obtenerMascotasPorDueno(params) {
        const duenoEncontrado = await this._duenosRepo.findOne(params.duenoId);
        if (!duenoEncontrado) {
            throw new common_1.NotFoundException('No se encontró el dueño');
        }
        return await this._mascotasRepo.find({ where: { dueno: duenoEncontrado } });
    }
    obtenerMascotaPorId(params) {
        console.log(params);
        return this._mascotasRepo.findOne(params.mascotaId);
    }
    async actualizarMascota(params, body) {
        const mascotaEncontrada = await this._mascotasRepo.findOne(params.mascotaId);
        if (!mascotaEncontrada) {
            throw new common_1.NotFoundException('No se encontró la mascota');
        }
        const { duenoId } = body, datosMascota = __rest(body, ["duenoId"]);
        const mascotaActualizada = this._mascotasRepo.merge(mascotaEncontrada, datosMascota);
        return this._mascotasRepo.save(mascotaActualizada);
    }
};
MascotasService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(mascota_entity_1.Mascota)),
    __param(1, typeorm_1.InjectRepository(dueno_entity_1.Dueno)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _b : Object])
], MascotasService);
exports.MascotasService = MascotasService;
//# sourceMappingURL=mascotas.service.js.map