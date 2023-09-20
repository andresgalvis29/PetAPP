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
exports.Usuario = void 0;
const openapi = require("@nestjs/swagger");
const roles_model_1 = require("./../../../auth/models/roles.model");
const typeorm_1 = require("typeorm");
let Usuario = class Usuario {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => String }, nombres: { required: true, type: () => String }, email: { required: true, type: () => String }, imagen: { required: true, type: () => String }, rol: { required: true, type: () => String }, createdAt: { required: true, type: () => Object }, updatedAt: { required: true, type: () => Object } };
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn('uuid'),
    __metadata("design:type", String)
], Usuario.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], Usuario.prototype, "nombres", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', length: 255, unique: true }),
    __metadata("design:type", String)
], Usuario.prototype, "email", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar' }),
    __metadata("design:type", String)
], Usuario.prototype, "imagen", void 0);
__decorate([
    typeorm_1.Column({ type: 'enum', enum: roles_model_1.Rol, nullable: true }),
    __metadata("design:type", String)
], Usuario.prototype, "rol", void 0);
__decorate([
    typeorm_1.CreateDateColumn({
        name: 'created_at',
        type: 'timestamptz',
        default: () => 'CURRENT_TIMESTAMP'
    }),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], Usuario.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.UpdateDateColumn({
        name: 'updated_at',
        type: 'timestamptz',
        default: () => 'CURRENT_TIMESTAMP'
    }),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], Usuario.prototype, "updatedAt", void 0);
Usuario = __decorate([
    typeorm_1.Entity({
        name: 'usuarios'
    })
], Usuario);
exports.Usuario = Usuario;
//# sourceMappingURL=usuario.entity.js.map