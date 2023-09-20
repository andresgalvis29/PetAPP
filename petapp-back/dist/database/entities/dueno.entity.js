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
exports.Dueno = void 0;
const openapi = require("@nestjs/swagger");
const mascota_entity_1 = require("./mascota.entity");
const typeorm_1 = require("typeorm");
const class_transformer_1 = require("class-transformer");
let Dueno = class Dueno {
    get imagenUrl() {
        if (!this.imagen) {
            return null;
        }
        return `${process.env.URL_SERVER}/media/foto-perfil/dueno/${this.id}`;
    }
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => String }, nombres: { required: true, type: () => String }, identificacion: { required: true, type: () => String }, telefono: { required: true, type: () => String }, imagen: { required: true, type: () => String }, mascotas: { required: true }, createdAt: { required: true, type: () => Object }, updatedAt: { required: true, type: () => Object } };
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn('uuid'),
    __metadata("design:type", String)
], Dueno.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], Dueno.prototype, "nombres", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', length: 255, unique: true }),
    __metadata("design:type", String)
], Dueno.prototype, "identificacion", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', length: 10 }),
    __metadata("design:type", String)
], Dueno.prototype, "telefono", void 0);
__decorate([
    class_transformer_1.Exclude(),
    typeorm_1.Column({ type: 'varchar', nullable: true }),
    __metadata("design:type", String)
], Dueno.prototype, "imagen", void 0);
__decorate([
    class_transformer_1.Expose(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [])
], Dueno.prototype, "imagenUrl", null);
__decorate([
    typeorm_1.OneToMany(() => mascota_entity_1.Mascota, (mascotas) => mascotas.dueno),
    __metadata("design:type", Array)
], Dueno.prototype, "mascotas", void 0);
__decorate([
    typeorm_1.CreateDateColumn({
        name: 'created_at',
        type: 'timestamptz',
        default: () => 'CURRENT_TIMESTAMP'
    }),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], Dueno.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.UpdateDateColumn({
        name: 'updated_at',
        type: 'timestamptz',
        default: () => 'CURRENT_TIMESTAMP'
    }),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], Dueno.prototype, "updatedAt", void 0);
Dueno = __decorate([
    typeorm_1.Entity({
        name: 'duenos'
    })
], Dueno);
exports.Dueno = Dueno;
//# sourceMappingURL=dueno.entity.js.map