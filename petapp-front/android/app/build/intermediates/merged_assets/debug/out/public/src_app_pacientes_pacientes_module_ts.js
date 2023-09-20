"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pacientes_pacientes_module_ts"],{

/***/ 179:
/*!**************************************************************************************!*\
  !*** ./src/app/pacientes/containers/containers/crear-dueno/crear-dueno.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CrearDuenoComponent": () => (/* binding */ CrearDuenoComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _crear_dueno_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./crear-dueno.component.html?ngResource */ 8534);
/* harmony import */ var _crear_dueno_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./crear-dueno.component.scss?ngResource */ 373);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _services_duenos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../services/duenos.service */ 9964);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_shared_services_camara_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/camara.service */ 2426);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);









let CrearDuenoComponent = class CrearDuenoComponent {
    constructor(_camaraService, _navController, _fromBuilder, _duenosService, _activatedRoute) {
        this._camaraService = _camaraService;
        this._navController = _navController;
        this._fromBuilder = _fromBuilder;
        this._duenosService = _duenosService;
        this._activatedRoute = _activatedRoute;
        this.isUpdate = false;
    }
    ngOnInit() {
        this.dueno = this._activatedRoute.snapshot.data.dueno;
        this.formCrearDueno = this._fromBuilder.group({
            nombres: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
            identificacion: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
            telefono: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
            imagen: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(undefined)
        });
        if (this._activatedRoute.snapshot.data.dueno) {
            this.isUpdate = true;
            this.formCrearDueno.patchValue(this._activatedRoute.snapshot.data.dueno);
        }
    }
    crearDueno() {
        if (this.isUpdate) {
            this._duenosService.actualizarDueno(this.dueno.id, this.formCrearDueno.value).subscribe((response) => {
                this._navController.navigateForward(`/pacientes/detalle-dueno/${this.dueno.id}`);
            });
        }
        else {
            this._duenosService.crearDueno(this.formCrearDueno.value).subscribe((data) => {
                this._navController.navigateForward(`pacientes/detalle-dueno/${data.id}`);
            });
        }
    }
    tomarFoto() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const photo = yield this._camaraService.takePhoto();
            if (photo) {
                this.imagen.setValue(`data:image/${photo.format};base64,${photo.base64String}`);
            }
        });
    }
    get nombres() {
        return this.formCrearDueno.get('nombres');
    }
    get identificacion() {
        return this.formCrearDueno.get('identificacion');
    }
    get telefono() {
        return this.formCrearDueno.get('telefono');
    }
    get imagen() {
        return this.formCrearDueno.get('imagen');
    }
};
CrearDuenoComponent.ctorParameters = () => [
    { type: src_app_shared_services_camara_service__WEBPACK_IMPORTED_MODULE_3__.CamaraService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder },
    { type: _services_duenos_service__WEBPACK_IMPORTED_MODULE_2__.DuenosService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute }
];
CrearDuenoComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-crear-dueno',
        template: _crear_dueno_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_crear_dueno_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CrearDuenoComponent);



/***/ }),

/***/ 5036:
/*!******************************************************************************************!*\
  !*** ./src/app/pacientes/containers/containers/crear-mascota/crear-mascota.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CrearMascotaComponent": () => (/* binding */ CrearMascotaComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _crear_mascota_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./crear-mascota.component.html?ngResource */ 2052);
/* harmony import */ var _crear_mascota_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./crear-mascota.component.scss?ngResource */ 5032);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _services_mascotas_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../services/mascotas.service */ 2099);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _shared_services_camara_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../../shared/services/camara.service */ 2426);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);









let CrearMascotaComponent = class CrearMascotaComponent {
    constructor(_camaraService, _navController, _formBuilder, _mascotasService, _activatedRoute) {
        this._camaraService = _camaraService;
        this._navController = _navController;
        this._formBuilder = _formBuilder;
        this._mascotasService = _mascotasService;
        this._activatedRoute = _activatedRoute;
        this.isUpdate = false;
    }
    ngOnInit() {
        this.dueno = this._activatedRoute.snapshot.data.dueno;
        this.formCrearMascota = this._formBuilder.group({
            nombres: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
            raza: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
            sexo: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
            fechaNacimiento: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
            imagen: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(undefined),
            duenoId: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(this.dueno.id)
        });
        if (this._activatedRoute.snapshot.data.mascota) {
            this.isUpdate = true;
            this.formCrearMascota.patchValue(this._activatedRoute.snapshot.data.mascota);
        }
    }
    tomarFoto() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const photo = yield this._camaraService.takePhoto();
            this.formCrearMascota.get('imagen').setValue(`data:image/${photo.format};base64,${photo.base64String}`);
        });
    }
    crearMascota() {
        if (this.isUpdate) {
            const mascotaId = this._activatedRoute.snapshot.data.mascota.id;
            this._mascotasService.actualizarMascota(mascotaId, this.formCrearMascota.value).subscribe((response) => {
                this._navController.navigateForward(`/pacientes/detalle-dueno/${this.dueno.id}`);
            });
        }
        else {
            this._mascotasService.crearMascota(this.formCrearMascota.value).subscribe((data) => {
                console.log(data);
                this._navController.navigateForward(`pacientes/detalle-dueno/${this.dueno.id}`);
            });
        }
    }
    get nombres() {
        return this.formCrearMascota.get('nombres');
    }
    get raza() {
        return this.formCrearMascota.get('raza');
    }
    get sexo() {
        return this.formCrearMascota.get('sexo');
    }
    get fechaNacimiento() {
        return this.formCrearMascota.get('fechaNacimiento');
    }
    get imagen() {
        return this.formCrearMascota.get('imagen');
    }
};
CrearMascotaComponent.ctorParameters = () => [
    { type: _shared_services_camara_service__WEBPACK_IMPORTED_MODULE_3__.CamaraService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder },
    { type: _services_mascotas_service__WEBPACK_IMPORTED_MODULE_2__.MascotasService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute }
];
CrearMascotaComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-crear-mascota',
        template: _crear_mascota_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_crear_mascota_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CrearMascotaComponent);



/***/ }),

/***/ 7801:
/*!******************************************************************************************!*\
  !*** ./src/app/pacientes/containers/containers/detalle-dueno/detalle-dueno.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetalleDuenoComponent": () => (/* binding */ DetalleDuenoComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _detalle_dueno_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detalle-dueno.component.html?ngResource */ 9468);
/* harmony import */ var _detalle_dueno_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detalle-dueno.component.scss?ngResource */ 7617);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);






let DetalleDuenoComponent = class DetalleDuenoComponent {
    constructor(_navController, _activatedRoute) {
        this._navController = _navController;
        this._activatedRoute = _activatedRoute;
        this.mascotas = [];
    }
    ngOnInit() {
        this.ionViewWillEnter();
    }
    ionViewWillEnter() {
        this.dueno = this._activatedRoute.snapshot.data.dueno;
        this.mascotas = this._activatedRoute.snapshot.data.mascotas;
    }
    crearMascota() {
        this._navController.navigateForward(`/pacientes/crear-mascota/${this.dueno.id}`);
    }
    editarDueno() {
        this._navController.navigateForward(`pacientes/editar-dueno/${this.dueno.id}`);
    }
    editarMascota(mascota) {
        this._navController.navigateForward(`/pacientes/editar-mascota/${this.dueno.id}/${mascota.id}`);
    }
};
DetalleDuenoComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.NavController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute }
];
DetalleDuenoComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-detalle-dueno',
        template: _detalle_dueno_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_detalle_dueno_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], DetalleDuenoComponent);



/***/ }),

/***/ 6476:
/*!********************************************************************************************!*\
  !*** ./src/app/pacientes/containers/containers/listado-duenos/listado-duenos.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListadoDuenosComponent": () => (/* binding */ ListadoDuenosComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _listado_duenos_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listado-duenos.component.html?ngResource */ 8631);
/* harmony import */ var _listado_duenos_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listado-duenos.component.scss?ngResource */ 2003);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 3819);






let ListadoDuenosComponent = class ListadoDuenosComponent {
    constructor(_navController, _activatedRoute) {
        this._navController = _navController;
        this._activatedRoute = _activatedRoute;
        this.listadoDuenos = [];
    }
    ngOnInit() {
        this.ionViewWillEnter();
    }
    ionViewWillEnter() {
        this.listadoDuenos = this._activatedRoute.snapshot.data.duenos;
    }
    verDetalle(dueno) {
        this._navController.navigateForward(`/pacientes/detalle-dueno/${dueno.id}`);
    }
    crearDueno() {
        this._navController.navigateForward('/pacientes/crear-dueno');
    }
};
ListadoDuenosComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.NavController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute }
];
ListadoDuenosComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-listado-duenos',
        template: _listado_duenos_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_listado_duenos_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ListadoDuenosComponent);



/***/ }),

/***/ 6313:
/*!*******************************************************!*\
  !*** ./src/app/pacientes/pacientes-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PacientesPageRoutingModule": () => (/* binding */ PacientesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _resolvers_mascota_resolver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resolvers/mascota.resolver */ 4805);
/* harmony import */ var _resolvers_mascotas_resolver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resolvers/mascotas.resolver */ 6044);
/* harmony import */ var _resolvers_duenos_resolver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resolvers/duenos.resolver */ 8414);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _containers_containers_crear_dueno_crear_dueno_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./containers/containers/crear-dueno/crear-dueno.component */ 179);
/* harmony import */ var _containers_containers_crear_mascota_crear_mascota_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./containers/containers/crear-mascota/crear-mascota.component */ 5036);
/* harmony import */ var _containers_containers_detalle_dueno_detalle_dueno_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./containers/containers/detalle-dueno/detalle-dueno.component */ 7801);
/* harmony import */ var _containers_containers_listado_duenos_listado_duenos_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./containers/containers/listado-duenos/listado-duenos.component */ 6476);
/* harmony import */ var _pacientes_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pacientes.page */ 4199);











const routes = [
    {
        path: '',
        component: _pacientes_page__WEBPACK_IMPORTED_MODULE_7__.PacientesPage,
        children: [
            {
                path: 'listar-duenos',
                component: _containers_containers_listado_duenos_listado_duenos_component__WEBPACK_IMPORTED_MODULE_6__.ListadoDuenosComponent,
                resolve: {
                    duenos: _resolvers_duenos_resolver__WEBPACK_IMPORTED_MODULE_2__.DuenosResolver
                }
            },
            {
                path: 'crear-dueno',
                component: _containers_containers_crear_dueno_crear_dueno_component__WEBPACK_IMPORTED_MODULE_3__.CrearDuenoComponent
            },
            {
                path: 'editar-dueno/:duenoId',
                component: _containers_containers_crear_dueno_crear_dueno_component__WEBPACK_IMPORTED_MODULE_3__.CrearDuenoComponent,
                resolve: {
                    dueno: _resolvers_duenos_resolver__WEBPACK_IMPORTED_MODULE_2__.DuenosResolver
                }
            },
            {
                path: 'detalle-dueno/:duenoId',
                component: _containers_containers_detalle_dueno_detalle_dueno_component__WEBPACK_IMPORTED_MODULE_5__.DetalleDuenoComponent,
                resolve: {
                    dueno: _resolvers_duenos_resolver__WEBPACK_IMPORTED_MODULE_2__.DuenosResolver,
                    mascotas: _resolvers_mascotas_resolver__WEBPACK_IMPORTED_MODULE_1__.MascotasResolver
                }
            },
            {
                path: 'crear-mascota/:duenoId',
                component: _containers_containers_crear_mascota_crear_mascota_component__WEBPACK_IMPORTED_MODULE_4__.CrearMascotaComponent,
                resolve: {
                    dueno: _resolvers_duenos_resolver__WEBPACK_IMPORTED_MODULE_2__.DuenosResolver
                }
            },
            {
                path: 'editar-mascota/:duenoId/:mascotaId',
                component: _containers_containers_crear_mascota_crear_mascota_component__WEBPACK_IMPORTED_MODULE_4__.CrearMascotaComponent,
                resolve: {
                    mascota: _resolvers_mascota_resolver__WEBPACK_IMPORTED_MODULE_0__.MascotaResolver,
                    dueno: _resolvers_duenos_resolver__WEBPACK_IMPORTED_MODULE_2__.DuenosResolver
                },
                runGuardsAndResolvers: 'always'
            },
            {
                path: '',
                redirectTo: 'listar-duenos'
            }
        ]
    }
];
let PacientesPageRoutingModule = class PacientesPageRoutingModule {
};
PacientesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule]
    })
], PacientesPageRoutingModule);



/***/ }),

/***/ 7650:
/*!***********************************************!*\
  !*** ./src/app/pacientes/pacientes.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PacientesPageModule": () => (/* binding */ PacientesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../shared/shared.module */ 4466);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _pacientes_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pacientes.page */ 4199);
/* harmony import */ var _pacientes_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pacientes-routing.module */ 6313);
/* harmony import */ var _containers_containers_listado_duenos_listado_duenos_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./containers/containers/listado-duenos/listado-duenos.component */ 6476);
/* harmony import */ var _containers_containers_crear_dueno_crear_dueno_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./containers/containers/crear-dueno/crear-dueno.component */ 179);
/* harmony import */ var _containers_containers_detalle_dueno_detalle_dueno_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./containers/containers/detalle-dueno/detalle-dueno.component */ 7801);
/* harmony import */ var _containers_containers_crear_mascota_crear_mascota_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./containers/containers/crear-mascota/crear-mascota.component */ 5036);












let PacientesPageModule = class PacientesPageModule {
};
PacientesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
            _pacientes_routing_module__WEBPACK_IMPORTED_MODULE_2__.PacientesPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule
        ],
        declarations: [
            _pacientes_page__WEBPACK_IMPORTED_MODULE_1__.PacientesPage,
            _containers_containers_listado_duenos_listado_duenos_component__WEBPACK_IMPORTED_MODULE_3__.ListadoDuenosComponent,
            _containers_containers_crear_dueno_crear_dueno_component__WEBPACK_IMPORTED_MODULE_4__.CrearDuenoComponent,
            _containers_containers_detalle_dueno_detalle_dueno_component__WEBPACK_IMPORTED_MODULE_5__.DetalleDuenoComponent,
            _containers_containers_crear_mascota_crear_mascota_component__WEBPACK_IMPORTED_MODULE_6__.CrearMascotaComponent
        ]
    })
], PacientesPageModule);



/***/ }),

/***/ 4199:
/*!*********************************************!*\
  !*** ./src/app/pacientes/pacientes.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PacientesPage": () => (/* binding */ PacientesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _pacientes_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pacientes.page.html?ngResource */ 7923);
/* harmony import */ var _pacientes_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pacientes.page.scss?ngResource */ 7737);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let PacientesPage = class PacientesPage {
    constructor() { }
};
PacientesPage.ctorParameters = () => [];
PacientesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-pacientes',
        template: _pacientes_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_pacientes_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PacientesPage);



/***/ }),

/***/ 8414:
/*!********************************************************!*\
  !*** ./src/app/pacientes/resolvers/duenos.resolver.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DuenosResolver": () => (/* binding */ DuenosResolver)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _services_duenos_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../services/duenos.service */ 9964);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);



let DuenosResolver = class DuenosResolver {
    constructor(_duenosService) {
        this._duenosService = _duenosService;
    }
    resolve(route, state) {
        if (route.params.duenoId) {
            return this._duenosService.getDueno(route.params.duenoId);
        }
        else {
            return this._duenosService.getDuenos();
        }
    }
};
DuenosResolver.ctorParameters = () => [
    { type: _services_duenos_service__WEBPACK_IMPORTED_MODULE_0__.DuenosService }
];
DuenosResolver = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], DuenosResolver);



/***/ }),

/***/ 4805:
/*!*********************************************************!*\
  !*** ./src/app/pacientes/resolvers/mascota.resolver.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MascotaResolver": () => (/* binding */ MascotaResolver)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _services_mascotas_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../services/mascotas.service */ 2099);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);



let MascotaResolver = class MascotaResolver {
    constructor(_mascotasService) {
        this._mascotasService = _mascotasService;
    }
    resolve(route, state) {
        if (route.params.mascotaId) {
            console.log('resolver');
            return this._mascotasService.obtenerMascotaPorId(route.params.mascotaId);
        }
    }
};
MascotaResolver.ctorParameters = () => [
    { type: _services_mascotas_service__WEBPACK_IMPORTED_MODULE_0__.MascotasService }
];
MascotaResolver = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], MascotaResolver);



/***/ }),

/***/ 6044:
/*!**********************************************************!*\
  !*** ./src/app/pacientes/resolvers/mascotas.resolver.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MascotasResolver": () => (/* binding */ MascotasResolver)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _services_mascotas_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../services/mascotas.service */ 2099);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);



let MascotasResolver = class MascotasResolver {
    constructor(_mascotasService) {
        this._mascotasService = _mascotasService;
    }
    resolve(route, state) {
        if (route.params.duenoId) {
            return this._mascotasService.obtenerMascotasPorDueno(route.params.duenoId);
        }
    }
};
MascotasResolver.ctorParameters = () => [
    { type: _services_mascotas_service__WEBPACK_IMPORTED_MODULE_0__.MascotasService }
];
MascotasResolver = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], MascotasResolver);



/***/ }),

/***/ 9964:
/*!******************************************************!*\
  !*** ./src/app/pacientes/services/duenos.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DuenosService": () => (/* binding */ DuenosService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);



let DuenosService = class DuenosService {
    constructor(_httpClient) {
        this._httpClient = _httpClient;
    }
    crearDueno(dueno) {
        return this._httpClient.post('http://localhost:3000/duenos', dueno);
    }
    getDueno(duenoId) {
        return this._httpClient.get(`http://localhost:3000/duenos/${duenoId}`);
    }
    getDuenos() {
        return this._httpClient.get('http://localhost:3000/duenos');
    }
    actualizarDueno(duenoId, dueno) {
        return this._httpClient.put(`http://localhost:3000/duenos/${duenoId}`, dueno);
    }
};
DuenosService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient }
];
DuenosService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], DuenosService);



/***/ }),

/***/ 2099:
/*!********************************************************!*\
  !*** ./src/app/pacientes/services/mascotas.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MascotasService": () => (/* binding */ MascotasService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);



let MascotasService = class MascotasService {
    constructor(_httpClient) {
        this._httpClient = _httpClient;
    }
    crearMascota(mascota) {
        return this._httpClient.post('http://localhost:3000/mascotas', mascota);
    }
    obtenerMascotasPorDueno(duenoId) {
        return this._httpClient.get(`http://localhost:3000/mascotas/dueno/${duenoId}`);
    }
    obtenerMascotaPorId(mascotaId) {
        return this._httpClient.get(`http://localhost:3000/mascotas/${mascotaId}`);
    }
    actualizarMascota(mascotaId, mascota) {
        return this._httpClient.put(`http://localhost:3000/mascotas/${mascotaId}`, mascota);
    }
};
MascotasService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient }
];
MascotasService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], MascotasService);



/***/ }),

/***/ 373:
/*!***************************************************************************************************!*\
  !*** ./src/app/pacientes/containers/containers/crear-dueno/crear-dueno.component.scss?ngResource ***!
  \***************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhci1kdWVuby5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 5032:
/*!*******************************************************************************************************!*\
  !*** ./src/app/pacientes/containers/containers/crear-mascota/crear-mascota.component.scss?ngResource ***!
  \*******************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhci1tYXNjb3RhLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 7617:
/*!*******************************************************************************************************!*\
  !*** ./src/app/pacientes/containers/containers/detalle-dueno/detalle-dueno.component.scss?ngResource ***!
  \*******************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXRhbGxlLWR1ZW5vLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 2003:
/*!*********************************************************************************************************!*\
  !*** ./src/app/pacientes/containers/containers/listado-duenos/listado-duenos.component.scss?ngResource ***!
  \*********************************************************************************************************/
/***/ ((module) => {

module.exports = ".card__info--container {\n  display: flex;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3RhZG8tZHVlbm9zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FBQVIiLCJmaWxlIjoibGlzdGFkby1kdWVub3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZCB7XG4gICAgJl9faW5mby0tY29udGFpbmVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG59Il19 */";

/***/ }),

/***/ 7737:
/*!**********************************************************!*\
  !*** ./src/app/pacientes/pacientes.page.scss?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWNpZW50ZXMucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 8534:
/*!***************************************************************************************************!*\
  !*** ./src/app/pacientes/containers/containers/crear-dueno/crear-dueno.component.html?ngResource ***!
  \***************************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\n  <form [formGroup]=\"formCrearDueno\" (ngSubmit)=\"crearDueno()\">\n\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"12\" class=\"flex--centered\">\n        <ion-card class=\"image__profile\" button (click)=\"tomarFoto()\" >\n            <img [src]=\"imagen.value ? imagen.value : 'assets/img/camara.png'\" class=\"image__profile\">\n        </ion-card>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-card>\n          <ion-input type=\"text\" placeholder=\"Nombres\" formControlName=\"nombres\"></ion-input>\n        </ion-card>\n\n        <ion-card>\n          <ion-input type=\"text\" placeholder=\"Identificación\" formControlName=\"identificacion\"></ion-input>\n        </ion-card>\n\n        <ion-card>\n          <ion-input type=\"text\" placeholder=\"Teléfono\" formControlName=\"telefono\"></ion-input>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col size=\"12\" class=\"flex--centered\">\n        <ion-button type=\"submit\" color=\"secondary\" shape=\"round\" mode=\"ios\">\n          Guardar\n        </ion-button>\n      </ion-col>\n\n    </ion-row>\n  </ion-grid>\n</form>\n\n</ion-content>";

/***/ }),

/***/ 2052:
/*!*******************************************************************************************************!*\
  !*** ./src/app/pacientes/containers/containers/crear-mascota/crear-mascota.component.html?ngResource ***!
  \*******************************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\n  <form [formGroup]=\"formCrearMascota\" (ngSubmit)=\"crearMascota()\">\n\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"12\" class=\"flex--centered\">\n          <ion-card class=\"image__profile\" button (click)=\"tomarFoto()\">\n            <img [src]=\"imagen.value ? imagen.value : 'assets/img/camara.png'\" class=\"image__profile\">\n          </ion-card>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-card>\n            <ion-input type=\"text\" placeholder=\"Nombres\" formControlName=\"nombres\"></ion-input>\n          </ion-card>\n\n          <ion-card>\n            <ion-input type=\"text\" placeholder=\"Raza\" formControlName=\"raza\"></ion-input>\n          </ion-card>\n\n          <ion-card>\n            <ion-select placeholder=\"Sexo\" formControlName=\"sexo\">\n              <ion-select-option value=\"macho\">Macho</ion-select-option>\n              <ion-select-option value=\"hembra\">Hembra</ion-select-option>\n            </ion-select>\n          </ion-card>\n\n          <ion-card>\n            <ion-label class=\"datepicker--title\">Fecha de nacimiento</ion-label>\n            <ion-datetime presentation=\"date\" formControlName=\"fechaNacimiento\">\n            </ion-datetime>\n          </ion-card>\n\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col size=\"12\" class=\"flex--centered\">\n          <ion-button color=\"secondary\" shape=\"round\" mode=\"ios\" type=\"submit\">\n            Guardar\n          </ion-button>\n        </ion-col>\n\n      </ion-row>\n    </ion-grid>\n  </form>\n</ion-content>";

/***/ }),

/***/ 9468:
/*!*******************************************************************************************************!*\
  !*** ./src/app/pacientes/containers/containers/detalle-dueno/detalle-dueno.component.html?ngResource ***!
  \*******************************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"12\" class=\"flex--centered\">\n        <img [src]=\"dueno.imagenUrl\" class=\"image__profile\" onerror=\"this.src = 'assets/img/profile.jpeg'\">\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col size=\"12\" class=\"flex--centered\">\n        <ion-icon name=\"create\" class=\"edit--icon\" (click)=\"editarDueno()\"></ion-icon>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col size=\"12\" class=\"flex--centered\">\n        <ion-label>\n          <b>Nombre: </b>{{dueno.nombres}}\n        </ion-label>\n      </ion-col>\n\n      <ion-col size=\"12\" class=\"flex--centered\">\n        <ion-label>\n          <b>Identificación: </b>{{dueno.identificacion}}\n        </ion-label>\n      </ion-col>\n\n      <ion-col size=\"12\" class=\"flex--centered\">\n        <ion-label>\n          <b>Teléfono: </b>{{dueno.telefono}}\n        </ion-label>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"12\" *ngFor=\"let mascota of mascotas\">\n            <ion-card button (click)=\"editarMascota(mascota)\">\n              <img [src]=\"mascota.imagenUrl\" alt=\"imagen-mascota\">\n              <ion-card-content>\n                <ion-grid>\n                  <ion-row>\n                    <ion-col size=\"6\">\n                      <ion-label>\n                        <b>Nombre: </b>{{mascota.nombres}}\n                      </ion-label>\n                    </ion-col>\n                    <ion-col size=\"6\">\n                      <ion-label>\n                        <b>Raza: </b>{{mascota.raza}}\n                      </ion-label>\n                    </ion-col>\n                    <ion-col size=\"6\">\n                      <ion-label>\n                        <b>Nacimiento: </b>{{mascota.fechaNacimiento}}\n                      </ion-label>\n                    </ion-col>\n                    <ion-col size=\"6\">\n                      <ion-label>\n                        <b>Sexo: </b>{{mascota.sexo}}\n                      </ion-label>\n                    </ion-col>\n                  </ion-row>\n                </ion-grid>\n              </ion-card-content>\n            </ion-card>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-row>\n\n    <ion-row>\n      <ion-col size=\"12\" class=\"flex--centered\">\n        <ion-button color=\"secondary\" shape=\"round\" (click)=\"crearMascota()\" mode=\"ios\">\n          Agregar Mascota\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>";

/***/ }),

/***/ 8631:
/*!*********************************************************************************************************!*\
  !*** ./src/app/pacientes/containers/containers/listado-duenos/listado-duenos.component.html?ngResource ***!
  \*********************************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"12\" class=\"button__container--centered\">\n        <ion-button color=\"secondary\" shape=\"round\" (click)=\"crearDueno()\" mode=\"ios\">\n          Agregar Dueño\n        </ion-button>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col size=\"12\" size-md=\"6\" *ngFor=\"let dueno of listadoDuenos\">\n        <ion-card button (click)=\"verDetalle(dueno)\">\n          <ion-card-header>\n            <ion-card-title>\n              {{dueno.nombres}}\n            </ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n            <ion-grid>\n              <ion-row>\n                <ion-col size=\"4\">\n                  <img [src]=\"dueno.imagenUrl\" class=\"image__profile\" >\n                </ion-col>\n                <ion-col size=\"8\" class=\"card__info--container\">\n                  <ion-grid>\n                    <ion-row>\n                      <ion-col size=\"12\">\n                        <ion-label>\n                          <b>Identificación: </b>{{dueno.identificacion}}\n                        </ion-label>\n                      </ion-col>\n\n                      <ion-col size=\"12\">\n                        <ion-label>\n                          <b>Teléfono: </b>{{dueno.telefono}}\n                        </ion-label>\n                      </ion-col>\n                    </ion-row>\n                  </ion-grid>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>";

/***/ }),

/***/ 7923:
/*!**********************************************************!*\
  !*** ./src/app/pacientes/pacientes.page.html?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-item color=\"primary\" lines=\"none\">\n      <ion-back-button defaultHref=\"/\" text=\"\" slot=\"start\"></ion-back-button>\n\n      <ion-title>\n        Dueños de mascotas\n      </ion-title>\n    </ion-item>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content >\n  <ion-router-outlet></ion-router-outlet>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pacientes_pacientes_module_ts.js.map