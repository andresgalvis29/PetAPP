"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComponentesServiceStub = void 0;
const rxjs_1 = require("rxjs");
const componente_entity_1 = require("../../../../../database/entities/proyectos/componente.entity");
class ComponentesServiceStub {
    crearComponente(componente) {
        return rxjs_1.of(new componente_entity_1.Componente());
    }
    actualizarComponente(componenteId, componente) {
        return rxjs_1.of(new componente_entity_1.Componente());
    }
    obtenerComponentePorId(componenteId) {
        return rxjs_1.of(new componente_entity_1.Componente());
    }
    obtenerComponentes(params) {
        return rxjs_1.of([new componente_entity_1.Componente()]);
    }
}
exports.ComponentesServiceStub = ComponentesServiceStub;
//# sourceMappingURL=componentes-service.stub.js.map