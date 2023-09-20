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
exports.MascotasController = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const mascotas_service_1 = require("./../services/mascotas.service");
const mascota_request_dto_1 = require("./../dtos/mascota-request.dto");
const common_1 = require("@nestjs/common");
let MascotasController = class MascotasController {
    constructor(_mascotasService) {
        this._mascotasService = _mascotasService;
    }
    _crearMascota(mascota) {
        return this._mascotasService.crearMascota(mascota);
    }
    _obtenerMascotasPorDueno(params) {
        return this._mascotasService.obtenerMascotasPorDueno(params);
    }
    _obtenerMascotaPorId(params) {
        return this._mascotasService.obtenerMascotaPorId(params);
    }
    _actualizarMascota(params, mascota) {
        return this._mascotasService.actualizarMascota(params, mascota);
    }
};
__decorate([
    common_1.Post(),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [mascota_request_dto_1.CrearMascotaRequestBodyDto]),
    __metadata("design:returntype", void 0)
], MascotasController.prototype, "_crearMascota", null);
__decorate([
    common_1.Get('dueno/:duenoId'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [mascota_request_dto_1.ObtenerMascotasPorDuenoRequestParamsDto]),
    __metadata("design:returntype", void 0)
], MascotasController.prototype, "_obtenerMascotasPorDueno", null);
__decorate([
    common_1.Get(':mascotaId'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [mascota_request_dto_1.ObtenerMascotaPorIdRequestParamsDto]),
    __metadata("design:returntype", void 0)
], MascotasController.prototype, "_obtenerMascotaPorId", null);
__decorate([
    common_1.Put(':mascotaId'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, common_1.Param()),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [mascota_request_dto_1.ActualizarMascotaRequestParamsDto,
        mascota_request_dto_1.ActualizarMascotaRequestBodyDto]),
    __metadata("design:returntype", void 0)
], MascotasController.prototype, "_actualizarMascota", null);
MascotasController = __decorate([
    swagger_1.ApiTags('Mascotas'),
    common_1.Controller('mascotas'),
    __metadata("design:paramtypes", [mascotas_service_1.MascotasService])
], MascotasController);
exports.MascotasController = MascotasController;
//# sourceMappingURL=mascotas.controller.js.map