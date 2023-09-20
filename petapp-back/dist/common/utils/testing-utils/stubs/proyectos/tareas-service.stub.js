"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TareasServiceStub = void 0;
const tarea_entity_1 = require("../../../../../database/entities/proyectos/tarea.entity");
const rxjs_1 = require("rxjs");
class TareasServiceStub {
    crearTarea(tarea, usuario) {
        return rxjs_1.of(new tarea_entity_1.Tarea());
    }
    obtenerTareasPorUsuario(usuario) {
        return rxjs_1.of([new tarea_entity_1.Tarea()]);
    }
    actualizarTarea(tareaId, tarea) {
        return rxjs_1.of(new tarea_entity_1.Tarea());
    }
    obtenerTareaPorId(tareaId) {
        return rxjs_1.of(new tarea_entity_1.Tarea());
    }
    obtenerTareas(queryParams) {
        return rxjs_1.of([new tarea_entity_1.Tarea()]);
    }
}
exports.TareasServiceStub = TareasServiceStub;
//# sourceMappingURL=tareas-service.stub.js.map