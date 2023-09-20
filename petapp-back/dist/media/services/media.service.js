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
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediaService = void 0;
const dueno_entity_1 = require("./../../database/entities/dueno.entity");
const typeorm_1 = require("@nestjs/typeorm");
const common_1 = require("@nestjs/common");
const typeorm_2 = require("typeorm");
const mascota_entity_1 = require("../../database/entities/mascota.entity");
let MediaService = class MediaService {
    constructor(_duenoRepo, _mascotaRepo) {
        this._duenoRepo = _duenoRepo;
        this._mascotaRepo = _mascotaRepo;
    }
    async obtenerFotoDuenoPorId(duenoId) {
        const dueno = await this._duenoRepo.findOne(duenoId);
        return dueno.imagen;
    }
    async obtenerFotoMascotaPorId(mascotaId) {
        const mascota = await this._mascotaRepo.findOne(mascotaId);
        return mascota.imagen;
    }
};
MediaService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(dueno_entity_1.Dueno)),
    __param(1, typeorm_1.InjectRepository(mascota_entity_1.Mascota)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _b : Object])
], MediaService);
exports.MediaService = MediaService;
//# sourceMappingURL=media.service.js.map