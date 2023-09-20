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
exports.Mascota = void 0;
const openapi = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const cita_entity_1 = require("./cita.entity");
const dueno_entity_1 = require("./dueno.entity");
const typeorm_1 = require("typeorm");
let Mascota = class Mascota {
    get imagenUrl() {
        if (!this.imagen) {
            return null;
        }
        return `${process.env.URL_SERVER}/media/foto-perfil/mascota/${this.id}`;
    }
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => String }, nombres: { required: true, type: () => String }, raza: { required: true, type: () => String }, imagen: { required: true, type: () => String }, fechaNacimiento: { required: true, type: () => String }, sexo: { required: true, type: () => String }, dueno: { required: true, type: () => require("./dueno.entity").Dueno }, citas: { required: true }, createdAt: { required: true, type: () => Object }, updatedAt: { required: true, type: () => Object } };
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn('uuid'),
    __metadata("design:type", String)
], Mascota.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], Mascota.prototype, "nombres", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], Mascota.prototype, "raza", void 0);
__decorate([
    class_transformer_1.Exclude(),
    typeorm_1.Column({ type: 'varchar', nullable: true }),
    __metadata("design:type", String)
], Mascota.prototype, "imagen", void 0);
__decorate([
    class_transformer_1.Expose(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [])
], Mascota.prototype, "imagenUrl", null);
__decorate([
    typeorm_1.Column({ type: 'varchar', name: 'fecha_nacimiento' }),
    __metadata("design:type", String)
], Mascota.prototype, "fechaNacimiento", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar' }),
    __metadata("design:type", String)
], Mascota.prototype, "sexo", void 0);
__decorate([
    typeorm_1.ManyToOne(() => dueno_entity_1.Dueno, (dueno) => dueno.mascotas),
    typeorm_1.JoinColumn({ name: 'dueno_id' }),
    __metadata("design:type", dueno_entity_1.Dueno)
], Mascota.prototype, "dueno", void 0);
__decorate([
    typeorm_1.OneToMany(() => cita_entity_1.Cita, (cita) => cita.mascota),
    __metadata("design:type", Array)
], Mascota.prototype, "citas", void 0);
__decorate([
    typeorm_1.CreateDateColumn({
        name: 'created_at',
        type: 'timestamptz',
        default: () => 'CURRENT_TIMESTAMP'
    }),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], Mascota.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.UpdateDateColumn({
        name: 'updated_at',
        type: 'timestamptz',
        default: () => 'CURRENT_TIMESTAMP'
    }),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], Mascota.prototype, "updatedAt", void 0);
Mascota = __decorate([
    typeorm_1.Entity({
        name: 'mascotas'
    })
], Mascota);
exports.Mascota = Mascota;
//# sourceMappingURL=mascota.entity.js.map