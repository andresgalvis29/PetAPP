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
exports.MedicamentosCita = void 0;
const openapi = require("@nestjs/swagger");
const medicamento_entity_1 = require("./medicamento.entity");
const cita_entity_1 = require("./cita.entity");
const typeorm_1 = require("typeorm");
let MedicamentosCita = class MedicamentosCita {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => String }, cantidad: { required: true, type: () => String }, frecuencia: { required: true, type: () => String }, cita: { required: true, type: () => require("./cita.entity").Cita }, medicamento: { required: true, type: () => require("./medicamento.entity").Medicamento }, createdAt: { required: true, type: () => Object }, updatedAt: { required: true, type: () => Object } };
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn('uuid'),
    __metadata("design:type", String)
], MedicamentosCita.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ type: 'numeric', default: 0 }),
    __metadata("design:type", String)
], MedicamentosCita.prototype, "cantidad", void 0);
__decorate([
    typeorm_1.Column({ type: 'numeric', default: 0 }),
    __metadata("design:type", String)
], MedicamentosCita.prototype, "frecuencia", void 0);
__decorate([
    typeorm_1.ManyToOne(() => cita_entity_1.Cita, (cita) => cita.medicamentosCita),
    typeorm_1.JoinColumn({ name: 'cita_id' }),
    __metadata("design:type", cita_entity_1.Cita)
], MedicamentosCita.prototype, "cita", void 0);
__decorate([
    typeorm_1.ManyToOne(() => medicamento_entity_1.Medicamento, (medicamento) => medicamento.citasMedicamento),
    typeorm_1.JoinColumn({ name: 'medicamento_id' }),
    __metadata("design:type", medicamento_entity_1.Medicamento)
], MedicamentosCita.prototype, "medicamento", void 0);
__decorate([
    typeorm_1.CreateDateColumn({
        name: 'created_at',
        type: 'timestamptz',
        default: () => 'CURRENT_TIMESTAMP'
    }),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], MedicamentosCita.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.UpdateDateColumn({
        name: 'updated_at',
        type: 'timestamptz',
        default: () => 'CURRENT_TIMESTAMP'
    }),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], MedicamentosCita.prototype, "updatedAt", void 0);
MedicamentosCita = __decorate([
    typeorm_1.Entity({
        name: 'medicamentos_citas'
    })
], MedicamentosCita);
exports.MedicamentosCita = MedicamentosCita;
//# sourceMappingURL=medicamentos-cita.entity.js.map