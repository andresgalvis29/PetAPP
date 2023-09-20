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
exports.DuenosController = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const duenos_request_dto_1 = require("./../dtos/duenos-request.dto");
const common_1 = require("@nestjs/common");
const duenos_service_1 = require("../services/duenos.service");
let DuenosController = class DuenosController {
    constructor(_duenosService) {
        this._duenosService = _duenosService;
    }
    _crearDueno(dueno) {
        return this._duenosService.crearDueno(dueno);
    }
    _obtenerDuenos(query) {
        return this._duenosService.obtenerDuenos(query);
    }
    _obtenerUnDueno(params) {
        return this._duenosService.obtenerUnDueno(params);
    }
    _actualizarDueno(params, dueno) {
        return this._duenosService.actualizarDueno(params, dueno);
    }
};
__decorate([
    common_1.Post(),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [duenos_request_dto_1.CrearDuenoRequestBodyDto]),
    __metadata("design:returntype", void 0)
], DuenosController.prototype, "_crearDueno", null);
__decorate([
    common_1.Get(),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [duenos_request_dto_1.ObtenerDuenoRequestQuertyDto]),
    __metadata("design:returntype", void 0)
], DuenosController.prototype, "_obtenerDuenos", null);
__decorate([
    common_1.Get(':duenoId'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [duenos_request_dto_1.ObtenerDuenoRequestParamsDto]),
    __metadata("design:returntype", void 0)
], DuenosController.prototype, "_obtenerUnDueno", null);
__decorate([
    common_1.Put(':duenoId'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, common_1.Param()),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [duenos_request_dto_1.ActualizarDuenoRequestParamsDto,
        duenos_request_dto_1.ActualizarDuenoRequestBodyDto]),
    __metadata("design:returntype", void 0)
], DuenosController.prototype, "_actualizarDueno", null);
DuenosController = __decorate([
    swagger_1.ApiTags('Dueños de mascotas'),
    common_1.Controller('duenos'),
    __metadata("design:paramtypes", [duenos_service_1.DuenosService])
], DuenosController);
exports.DuenosController = DuenosController;
//# sourceMappingURL=duenos.controller.js.map