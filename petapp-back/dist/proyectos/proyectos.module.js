"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProyectosModule = void 0;
const tarea_entity_1 = require("./../database/entities/proyectos/tarea.entity");
const registro_horas_tarea_entity_1 = require("../database/entities/proyectos/registro-horas_tarea.entity");
const mesa_entity_1 = require("../database/entities/proyectos/mesa.entity");
const usuario_entity_1 = require("../database/entities/usuarios/usuario.entity");
const typeorm_1 = require("@nestjs/typeorm");
const common_1 = require("@nestjs/common");
const registros_horas_tarea_controller_1 = require("./controllers/registros-horas-tarea.controller");
const tareas_service_1 = require("./services/tareas.service");
const tareas_controller_1 = require("./controllers/tareas.controller");
const mesas_controller_1 = require("./controllers/mesas.controller");
const mesas_service_1 = require("./services/mesas.service");
const componentes_controller_1 = require("./controllers/componentes.controller");
const componentes_service_1 = require("./services/componentes.service");
const componente_entity_1 = require("../database/entities/proyectos/componente.entity");
const registro_horas_componente_entity_1 = require("../database/entities/proyectos/registro-horas_componente.entity");
const registros_horas_tarea_service_1 = require("./services/registros-horas-tarea.service");
const registros_horas_componentes_controller_1 = require("./controllers/registros-horas-componentes.controller");
const registros_horas_componentes_service_1 = require("./services/registros-horas-componentes.service");
let ProyectosModule = class ProyectosModule {
};
ProyectosModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                usuario_entity_1.Usuario,
                mesa_entity_1.Mesa,
                registro_horas_tarea_entity_1.RegistroHorasTarea,
                tarea_entity_1.Tarea,
                componente_entity_1.Componente,
                registro_horas_componente_entity_1.RegistroHorasCompoente,
            ]),
        ],
        controllers: [
            mesas_controller_1.MesasController,
            registros_horas_tarea_controller_1.RegistrosHorasTareaController,
            registros_horas_componentes_controller_1.RegistrosHorasComponentesController,
            tareas_controller_1.TareasController,
            componentes_controller_1.ComponentesController,
            registros_horas_componentes_controller_1.RegistrosHorasComponentesController,
        ],
        providers: [
            mesas_service_1.MesasService,
            registros_horas_tarea_service_1.RegistrosHorasTareaService,
            registros_horas_componentes_service_1.RegistrosHorasComponentesService,
            tareas_service_1.TareasService,
            componentes_service_1.ComponentesService,
        ],
    })
], ProyectosModule);
exports.ProyectosModule = ProyectosModule;
//# sourceMappingURL=proyectos.module.js.map