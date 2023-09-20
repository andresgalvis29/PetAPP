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
exports.RegistroHorasTarea = void 0;
const openapi = require("@nestjs/swagger");
const tarea_entity_1 = require("./tarea.entity");
const typeorm_1 = require("typeorm");
let RegistroHorasTarea = class RegistroHorasTarea {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => String }, fecha: { required: true, type: () => String }, horas: { required: true, type: () => Number }, tarea: { required: true, type: () => require("./tarea.entity").Tarea }, facturable: { required: true, type: () => Boolean }, createdAt: { required: true, type: () => Date }, updatedAt: { required: true, type: () => Date } };
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn('uuid'),
    __metadata("design:type", String)
], RegistroHorasTarea.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ type: 'timestamptz' }),
    __metadata("design:type", String)
], RegistroHorasTarea.prototype, "fecha", void 0);
__decorate([
    typeorm_1.Column({ type: 'numeric' }),
    __metadata("design:type", Number)
], RegistroHorasTarea.prototype, "horas", void 0);
__decorate([
    typeorm_1.ManyToOne(() => tarea_entity_1.Tarea, (tareas) => tareas.registrosHoras),
    typeorm_1.JoinColumn({ name: 'tarea_id' }),
    __metadata("design:type", tarea_entity_1.Tarea)
], RegistroHorasTarea.prototype, "tarea", void 0);
__decorate([
    typeorm_1.Column({ type: 'boolean' }),
    __metadata("design:type", Boolean)
], RegistroHorasTarea.prototype, "facturable", void 0);
__decorate([
    typeorm_1.CreateDateColumn({
        name: 'created_at',
        type: 'timestamptz',
        default: () => 'CURRENT_TIMESTAMP',
    }),
    __metadata("design:type", Date)
], RegistroHorasTarea.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.UpdateDateColumn({
        name: 'updated_at',
        type: 'timestamptz',
        default: () => 'CURRENT_TIMESTAMP',
    }),
    __metadata("design:type", Date)
], RegistroHorasTarea.prototype, "updatedAt", void 0);
RegistroHorasTarea = __decorate([
    typeorm_1.Entity({
        name: 'registros-horas_tarea',
    })
], RegistroHorasTarea);
exports.RegistroHorasTarea = RegistroHorasTarea;
//# sourceMappingURL=registro-horas_tarea.entity.js.map