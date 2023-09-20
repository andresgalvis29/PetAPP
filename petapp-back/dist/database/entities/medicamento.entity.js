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
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Medicamento = void 0;
const openapi = require("@nestjs/swagger");
const medicamentos_cita_entity_1 = require("./medicamentos-cita.entity");
const typeorm_1 = require("typeorm");
let Medicamento = class Medicamento {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => String }, nombre: { required: true, type: () => String }, unidadMedida: { required: true, type: () => String }, tipo: { required: true, type: () => String }, citasMedicamento: { required: true }, createdAt: { required: true, type: () => Object }, updatedAt: { required: true, type: () => Object } };
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn('uuid'),
    __metadata("design:type", String)
], Medicamento.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', length: 250 }),
    __metadata("design:type", String)
], Medicamento.prototype, "nombre", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', length: 20, name: 'unidad_medida' }),
    __metadata("design:type", String)
], Medicamento.prototype, "unidadMedida", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], Medicamento.prototype, "tipo", void 0);
__decorate([
    typeorm_1.OneToMany(() => medicamentos_cita_entity_1.MedicamentosCita, (citasMedicamento) => citasMedicamento.medicamento),
    __metadata("design:type", Array)
], Medicamento.prototype, "citasMedicamento", void 0);
__decorate([
    typeorm_1.CreateDateColumn({
        name: 'created_at',
        type: 'timestamptz',
        default: () => 'CURRENT_TIMESTAMP'
    }),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], Medicamento.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.UpdateDateColumn({
        name: 'updated_at',
        type: 'timestamptz',
        default: () => 'CURRENT_TIMESTAMP'
    }),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], Medicamento.prototype, "updatedAt", void 0);
Medicamento = __decorate([
    typeorm_1.Entity({
        name: 'medicamentos'
    })
], Medicamento);
exports.Medicamento = Medicamento;
//# sourceMappingURL=medicamento.entity.js.map