"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistrosHorasTareaServiceStub = void 0;
const registro_horas_tarea_entity_1 = require("../../../../../database/entities/proyectos/registro-horas_tarea.entity");
const rxjs_1 = require("rxjs");
class RegistrosHorasTareaServiceStub {
    crearRegistroHoras(registro) {
        return rxjs_1.of(new registro_horas_tarea_entity_1.RegistroHorasTarea());
    }
}
exports.RegistrosHorasTareaServiceStub = RegistrosHorasTareaServiceStub;
//# sourceMappingURL=registro-horas-tarea-service.stub.js.map