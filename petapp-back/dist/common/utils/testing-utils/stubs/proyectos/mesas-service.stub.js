"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MesasServiceStub = void 0;
const mesa_entity_1 = require("../../../../../database/entities/proyectos/mesa.entity");
const rxjs_1 = require("rxjs");
const componente_entity_1 = require("../../../../../database/entities/proyectos/componente.entity");
class MesasServiceStub {
    crearMesa(mesa) {
        return rxjs_1.of(new mesa_entity_1.Mesa());
    }
    obtenerMesas(usuario) {
        return rxjs_1.of([new mesa_entity_1.Mesa()]);
    }
    obtenerTareasMesaYArquitectoDesarrollador(usuario, mesaId) {
        return rxjs_1.of([new mesa_entity_1.Mesa()]);
    }
    obtenerComponentesPorMesa(mesaId) {
        return rxjs_1.of([new componente_entity_1.Componente()]);
    }
}
exports.MesasServiceStub = MesasServiceStub;
//# sourceMappingURL=mesas-service.stub.js.map