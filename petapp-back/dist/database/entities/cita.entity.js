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
exports.Cita = void 0;
const openapi = require("@nestjs/swagger");
const mascota_entity_1 = require("./mascota.entity");
const typeorm_1 = require("typeorm");
const medicamentos_cita_entity_1 = require("./medicamentos-cita.entity");
let Cita = class Cita {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => String }, fecha: { required: true, type: () => String }, motivo: { required: true, type: () => String }, mascota: { required: true, type: () => require("./mascota.entity").Mascota }, medicamentosCita: { required: true }, createdAt: { required: true, type: () => Object }, updatedAt: { required: true, type: () => Object } };
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn('uuid'),
    __metadata("design:type", String)
], Cita.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar' }),
    __metadata("design:type", String)
], Cita.prototype, "fecha", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar' }),
    __metadata("design:type", String)
], Cita.prototype, "motivo", void 0);
__decorate([
    typeorm_1.ManyToOne(() => mascota_entity_1.Mascota, (mascota) => mascota.citas),
    typeorm_1.JoinColumn({ name: 'mascota_id' }),
    __metadata("design:type", mascota_entity_1.Mascota)
], Cita.prototype, "mascota", void 0);
__decorate([
    typeorm_1.OneToMany(() => medicamentos_cita_entity_1.MedicamentosCita, (medicamentosCita) => medicamentosCita.cita),
    __metadata("design:type", Array)
], Cita.prototype, "medicamentosCita", void 0);
__decorate([
    typeorm_1.CreateDateColumn({
        name: 'created_at',
        type: 'timestamptz',
        default: () => 'CURRENT_TIMESTAMP'
    }),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], Cita.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.UpdateDateColumn({
        name: 'updated_at',
        type: 'timestamptz',
        default: () => 'CURRENT_TIMESTAMP'
    }),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], Cita.prototype, "updatedAt", void 0);
Cita = __decorate([
    typeorm_1.Entity({
        name: 'citas'
    })
], Cita);
exports.Cita = Cita;
//# sourceMappingURL=cita.entity.js.map