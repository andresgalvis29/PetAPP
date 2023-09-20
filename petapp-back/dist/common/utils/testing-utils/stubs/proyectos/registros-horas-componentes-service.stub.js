"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistrosHorasComponentesServiceStub = void 0;
const registro_horas_componente_entity_1 = require("../../../../../database/entities/proyectos/registro-horas_componente.entity");
const rxjs_1 = require("rxjs");
class RegistrosHorasComponentesServiceStub {
    crearRegistroHoras(registroHoras) {
        return rxjs_1.of(new registro_horas_componente_entity_1.RegistroHorasCompoente());
    }
    actualizarRegistroHoras(registroHorasId, registroHoras) {
        return rxjs_1.of(new registro_horas_componente_entity_1.RegistroHorasCompoente());
    }
}
exports.RegistrosHorasComponentesServiceStub = RegistrosHorasComponentesServiceStub;
//# sourceMappingURL=registros-horas-componentes-service.stub.js.map