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
exports.Mesa = void 0;
const openapi = require("@nestjs/swagger");
const tarea_entity_1 = require("./tarea.entity");
const usuario_entity_1 = require("../usuarios/usuario.entity");
const typeorm_1 = require("typeorm");
let Mesa = class Mesa {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => String }, nombre: { required: true, type: () => String }, descripcion: { required: true, type: () => String }, numeroActa: { required: true, type: () => String }, tareas: { required: true, type: () => [require("./tarea.entity").Tarea] }, facilitador: { required: true, type: () => require("../usuarios/usuario.entity").Usuario }, arquitectosDesarrolladores: { required: true, type: () => [require("../usuarios/usuario.entity").Usuario] }, createdAt: { required: true, type: () => Date }, updatedAt: { required: true, type: () => Date } };
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn('uuid'),
    __metadata("design:type", String)
], Mesa.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], Mesa.prototype, "nombre", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', length: 300 }),
    __metadata("design:type", String)
], Mesa.prototype, "descripcion", void 0);
__decorate([
    typeorm_1.Column({ name: 'numero_acta', type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], Mesa.prototype, "numeroActa", void 0);
__decorate([
    typeorm_1.OneToMany(() => tarea_entity_1.Tarea, (tareas) => tareas.mesa),
    __metadata("design:type", Array)
], Mesa.prototype, "tareas", void 0);
__decorate([
    typeorm_1.ManyToOne(() => usuario_entity_1.Usuario, (usuario) => usuario.mesasFacilitador),
    typeorm_1.JoinColumn({ name: 'facilitador_id' }),
    __metadata("design:type", usuario_entity_1.Usuario)
], Mesa.prototype, "facilitador", void 0);
__decorate([
    typeorm_1.ManyToMany(() => usuario_entity_1.Usuario, (usuario) => usuario.mesasArquitectoDesarrollador),
    __metadata("design:type", Array)
], Mesa.prototype, "arquitectosDesarrolladores", void 0);
__decorate([
    typeorm_1.CreateDateColumn({
        name: 'created_at',
        type: 'timestamptz',
        default: () => 'CURRENT_TIMESTAMP',
    }),
    __metadata("design:type", Date)
], Mesa.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.UpdateDateColumn({
        name: 'updated_at',
        type: 'timestamptz',
        default: () => 'CURRENT_TIMESTAMP',
    }),
    __metadata("design:type", Date)
], Mesa.prototype, "updatedAt", void 0);
Mesa = __decorate([
    typeorm_1.Entity({
        name: 'mesas',
    })
], Mesa);
exports.Mesa = Mesa;
//# sourceMappingURL=mesa.entity.js.map