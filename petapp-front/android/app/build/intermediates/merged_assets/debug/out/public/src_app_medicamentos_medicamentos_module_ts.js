"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_medicamentos_medicamentos_module_ts"],{

/***/ 3316:
/*!********************************************************************************************!*\
  !*** ./src/app/medicamentos/containers/crear-medicamentos/crear-medicamentos.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CrearMedicamentosComponent": () => (/* binding */ CrearMedicamentosComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _crear_medicamentos_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./crear-medicamentos.component.html?ngResource */ 4553);
/* harmony import */ var _crear_medicamentos_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./crear-medicamentos.component.scss?ngResource */ 461);
/* harmony import */ var _services_medicamentos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/medicamentos.service */ 4905);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);







let CrearMedicamentosComponent = class CrearMedicamentosComponent {
    constructor(_navController, formBuilder, _medicamentosService) {
        this._navController = _navController;
        this.formBuilder = formBuilder;
        this._medicamentosService = _medicamentosService;
    }
    ngOnInit() {
        this.formCrearMedicamento = this.formBuilder.group({
            nombre: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
            tipo: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
            unidadMedida: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('')
        });
    }
    crearMedicamento() {
        this._medicamentosService.crearMedicamento(this.formCrearMedicamento.value).subscribe((data) => {
            this._navController.navigateForward('/medicamentos/listado-medicamentos');
        });
    }
};
CrearMedicamentosComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder },
    { type: _services_medicamentos_service__WEBPACK_IMPORTED_MODULE_2__.MedicamentosService }
];
CrearMedicamentosComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-crear-medicamentos',
        template: _crear_medicamentos_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_crear_medicamentos_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CrearMedicamentosComponent);



/***/ }),

/***/ 3622:
/*!************************************************************************************************!*\
  !*** ./src/app/medicamentos/containers/listado-medicamentos/listado-medicamentos.component.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListadoMedicamentosComponent": () => (/* binding */ ListadoMedicamentosComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _listado_medicamentos_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listado-medicamentos.component.html?ngResource */ 3880);
/* harmony import */ var _listado_medicamentos_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listado-medicamentos.component.scss?ngResource */ 2412);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);






let ListadoMedicamentosComponent = class ListadoMedicamentosComponent {
    constructor(_navController, _activatedRoute) {
        this._navController = _navController;
        this._activatedRoute = _activatedRoute;
        this.medicamentos = [];
    }
    ngOnInit() {
        this.ionViewWillEnter();
    }
    ionViewWillEnter() {
        this.medicamentos = this._activatedRoute.snapshot.data.medicamentos;
        console.log(this.medicamentos);
    }
    agregarMedicamento() {
        this._navController.navigateForward('/medicamentos/crear-medicamento');
    }
};
ListadoMedicamentosComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.NavController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute }
];
ListadoMedicamentosComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-listado-medicamentos',
        template: _listado_medicamentos_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_listado_medicamentos_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ListadoMedicamentosComponent);



/***/ }),

/***/ 823:
/*!*************************************************************!*\
  !*** ./src/app/medicamentos/medicamentos-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MedicamentosPageRoutingModule": () => (/* binding */ MedicamentosPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _resolvers_medicamentos_resolver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resolvers/medicamentos.resolver */ 5325);
/* harmony import */ var _containers_listado_medicamentos_listado_medicamentos_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./containers/listado-medicamentos/listado-medicamentos.component */ 3622);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _containers_crear_medicamentos_crear_medicamentos_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./containers/crear-medicamentos/crear-medicamentos.component */ 3316);
/* harmony import */ var _medicamentos_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./medicamentos.page */ 1612);







const routes = [
    {
        path: '',
        component: _medicamentos_page__WEBPACK_IMPORTED_MODULE_3__.MedicamentosPage,
        children: [
            {
                path: 'listado-medicamentos',
                component: _containers_listado_medicamentos_listado_medicamentos_component__WEBPACK_IMPORTED_MODULE_1__.ListadoMedicamentosComponent,
                resolve: {
                    medicamentos: _resolvers_medicamentos_resolver__WEBPACK_IMPORTED_MODULE_0__.MedicamentosResolver
                }
            },
            {
                path: 'crear-medicamento',
                component: _containers_crear_medicamentos_crear_medicamentos_component__WEBPACK_IMPORTED_MODULE_2__.CrearMedicamentosComponent
            },
            {
                path: 'editar-medicamento',
                component: _containers_crear_medicamentos_crear_medicamentos_component__WEBPACK_IMPORTED_MODULE_2__.CrearMedicamentosComponent
            },
            {
                path: '',
                redirectTo: 'listado-medicamentos'
            }
        ]
    }
];
let MedicamentosPageRoutingModule = class MedicamentosPageRoutingModule {
};
MedicamentosPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
    })
], MedicamentosPageRoutingModule);



/***/ }),

/***/ 4589:
/*!*****************************************************!*\
  !*** ./src/app/medicamentos/medicamentos.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MedicamentosPageModule": () => (/* binding */ MedicamentosPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _containers_crear_medicamentos_crear_medicamentos_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./containers/crear-medicamentos/crear-medicamentos.component */ 3316);
/* harmony import */ var _containers_listado_medicamentos_listado_medicamentos_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./containers/listado-medicamentos/listado-medicamentos.component */ 3622);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _medicamentos_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./medicamentos.page */ 1612);
/* harmony import */ var _medicamentos_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./medicamentos-routing.module */ 823);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ 4466);











let MedicamentosPageModule = class MedicamentosPageModule {
};
MedicamentosPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forChild([{ path: '', component: _medicamentos_page__WEBPACK_IMPORTED_MODULE_2__.MedicamentosPage }]),
            _medicamentos_routing_module__WEBPACK_IMPORTED_MODULE_3__.MedicamentosPageRoutingModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule
        ],
        declarations: [_medicamentos_page__WEBPACK_IMPORTED_MODULE_2__.MedicamentosPage, _containers_listado_medicamentos_listado_medicamentos_component__WEBPACK_IMPORTED_MODULE_1__.ListadoMedicamentosComponent, _containers_crear_medicamentos_crear_medicamentos_component__WEBPACK_IMPORTED_MODULE_0__.CrearMedicamentosComponent]
    })
], MedicamentosPageModule);



/***/ }),

/***/ 1612:
/*!***************************************************!*\
  !*** ./src/app/medicamentos/medicamentos.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MedicamentosPage": () => (/* binding */ MedicamentosPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _medicamentos_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./medicamentos.page.html?ngResource */ 5623);
/* harmony import */ var _medicamentos_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./medicamentos.page.scss?ngResource */ 7969);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let MedicamentosPage = class MedicamentosPage {
    constructor() { }
};
MedicamentosPage.ctorParameters = () => [];
MedicamentosPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-medicamentos',
        template: _medicamentos_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_medicamentos_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], MedicamentosPage);



/***/ }),

/***/ 5325:
/*!*****************************************************************!*\
  !*** ./src/app/medicamentos/resolvers/medicamentos.resolver.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MedicamentosResolver": () => (/* binding */ MedicamentosResolver)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _services_medicamentos_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../services/medicamentos.service */ 4905);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);



let MedicamentosResolver = class MedicamentosResolver {
    constructor(_medicamentosService) {
        this._medicamentosService = _medicamentosService;
    }
    resolve(route, state) {
        return this._medicamentosService.obtenerMedicamentos();
    }
};
MedicamentosResolver.ctorParameters = () => [
    { type: _services_medicamentos_service__WEBPACK_IMPORTED_MODULE_0__.MedicamentosService }
];
MedicamentosResolver = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], MedicamentosResolver);



/***/ }),

/***/ 4905:
/*!***************************************************************!*\
  !*** ./src/app/medicamentos/services/medicamentos.service.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MedicamentosService": () => (/* binding */ MedicamentosService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../environments/environment */ 2340);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let MedicamentosService = class MedicamentosService {
    constructor(_httpClient) {
        this._httpClient = _httpClient;
    }
    crearMedicamento(medicamento) {
        return this._httpClient.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API}/medicamentos`, medicamento);
    }
    obtenerMedicamentos() {
        return this._httpClient.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API}/medicamentos`);
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

/***/ 461:
/*!*********************************************************************************************************!*\
  !*** ./src/app/medicamentos/containers/crear-medicamentos/crear-medicamentos.component.scss?ngResource ***!
  \*********************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhci1tZWRpY2FtZW50b3MuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 2412:
/*!*************************************************************************************************************!*\
  !*** ./src/app/medicamentos/containers/listado-medicamentos/listado-medicamentos.component.scss?ngResource ***!
  \*************************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0YWRvLW1lZGljYW1lbnRvcy5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 7969:
/*!****************************************************************!*\
  !*** ./src/app/medicamentos/medicamentos.page.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZWRpY2FtZW50b3MucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 4553:
/*!*********************************************************************************************************!*\
  !*** ./src/app/medicamentos/containers/crear-medicamentos/crear-medicamentos.component.html?ngResource ***!
  \*********************************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\n  <form [formGroup]=\"formCrearMedicamento\" (ngSubmit)=\"crearMedicamento()\">\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-card>\n            <ion-input type=\"text\" placeholder=\"Nombre\" formControlName=\"nombre\"></ion-input>\n          </ion-card>\n        </ion-col>\n        \n        <ion-col size=\"12\">\n          <ion-card>\n            <ion-input type=\"text\" placeholder=\"Unidad de medida\" formControlName=\"unidadMedida\"></ion-input>\n          </ion-card>\n        </ion-col>\n        \n        <ion-col size=\"12\">\n          <ion-card>\n            <ion-input type=\"text\" placeholder=\"Tipo\" formControlName=\"tipo\"></ion-input>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n      \n      <ion-row>\n        <ion-col size=\"12\" class=\"flex--centered\">\n          <ion-button type=\"submit\" color=\"secondary\" shape=\"round\" mode=\"ios\" type=\"submit\">\n            Guardar\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n</ion-content>\n";

/***/ }),

/***/ 3880:
/*!*************************************************************************************************************!*\
  !*** ./src/app/medicamentos/containers/listado-medicamentos/listado-medicamentos.component.html?ngResource ***!
  \*************************************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"12\" class=\"flex--centered\">\n        <ion-button mode=\"ios\" shape=\"round\" color=\"secondary\" (click)=\"agregarMedicamento()\">\n          Agregar medicamento\n        </ion-button>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col size=\"12\" *ngFor=\"let medicamento of medicamentos\">\n        <ion-card>\n          <ion-card-header>\n            <ion-card-title>\n              {{medicamento.nombre}}\n            </ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n            <ion-grid>\n              <ion-row>\n                <ion-col size=\"12\">\n                  <ion-label><b>Unidad de medida: </b>{{medicamento.unidadMedida}}</ion-label>\n                </ion-col>\n                <ion-col size=\"12\">\n                  <ion-label><b>Tipo: </b>{{medicamento.tipo}}</ion-label>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";

/***/ }),

/***/ 5623:
/*!****************************************************************!*\
  !*** ./src/app/medicamentos/medicamentos.page.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-item color=\"primary\" lines=\"none\">\n      <ion-back-button defaultHref=\"/\" text=\"\" slot=\"start\"></ion-back-button>\n\n      <ion-title>\n        Medicamentos\n      </ion-title>\n    </ion-item>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-router-outlet></ion-router-outlet>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_medicamentos_medicamentos_module_ts.js.map