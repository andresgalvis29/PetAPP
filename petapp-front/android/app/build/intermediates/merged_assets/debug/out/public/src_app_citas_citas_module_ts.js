"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_citas_citas_module_ts"],{

/***/ 1934:
/*!***********************************************!*\
  !*** ./src/app/citas/citas-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CitasPageRoutingModule": () => (/* binding */ CitasPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _resolvers_citas_resolver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resolvers/citas.resolver */ 9094);
/* harmony import */ var _containers_detalle_cita_detalle_cita_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./containers/detalle-cita/detalle-cita.component */ 1675);
/* harmony import */ var _containers_crear_cita_crear_cita_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./containers/crear-cita/crear-cita.component */ 4452);
/* harmony import */ var _containers_listado_citas_listado_citas_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./containers/listado-citas/listado-citas.component */ 6417);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _citas_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./citas.page */ 7271);








const routes = [
    {
        path: '',
        component: _citas_page__WEBPACK_IMPORTED_MODULE_4__.CitasPage,
        children: [
            {
                path: 'listado-citas',
                component: _containers_listado_citas_listado_citas_component__WEBPACK_IMPORTED_MODULE_3__.ListadoCitasComponent,
                resolve: {
                    citas: _resolvers_citas_resolver__WEBPACK_IMPORTED_MODULE_0__.CitasResolver
                }
            },
            {
                path: 'crear-cita',
                component: _containers_crear_cita_crear_cita_component__WEBPACK_IMPORTED_MODULE_2__.CrearCitaComponent
            },
            {
                path: 'detalle-cita/:citaId',
                component: _containers_detalle_cita_detalle_cita_component__WEBPACK_IMPORTED_MODULE_1__.DetalleCitaComponent,
                resolve: {
                    cita: _resolvers_citas_resolver__WEBPACK_IMPORTED_MODULE_0__.CitasResolver
                }
            },
            {
                path: '',
                redirectTo: 'listado-citas'
            }
        ]
    }
];
let CitasPageRoutingModule = class CitasPageRoutingModule {
};
CitasPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
    })
], CitasPageRoutingModule);



/***/ }),

/***/ 9639:
/*!***************************************!*\
  !*** ./src/app/citas/citas.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CitasPageModule": () => (/* binding */ CitasPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _components_busqueda_medicamentos_busqueda_medicamentos_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/busqueda-medicamentos/busqueda-medicamentos.component */ 2162);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../shared/shared.module */ 4466);
/* harmony import */ var _containers_detalle_cita_detalle_cita_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./containers/detalle-cita/detalle-cita.component */ 1675);
/* harmony import */ var _containers_listado_citas_listado_citas_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./containers/listado-citas/listado-citas.component */ 6417);
/* harmony import */ var _containers_crear_cita_crear_cita_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./containers/crear-cita/crear-cita.component */ 4452);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _citas_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./citas.page */ 7271);
/* harmony import */ var _citas_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./citas-routing.module */ 1934);
/* harmony import */ var _components_busqueda_pacientes_busqueda_pacientes_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/busqueda-pacientes/busqueda-pacientes.component */ 6280);













let CitasPageModule = class CitasPageModule {
};
CitasPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule,
            _citas_routing_module__WEBPACK_IMPORTED_MODULE_6__.CitasPageRoutingModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule
        ],
        declarations: [
            _citas_page__WEBPACK_IMPORTED_MODULE_5__.CitasPage,
            _components_busqueda_pacientes_busqueda_pacientes_component__WEBPACK_IMPORTED_MODULE_7__.BusquedaPacientesComponent,
            _containers_crear_cita_crear_cita_component__WEBPACK_IMPORTED_MODULE_4__.CrearCitaComponent,
            _containers_listado_citas_listado_citas_component__WEBPACK_IMPORTED_MODULE_3__.ListadoCitasComponent,
            _containers_detalle_cita_detalle_cita_component__WEBPACK_IMPORTED_MODULE_2__.DetalleCitaComponent,
            _components_busqueda_medicamentos_busqueda_medicamentos_component__WEBPACK_IMPORTED_MODULE_0__.BusquedaMedicamentosComponent
        ]
    })
], CitasPageModule);



/***/ }),

/***/ 7271:
/*!*************************************!*\
  !*** ./src/app/citas/citas.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CitasPage": () => (/* binding */ CitasPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _citas_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./citas.page.html?ngResource */ 9541);
/* harmony import */ var _citas_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./citas.page.scss?ngResource */ 1658);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let CitasPage = class CitasPage {
    constructor() { }
};
CitasPage.ctorParameters = () => [];
CitasPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-citas',
        template: _citas_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_citas_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CitasPage);



/***/ }),

/***/ 2162:
/*!*******************************************************************************************!*\
  !*** ./src/app/citas/components/busqueda-medicamentos/busqueda-medicamentos.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BusquedaMedicamentosComponent": () => (/* binding */ BusquedaMedicamentosComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _busqueda_medicamentos_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./busqueda-medicamentos.component.html?ngResource */ 2638);
/* harmony import */ var _busqueda_medicamentos_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./busqueda-medicamentos.component.scss?ngResource */ 6245);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_shared_services_medicamentos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/medicamentos.service */ 4743);






let BusquedaMedicamentosComponent = class BusquedaMedicamentosComponent {
    constructor(_modalController, _medicamentosSharedService) {
        this._modalController = _modalController;
        this._medicamentosSharedService = _medicamentosSharedService;
        this.medicamentos = [];
    }
    ngOnInit() {
        this._medicamentosSharedService.consultarMedicamentosPorNombre('').subscribe((data) => {
            this.medicamentos = data;
            console.log(this.medicamentos);
        });
    }
    buscarMedicamentos(event) {
        this._medicamentosSharedService.consultarMedicamentosPorNombre(event.target.value).subscribe((data) => {
            this.medicamentos = data;
        });
    }
    seleccionarMedicamento(medicamento) {
        console.log(medicamento);
        this._modalController.dismiss(Object.assign(Object.assign({}, medicamento), { frecuencia: 0, cantidad: 0 }));
    }
};
BusquedaMedicamentosComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ModalController },
    { type: src_app_shared_services_medicamentos_service__WEBPACK_IMPORTED_MODULE_2__.MedicamentosService }
];
BusquedaMedicamentosComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-busqueda-medicamentos',
        template: _busqueda_medicamentos_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_busqueda_medicamentos_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], BusquedaMedicamentosComponent);



/***/ }),

/***/ 6280:
/*!*************************************************************************************!*\
  !*** ./src/app/citas/components/busqueda-pacientes/busqueda-pacientes.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BusquedaPacientesComponent": () => (/* binding */ BusquedaPacientesComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _busqueda_pacientes_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./busqueda-pacientes.component.html?ngResource */ 9569);
/* harmony import */ var _busqueda_pacientes_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./busqueda-pacientes.component.scss?ngResource */ 9219);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_shared_services_pacientes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/pacientes.service */ 873);






let BusquedaPacientesComponent = class BusquedaPacientesComponent {
    constructor(_pacientesSharedService, _modalController) {
        this._pacientesSharedService = _pacientesSharedService;
        this._modalController = _modalController;
        this.pacientes = [];
    }
    ngOnInit() {
        this._pacientesSharedService.consultarPacientesPorIdentificacion('').subscribe((data) => {
            this.pacientes = data;
        });
    }
    buscarPacientes(event) {
        this._pacientesSharedService.consultarPacientesPorIdentificacion(event.target.value).subscribe((data) => {
            this.pacientes = data;
        });
    }
    mascotaSeleccionada(mascota) {
        this._modalController.dismiss(mascota);
    }
};
BusquedaPacientesComponent.ctorParameters = () => [
    { type: src_app_shared_services_pacientes_service__WEBPACK_IMPORTED_MODULE_2__.PacientesService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ModalController }
];
BusquedaPacientesComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-busqueda-pacientes',
        template: _busqueda_pacientes_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_busqueda_pacientes_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], BusquedaPacientesComponent);



/***/ }),

/***/ 4452:
/*!*********************************************************************!*\
  !*** ./src/app/citas/containers/crear-cita/crear-cita.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CrearCitaComponent": () => (/* binding */ CrearCitaComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _crear_cita_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./crear-cita.component.html?ngResource */ 7036);
/* harmony import */ var _crear_cita_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./crear-cita.component.scss?ngResource */ 976);
/* harmony import */ var _services_citas_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/citas.service */ 4903);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _components_busqueda_pacientes_busqueda_pacientes_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/busqueda-pacientes/busqueda-pacientes.component */ 6280);








let CrearCitaComponent = class CrearCitaComponent {
    constructor(_modalController, _formBuilder, _citasService, _navController) {
        this._modalController = _modalController;
        this._formBuilder = _formBuilder;
        this._citasService = _citasService;
        this._navController = _navController;
        this.mascotaSeleccionada = undefined;
    }
    ngOnInit() {
        this.formCrearCita = this._formBuilder.group({
            mascotaId: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
            fecha: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
            motivo: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('')
        });
    }
    crearCita() {
        this._citasService.crearCita(this.formCrearCita.value).subscribe((data) => {
            this._navController.navigateForward('/citas/listado-citas');
        });
    }
    buscarPaciente() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this._modalController.create({
                component: _components_busqueda_pacientes_busqueda_pacientes_component__WEBPACK_IMPORTED_MODULE_3__.BusquedaPacientesComponent
            });
            modal.present();
            modal.onDidDismiss().then((data) => {
                console.log(data);
                this.mascotaId.setValue(data.data.id);
                this.mascotaSeleccionada = data.data;
                console.log(this.mascotaSeleccionada);
            });
        });
    }
    get mascotaId() {
        return this.formCrearCita.get('mascotaId');
    }
    get fecha() {
        return this.formCrearCita.get('fecha');
    }
    get motivo() {
        return this.formCrearCita.get('motivo');
    }
};
CrearCitaComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder },
    { type: _services_citas_service__WEBPACK_IMPORTED_MODULE_2__.CitasService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController }
];
CrearCitaComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-crear-cita',
        template: _crear_cita_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_crear_cita_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CrearCitaComponent);



/***/ }),

/***/ 1675:
/*!*************************************************************************!*\
  !*** ./src/app/citas/containers/detalle-cita/detalle-cita.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetalleCitaComponent": () => (/* binding */ DetalleCitaComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _detalle_cita_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detalle-cita.component.html?ngResource */ 2029);
/* harmony import */ var _detalle_cita_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detalle-cita.component.scss?ngResource */ 7905);
/* harmony import */ var _services_citas_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/citas.service */ 4903);
/* harmony import */ var _components_busqueda_medicamentos_busqueda_medicamentos_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../components/busqueda-medicamentos/busqueda-medicamentos.component */ 2162);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);








let DetalleCitaComponent = class DetalleCitaComponent {
    constructor(_activatedRoute, _modalController, _citasService) {
        this._activatedRoute = _activatedRoute;
        this._modalController = _modalController;
        this._citasService = _citasService;
        this.medicamentosCita = [];
    }
    ngOnInit() {
        this.cita = this._activatedRoute.snapshot.data.cita;
        this._refrescarMedicamentos();
    }
    agregarMedicamento() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this._modalController.create({
                component: _components_busqueda_medicamentos_busqueda_medicamentos_component__WEBPACK_IMPORTED_MODULE_3__.BusquedaMedicamentosComponent
            });
            modal.present();
            modal.onDidDismiss().then((data) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                if (data.data) {
                    console.log(data.data);
                    this._citasService
                        .agregarMedicamentoACita(this.cita.id, data.data.id)
                        .subscribe((medicamentoCita) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                        this._refrescarMedicamentos();
                    }));
                }
            }));
        });
    }
    _refrescarMedicamentos() {
        this._citasService.obtenerMedicamentosPorCita(this.cita.id).subscribe((medicamentosCita) => {
            console.log(medicamentosCita);
            this.medicamentosCita = medicamentosCita;
        });
    }
    actualizarMedicamento(event, medicamentoCita) {
        console.log('cantidad: ', event.target[0].value);
        console.log('frecuencia: ', event.target[1].value);
        this._citasService
            .actualizarMedicamentoCita(medicamentoCita.id, {
            cantidad: event.target[0].value,
            frecuencia: event.target[1].value
        })
            .subscribe((medicamentoCita) => {
            this._refrescarMedicamentos();
        });
    }
};
DetalleCitaComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController },
    { type: _services_citas_service__WEBPACK_IMPORTED_MODULE_2__.CitasService }
];
DetalleCitaComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-detalle-cita',
        template: _detalle_cita_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_detalle_cita_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], DetalleCitaComponent);



/***/ }),

/***/ 6417:
/*!***************************************************************************!*\
  !*** ./src/app/citas/containers/listado-citas/listado-citas.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListadoCitasComponent": () => (/* binding */ ListadoCitasComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _listado_citas_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listado-citas.component.html?ngResource */ 5117);
/* harmony import */ var _listado_citas_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listado-citas.component.scss?ngResource */ 9975);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);






let ListadoCitasComponent = class ListadoCitasComponent {
    constructor(_navController, _activatedRoute) {
        this._navController = _navController;
        this._activatedRoute = _activatedRoute;
        this.citas = [];
    }
    ngOnInit() {
        this.ionViewWillEnter();
    }
    ionViewWillEnter() {
        this.citas = this._activatedRoute.snapshot.data.citas;
    }
    agregarCita() {
        this._navController.navigateForward('/citas/crear-cita');
    }
    detalleCita(cita) {
        this._navController.navigateForward(`/citas/detalle-cita/${cita.id}`);
    }
};
ListadoCitasComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.NavController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute }
];
ListadoCitasComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-listado-citas',
        template: _listado_citas_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_listado_citas_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ListadoCitasComponent);



/***/ }),

/***/ 9094:
/*!***************************************************!*\
  !*** ./src/app/citas/resolvers/citas.resolver.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CitasResolver": () => (/* binding */ CitasResolver)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _services_citas_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../services/citas.service */ 4903);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);



let CitasResolver = class CitasResolver {
    constructor(_citasService) {
        this._citasService = _citasService;
    }
    resolve(route, state) {
        if (route.params.citaId) {
            return this._citasService.obtenerCitasPorId(route.params.citaId);
        }
        else {
            return this._citasService.obtenerCitas();
        }
    }
};
CitasResolver.ctorParameters = () => [
    { type: _services_citas_service__WEBPACK_IMPORTED_MODULE_0__.CitasService }
];
CitasResolver = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], CitasResolver);



/***/ }),

/***/ 4903:
/*!*************************************************!*\
  !*** ./src/app/citas/services/citas.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CitasService": () => (/* binding */ CitasService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../environments/environment.prod */ 9019);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let CitasService = class CitasService {
    constructor(_httpClient) {
        this._httpClient = _httpClient;
    }
    crearCita(cita) {
        return this._httpClient.post(`${_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.API}/citas`, cita);
    }
    obtenerCitas() {
        return this._httpClient.get(`${_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.API}/citas`);
    }
    obtenerCitasPorId(citaId) {
        return this._httpClient.get(`${_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.API}/citas/${citaId}`);
    }
    agregarMedicamentoACita(citaId, medicamentoId) {
        return this._httpClient.post(`${_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.API}/citas/${citaId}/medicamentos/${medicamentoId}`, {});
    }
    obtenerMedicamentosPorCita(citaId) {
        return this._httpClient.get(`${_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.API}/citas/${citaId}/medicamentos`);
    }
    actualizarMedicamentoCita(medicamentosCitaId, datos) {
        return this._httpClient.patch(`${_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.API}/citas/medicamentos-cita/${medicamentosCitaId}`, datos);
    }
};
CitasService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
CitasService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], CitasService);



/***/ }),

/***/ 4743:
/*!*********************************************************!*\
  !*** ./src/app/shared/services/medicamentos.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MedicamentosService": () => (/* binding */ MedicamentosService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../environments/environment.prod */ 9019);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let MedicamentosService = class MedicamentosService {
    constructor(_httpClient) {
        this._httpClient = _httpClient;
    }
    consultarMedicamentosPorNombre(nombre) {
        return this._httpClient.get(`${_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.API}/medicamentos?nombre=${nombre}`);
    }
};
MedicamentosService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
MedicamentosService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], MedicamentosService);



/***/ }),

/***/ 1658:
/*!**************************************************!*\
  !*** ./src/app/citas/citas.page.scss?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaXRhcy5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 6245:
/*!********************************************************************************************************!*\
  !*** ./src/app/citas/components/busqueda-medicamentos/busqueda-medicamentos.component.scss?ngResource ***!
  \********************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJidXNxdWVkYS1tZWRpY2FtZW50b3MuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 9219:
/*!**************************************************************************************************!*\
  !*** ./src/app/citas/components/busqueda-pacientes/busqueda-pacientes.component.scss?ngResource ***!
  \**************************************************************************************************/
/***/ ((module) => {

module.exports = ".card__info--container {\n  display: flex;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1c3F1ZWRhLXBhY2llbnRlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQUFSIiwiZmlsZSI6ImJ1c3F1ZWRhLXBhY2llbnRlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcbiAgICAmX19pbmZvLS1jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cbn0iXX0= */";

/***/ }),

/***/ 976:
/*!**********************************************************************************!*\
  !*** ./src/app/citas/containers/crear-cita/crear-cita.component.scss?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhci1jaXRhLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 7905:
/*!**************************************************************************************!*\
  !*** ./src/app/citas/containers/detalle-cita/detalle-cita.component.scss?ngResource ***!
  \**************************************************************************************/
/***/ ((module) => {

module.exports = ".divider--title {\n  font-size: 1.2em;\n  font-weight: bold;\n  margin-bottom: 0.5em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFsbGUtY2l0YS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQUNKIiwiZmlsZSI6ImRldGFsbGUtY2l0YS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaXZpZGVyLS10aXRsZSB7XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcbn0iXX0= */";

/***/ }),

/***/ 9975:
/*!****************************************************************************************!*\
  !*** ./src/app/citas/containers/listado-citas/listado-citas.component.scss?ngResource ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0YWRvLWNpdGFzLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 9541:
/*!**************************************************!*\
  !*** ./src/app/citas/citas.page.html?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-item color=\"primary\" lines=\"none\">\n      <ion-back-button defaultHref=\"/\" text=\"\" slot=\"start\"></ion-back-button>\n\n      <ion-title>\n        Citas programadas\n      </ion-title>\n    </ion-item>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-router-outlet></ion-router-outlet>\n</ion-content>\n";

/***/ }),

/***/ 2638:
/*!********************************************************************************************************!*\
  !*** ./src/app/citas/components/busqueda-medicamentos/busqueda-medicamentos.component.html?ngResource ***!
  \********************************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"12\" >\n        <ion-card>\n          <ion-input placeholder=\"Nombre del medicamento\" (ionChange)=\"buscarMedicamentos($event)\">\n            <ion-icon name=\"search\"></ion-icon>\n          </ion-input>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col size=\"12\" *ngFor=\"let medicamento of medicamentos\">\n        <ion-card (click)=\"seleccionarMedicamento(medicamento)\">\n          <ion-card-header>\n            <ion-card-title>\n              {{medicamento.nombre}}\n            </ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n            <ion-grid>\n              <ion-row>\n                <ion-col size=\"12\">\n                  <ion-label><b>Unidad de medida: </b>{{medicamento.unidadMedida}}</ion-label>\n                </ion-col>\n                <ion-col size=\"12\">\n                  <ion-label><b>Tipo: </b>{{medicamento.tipo}}</ion-label>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>";

/***/ }),

/***/ 9569:
/*!**************************************************************************************************!*\
  !*** ./src/app/citas/components/busqueda-pacientes/busqueda-pacientes.component.html?ngResource ***!
  \**************************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"12\" >\n        <ion-card>\n          <ion-input placeholder=\"Identificación del paciente\" (ionChange)=\"buscarPacientes($event)\">\n            <ion-icon name=\"search\"></ion-icon>\n          </ion-input>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col size=\"12\" size-md=\"6\" *ngFor=\"let dueno of pacientes\">\n        <ion-card>\n          <ion-card-header>\n            <ion-card-title>\n              {{dueno.nombres}}\n            </ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n            <ion-grid>\n              <ion-row>\n                <ion-col size=\"4\">\n                  <img [src]=\"dueno.imagenUrl\" class=\"image__profile\" onerror=\"this.src = 'assets/img/profile.jpeg'\">\n                </ion-col>\n                <ion-col size=\"8\" class=\"card__info--container\">\n                  <ion-grid>\n                    <ion-row>\n                      <ion-col size=\"12\">\n                        <ion-label>\n                          <b>Identificación: </b>{{dueno.identificacion}}\n                        </ion-label>\n                      </ion-col>\n\n                      <ion-col size=\"12\">\n                        <ion-label>\n                          <b>Teléfono: </b>{{dueno.telefono}}\n                        </ion-label>\n                      </ion-col>\n                    </ion-row>\n                  </ion-grid>\n                </ion-col>\n              </ion-row>\n            \n              <ion-row>\n                <ion-accordion-group class=\"accordion--full-width\">\n                  <ion-accordion value=\"colors\">\n                    <ion-item slot=\"header\">\n                      <ion-label>Mascotas</ion-label>\n                    </ion-item>\n                \n                    <ion-list slot=\"content\">\n                      <ion-item detail button *ngFor=\"let mascota of dueno.mascotas\" (click)=\"mascotaSeleccionada(mascota)\">\n                        <img slot=\"start\" [src]=\"mascota.imagenUrl\" class=\"image__profile\" onerror=\"this.src = 'assets/img/profile.jpeg'\">\n                        <ion-grid>\n                          <ion-row>\n                            <ion-col size=\"12\">\n                              <ion-label>\n                                <b>Nombre: </b>{{mascota.nombre}}\n                              </ion-label>\n                            </ion-col>\n\n                            <ion-col size=\"12\">\n                              <ion-label>\n                                <b>Nacimiento: </b>{{mascota.fechaNacimiento}}\n                              </ion-label>\n                            </ion-col>\n\n                            <ion-col size=\"12\">\n                              <ion-label>\n                                <b>Raza: </b>{{mascota.raza}}\n                              </ion-label>\n                            </ion-col>\n\n                            <ion-col size=\"12\">\n                              <ion-label>\n                                <b>Sexo: </b>{{mascota.sexo}}\n                              </ion-label>\n                            </ion-col>\n                          </ion-row>\n                        </ion-grid>\n                        \n                      </ion-item>\n\n                    </ion-list>\n                  </ion-accordion>\n                </ion-accordion-group>\n              </ion-row>\n            </ion-grid>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>";

/***/ }),

/***/ 7036:
/*!**********************************************************************************!*\
  !*** ./src/app/citas/containers/crear-cita/crear-cita.component.html?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\n  <form [formGroup]=\"formCrearCita\" (ngSubmit)=\"crearCita()\">\n\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-button *ngIf=\"!mascotaSeleccionada\" mode=\"ios\" shape=\"round\" color=\"tertiary\" expand=\"block\"\n          (click)=\"buscarPaciente()\">\n          <ion-icon name=\"search\" slot=\"start\"></ion-icon> Buscar paciente\n        </ion-button>\n        <ion-card button (click)=\"buscarPaciente()\" *ngIf=\"mascotaSeleccionada\">\n          <img [src]=\"mascotaSeleccionada.imagenUrl\" alt=\"imagen-mascota\">\n          <ion-card-content>\n            <ion-grid>\n              <ion-row>\n                <ion-col size=\"6\">\n                  <ion-label>\n                    <b>Nombre: </b>{{mascotaSeleccionada.nombres}}\n                  </ion-label>\n                </ion-col>\n                <ion-col size=\"6\">\n                  <ion-label>\n                    <b>Raza: </b>{{mascotaSeleccionada.raza}}\n                  </ion-label>\n                </ion-col>\n                <ion-col size=\"6\">\n                  <ion-label>\n                    <b>Nacimiento: </b>{{mascotaSeleccionada.fechaNacimiento}}\n                  </ion-label>\n                </ion-col>\n                <ion-col size=\"6\">\n                  <ion-label>\n                    <b>Sexo: </b>{{mascotaSeleccionada.sexo}}\n                  </ion-label>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      <ion-col size=\"12\">\n        <ion-card>\n          <ion-textarea rows=\"5\" type=\"text\" placeholder=\"Motivo de la cita\" formControlName=\"motivo\"></ion-textarea>\n        </ion-card>\n      </ion-col>\n      <ion-col size=\"12\">\n        <ion-card>\n          <ion-label class=\"datepicker--title\">Fecha de la cita</ion-label>\n          <ion-datetime formControlName=\"fecha\">\n          </ion-datetime>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\" class=\"flex--centered\">\n        <ion-button mode=\"ios\" shape=\"round\" color=\"secondary\" type=\"submit\">\n          Agregar cita\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</form>\n\n</ion-content>";

/***/ }),

/***/ 2029:
/*!**************************************************************************************!*\
  !*** ./src/app/citas/containers/detalle-cita/detalle-cita.component.html?ngResource ***!
  \**************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-item-divider>\n          <ion-label class=\"divider--title\">Datos de la cita</ion-label>\n        </ion-item-divider>\n      </ion-col>\n\n      <ion-col size=\"12\">\n        <ion-grid>\n\n          <ion-row>\n            <ion-col size=\"12\" class=\"flex--centered\">\n              <ion-label>\n                <b>Fecha: </b>{{cita.fecha}}\n              </ion-label>\n            </ion-col>\n\n            <ion-col size=\"12\" class=\"flex--centered\">\n              <ion-label>\n                <b>Motivo: </b>{{cita.motivo}}\n              </ion-label>\n            </ion-col>\n\n          </ion-row>\n        </ion-grid>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-item-divider>\n          <ion-label class=\"divider--title\">Datos del dueño</ion-label>\n        </ion-item-divider>\n      </ion-col>\n\n      <ion-col size=\"12\">\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"12\" class=\"flex--centered\">\n              <img [src]=\"cita.mascota.dueno.imagenUrl\" class=\"image__profile\"\n                onerror=\"this.src = 'assets/img/profile.jpeg'\">\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col size=\"12\" class=\"flex--centered\">\n              <ion-label>\n                <b>Nombre: </b>{{cita.mascota.dueno.nombres}}\n              </ion-label>\n            </ion-col>\n\n            <ion-col size=\"12\" class=\"flex--centered\">\n              <ion-label>\n                <b>Identificación: </b>{{cita.mascota.dueno.identificacion}}\n              </ion-label>\n            </ion-col>\n\n            <ion-col size=\"12\" class=\"flex--centered\">\n              <ion-label>\n                <b>Teléfono: </b>{{cita.mascota.dueno.telefono}}\n              </ion-label>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-item-divider>\n          <ion-label class=\"divider--title\">Datos de la mascota</ion-label>\n        </ion-item-divider>\n      </ion-col>\n\n      <ion-col size=\"12\">\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"12\" class=\"flex--centered\">\n              <img [src]=\"cita.mascota.imagenUrl\" class=\"image__profile\" onerror=\"this.src = 'assets/img/profile.jpeg'\">\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col size=\"12\" class=\"flex--centered\">\n              <ion-label>\n                <b>Nombre: </b>{{cita.mascota.nombres}}\n              </ion-label>\n            </ion-col>\n\n            <ion-col size=\"12\" class=\"flex--centered\">\n              <ion-label>\n                <b>Raza: </b>{{cita.mascota.raza}}\n              </ion-label>\n            </ion-col>\n\n            <ion-col size=\"12\" class=\"flex--centered\">\n              <ion-label>\n                <b>Nacimiento: </b>{{cita.mascota.fechaNacimiento}}\n              </ion-label>\n            </ion-col>\n\n            <ion-col size=\"12\" class=\"flex--centered\">\n              <ion-label>\n                <b>Sexo: </b>{{cita.mascota.sexo}}\n              </ion-label>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-item-divider>\n          <ion-label class=\"divider--title\">Receta</ion-label>\n        </ion-item-divider>\n      </ion-col>\n\n      <ion-col size=\"12\" *ngFor=\"let medicamentoCita of medicamentosCita\">\n        <ion-card>\n          <ion-card-header>\n            <ion-card-title>\n              {{medicamentoCita.medicamento.nombre}}\n            </ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n            <form (ngSubmit)=\"actualizarMedicamento($event, medicamentoCita)\">\n              <ion-grid>\n                <ion-row>\n                  <ion-col size=\"12\">\n                    <ion-grid>\n                      <ion-row class=\"flex--centered\">\n                        <ion-col size=\"4\">\n                          <ion-label><b>Cantidad: </b></ion-label>\n                        </ion-col>\n                        <ion-col size=\"6\">\n                          <ion-card>\n                            <ion-input type=\"number\" placeholder=\"Cantidad\" name=\"cantidad\"\n                              [value]=\"medicamentoCita.cantidad\"></ion-input>\n                          </ion-card>\n                        </ion-col>\n                        <ion-col size=\"2\">\n                          <ion-label>\n                            {{medicamentoCita.medicamento.unidadMedida}}\n                          </ion-label>\n                        </ion-col>\n                      </ion-row>\n                    </ion-grid>\n                  </ion-col>\n                  <ion-col size=\"12\">\n                    <ion-grid>\n                      <ion-row class=\"flex--centered\">\n                        <ion-col size=\"4\">\n                          <ion-label><b>Cada: </b></ion-label>\n                        </ion-col>\n                        <ion-col size=\"6\">\n                          <ion-card>\n                            <ion-input type=\"number\" placeholder=\"Frecuencia\" name=\"frecuencia\"\n                              [value]=\"medicamentoCita.frecuencia\"></ion-input>\n                          </ion-card>\n                        </ion-col>\n                        <ion-col size=\"2\">\n                          <ion-label>\n                            hrs\n                          </ion-label>\n                        </ion-col>\n                      </ion-row>\n                    </ion-grid>\n                  </ion-col>\n                </ion-row>\n\n                <ion-row>\n                  <ion-col size=\"12\">\n                    <ion-button expand=\"block\" shape=\"round\" mode=\"ios\" color=\"tertiary\" type=\"submit\">Guardar\n                    </ion-button>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n            </form>\n\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n\n      <ion-col size=\"12\" class=\"flex--centered\">\n        <ion-button color=\"secondary\" shape=\"round\" mode=\"ios\" (click)=\"agregarMedicamento()\">\n          Agregar medicamentos\n        </ion-button>\n      </ion-col>\n\n    </ion-row>\n  </ion-grid>\n</ion-content>";

/***/ }),

/***/ 5117:
/*!****************************************************************************************!*\
  !*** ./src/app/citas/containers/listado-citas/listado-citas.component.html?ngResource ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"12\" class=\"flex--centered\">\n        <ion-button mode=\"ios\" shape=\"round\" color=\"secondary\" (click)=\"agregarCita()\">\n          Agregar cita\n        </ion-button>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col size=\"12\" *ngFor=\"let cita of citas\">\n        <ion-card button (click)=\"detalleCita(cita)\">\n          <ion-card-header>\n            <ion-card-title>\n              {{cita.fecha}}\n            </ion-card-title>\n          </ion-card-header>\n\n          <ion-card-content>\n            <ion-grid>\n              <ion-row>\n                <ion-col size=\"12\">\n                  <ion-label><b>Dueño de la mascota: </b>{{cita.mascota.dueno.nombres}}</ion-label>\n                </ion-col>\n                <ion-col size=\"12\">\n                  <ion-label><b>Nombre de la mascota: </b>{{cita.mascota.nombres}}</ion-label>\n                </ion-col>\n                <ion-col size=\"12\">\n                  <ion-label><b>Motivo: </b>{{cita.motivo}}</ion-label>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_citas_citas_module_ts.js.map