(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["casos-list-casos-list-module"],{

/***/ "./src/app/views/casos-list/casos-list-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/views/casos-list/casos-list-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: CasosRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CasosRoutingModule", function() { return CasosRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _casos_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./casos-list.component */ "./src/app/views/casos-list/casos-list.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: _casos_list_component__WEBPACK_IMPORTED_MODULE_2__["CasosListComponent"]
    }
];
var CasosRoutingModule = /** @class */ (function () {
    function CasosRoutingModule() {
    }
    CasosRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], CasosRoutingModule);
    return CasosRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/casos-list/casos-list.component.html":
/*!************************************************************!*\
  !*** ./src/app/views/casos-list/casos-list.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n    <app-page-header [heading]=\"'Busqueda de Casos Registrados'\" [icon]=\"'fa-th-list'\"></app-page-header>\n    <div class=\"row\">\n\n        <div class=\"col col-xl-10 col-lg-15\">\n            <div class=\"card mb-3\">\n                <div class=\"card-header \" align=center> Lista de Casos Registrados</div>\n                <table class=\"card-body table table-hover\">\n                    <thead>\n                        <tr>\n                            <th>Nro. Caso <input class=\"form-control\" height=\"0,5\" width=\"0,5\" placeholder=\"Filtrar Caso\">\n                            </th>\n                            <th>Fecha Ingreso</th>\n                            <th>Fecha Registro</th>\n                            <th>Ver Caso</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let item of casosli  \">\n                            <th scope=\"row\">{{item.caso_numcaso}}</th>\n                            <td>{{item.caso_fechaingreso| date:'yyyy-MM-dd'}}</td>\n                            <td>{{item.caso_fechareg| date:'yyyy-MM-dd'}}</td>\n                            <td><button>Ver Caso</button></td>\n                        </tr>\n\n\n                    </tbody>\n                    <tfoot>\n                        <tr>\n                            <td colspan=\"4\">\n                            </td>\n                        </tr>\n                    </tfoot>\n                </table>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/views/casos-list/casos-list.component.scss":
/*!************************************************************!*\
  !*** ./src/app/views/casos-list/casos-list.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2Nhc29zLWxpc3QvY2Fzb3MtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/views/casos-list/casos-list.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/views/casos-list/casos-list.component.ts ***!
  \**********************************************************/
/*! exports provided: CasosListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CasosListComponent", function() { return CasosListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var _services_casos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/casos.service */ "./src/app/services/casos.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// importar el servicio en el cual creamos las Apis

var CasosListComponent = /** @class */ (function () {
    function CasosListComponent(casosService) {
        this.casosService = casosService;
        this.casosli = [];
    }
    CasosListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.casosService.getCasos().subscribe(function (res) {
            _this.casosli = res;
        }, function (err) { return console.error(err); });
    };
    CasosListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-casos-list',
            template: __webpack_require__(/*! ./casos-list.component.html */ "./src/app/views/casos-list/casos-list.component.html"),
            styles: [__webpack_require__(/*! ./casos-list.component.scss */ "./src/app/views/casos-list/casos-list.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_1__["routerTransition"])()]
        }),
        __metadata("design:paramtypes", [_services_casos_service__WEBPACK_IMPORTED_MODULE_2__["CasosService"]])
    ], CasosListComponent);
    return CasosListComponent;
}());



/***/ }),

/***/ "./src/app/views/casos-list/casos-list.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/views/casos-list/casos-list.module.ts ***!
  \*******************************************************/
/*! exports provided: CasosModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CasosModule", function() { return CasosModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _casos_list_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./casos-list-routing.module */ "./src/app/views/casos-list/casos-list-routing.module.ts");
/* harmony import */ var _casos_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./casos-list.component */ "./src/app/views/casos-list/casos-list.component.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var CasosModule = /** @class */ (function () {
    function CasosModule() {
    }
    CasosModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _casos_list_routing_module__WEBPACK_IMPORTED_MODULE_2__["CasosRoutingModule"], _shared__WEBPACK_IMPORTED_MODULE_4__["PageHeaderModule"]],
            declarations: [_casos_list_component__WEBPACK_IMPORTED_MODULE_3__["CasosListComponent"]]
        })
    ], CasosModule);
    return CasosModule;
}());



/***/ })

}]);
//# sourceMappingURL=casos-list-casos-list-module.js.map