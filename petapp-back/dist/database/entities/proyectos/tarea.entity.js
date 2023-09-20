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
exports.Tarea = void 0;
const openapi = require("@nestjs/swagger");
const mesa_entity_1 = require("./mesa.entity");
const usuario_entity_1 = require("./../usuarios/usuario.entity");
const typeorm_1 = require("typeorm");
const registro_horas_tarea_entity_1 = require("./registro-horas_tarea.entity");
let Tarea = class Tarea {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => String }, nombre: { required: true, type: () => String }, descripcion: { required: true, type: () => String }, mesa: { required: true, type: () => require("./mesa.entity").Mesa }, arquitectoDesarrollador: { required: true, type: () => require("../usuarios/usuario.entity").Usuario }, registrosHoras: { required: true, type: () => [require("./registro-horas_tarea.entity").RegistroHorasTarea] }, createdAt: { required: true, type: () => Date }, updatedAt: { required: true, type: () => Date } };
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn('uuid'),
    __metadata("design:type", String)
], Tarea.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], Tarea.prototype, "nombre", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', length: 300 }),
    __metadata("design:type", String)
], Tarea.prototype, "descripcion", void 0);
__decorate([
    typeorm_1.ManyToOne(() => mesa_entity_1.Mesa, (mesa) => mesa.tareas),
    typeorm_1.JoinColumn({ name: 'mesa_id' }),
    __metadata("design:type", mesa_entity_1.Mesa)
], Tarea.prototype, "mesa", void 0);
__decorate([
    typeorm_1.ManyToOne(() => usuario_entity_1.Usuario, (arquitectoDesarrollador) => arquitectoDesarrollador.tareas),
    typeorm_1.JoinColumn({ name: 'arquitecto-desarrollador_id' }),
    __metadata("design:type", usuario_entity_1.Usuario)
], Tarea.prototype, "arquitectoDesarrollador", void 0);
__decorate([
    typeorm_1.OneToMany(() => registro_horas_tarea_entity_1.RegistroHorasTarea, (registrosHoras) => registrosHoras.tarea),
    __metadata("design:type", Array)
], Tarea.prototype, "registrosHoras", void 0);
__decorate([
    typeorm_1.CreateDateColumn({
        name: 'created_at',
        type: 'timestamptz',
        default: () => 'CURRENT_TIMESTAMP',
    }),
    __metadata("design:type", Date)
], Tarea.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.UpdateDateColumn({
        name: 'updated_at',
        type: 'timestamptz',
        default: () => 'CURRENT_TIMESTAMP',
    }),
    __metadata("design:type", Date)
], Tarea.prototype, "updatedAt", void 0);
Tarea = __decorate([
    typeorm_1.Entity({
        name: 'tareas',
    })
], Tarea);
exports.Tarea = Tarea;
//# sourceMappingURL=tarea.entity.js.map