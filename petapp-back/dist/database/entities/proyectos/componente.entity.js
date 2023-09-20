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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Componente = void 0;
const openapi = require("@nestjs/swagger");
const mesa_entity_1 = require("./mesa.entity");
const typeorm_1 = require("typeorm");
const registro_horas_componente_entity_1 = require("./registro-horas_componente.entity");
let Componente = class Componente {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => String }, nombre: { required: true, type: () => String }, descripcion: { required: true, type: () => String }, mesa: { required: true, type: () => require("./mesa.entity").Mesa }, registrosHoras: { required: true, type: () => [require("./registro-horas_componente.entity").RegistroHorasCompoente] }, createdAt: { required: true, type: () => Date }, updatedAt: { required: true, type: () => Date } };
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn('uuid'),
    __metadata("design:type", String)
], Componente.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], Componente.prototype, "nombre", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', length: 300 }),
    __metadata("design:type", String)
], Componente.prototype, "descripcion", void 0);
__decorate([
    typeorm_1.ManyToOne(() => mesa_entity_1.Mesa, (mesa) => mesa.tareas),
    typeorm_1.JoinColumn({ name: 'mesa_id' }),
    __metadata("design:type", mesa_entity_1.Mesa)
], Componente.prototype, "mesa", void 0);
__decorate([
    typeorm_1.OneToMany(() => registro_horas_componente_entity_1.RegistroHorasCompoente, (registrosHoras) => registrosHoras.componente),
    __metadata("design:type", Array)
], Componente.prototype, "registrosHoras", void 0);
__decorate([
    typeorm_1.CreateDateColumn({
        name: 'created_at',
        type: 'timestamptz',
        default: () => 'CURRENT_TIMESTAMP',
    }),
    __metadata("design:type", Date)
], Componente.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.UpdateDateColumn({
        name: 'updated_at',
        type: 'timestamptz',
        default: () => 'CURRENT_TIMESTAMP',
    }),
    __metadata("design:type", Date)
], Componente.prototype, "updatedAt", void 0);
Componente = __decorate([
    typeorm_1.Entity({
        name: 'componentes',
    })
], Componente);
exports.Componente = Componente;
//# sourceMappingURL=componente.entity.js.map