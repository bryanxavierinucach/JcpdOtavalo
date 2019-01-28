(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["caso-form-caso-form-module"],{

/***/ "./src/app/views/caso-form/caso-form.component.html":
/*!**********************************************************!*\
  !*** ./src/app/views/caso-form/caso-form.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n    <app-page-header [heading]=\"'Registro de Casos'\" [icon]=\"'fa-edit'\"></app-page-header>\n    <div class=\"row\">\n        <div class=\"col col-xl-10 col-lg-15\">\n            <div class=\"card mb-3\">\n                <div class=\"card-header \"> DATOS DEL CASO</div>\n                <div class=\"container\">\n                    <br/>\n                    <label for=\"blablabla\">Número de Caso:  </label> &nbsp; &nbsp; &nbsp; <input type=\"text\" name=\"numcaso\" id=\"nuncaso\" />\n                    <br/>\n                    <br/>\n                    <fieldset class=\"form-group\">\n                        <label> <b>Procedimiento con Conocimientos:</b> </label> &nbsp;\n                        <div class=\"radio\">\n                            <label>\n                                    <input type=\"radio\" name=\"optionsRadios\" id=\"optionsRadios1\" value=\"option1\" checked=\"\"> Radio 1\n                                </label> &nbsp;\n                        </div>\n                        <div class=\"radio\">\n                            <label>\n                                    <input type=\"radio\" name=\"optionsRadios\" id=\"optionsRadios2\" value=\"option2\"> Radio 2\n                                </label>\n                        </div>\n                    </fieldset>\n                    <fieldset class=\"form-group\">\n                        <label><b>Tipo de denuncia: </b></label>\n                        <div class=\"radio\">\n                            <label>\n                                        <input type=\"radio\" name=\"optionsRadios\" id=\"optionsRadios1\" value=\"option1\" checked=\"\"> Radio 1\n                                    </label>\n                        </div>\n                        <div class=\"radio\">\n                            <label>\n                                        <input type=\"radio\" name=\"optionsRadios\" id=\"optionsRadios2\" value=\"option2\"> Radio 2\n                                    </label>\n                        </div>\n\n                    </fieldset>\n                    <fieldset class=\"form-group\">\n                        <label>Motivo: </label> <textarea class=\"form-control\" rows=\"3\" cols=\"20\"></textarea>\n                    </fieldset>\n                    <fieldset class=\"form-group\">\n                        <label>Observaciones: </label>\n                        <label>Motivo: </label> <textarea class=\"form-control\" rows=\"3\" cols=\"30\"></textarea>\n                    </fieldset>\n                    <label>Fecha de Registro: </label>\n                    <form class=\"form-inline mb-3\">\n                        <div class=\"form-group\">\n                            <div class=\"input-group datepicker-input\">\n                                <input class=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"dp\" ngbDatepicker #d=\"ngbDatepicker\">\n                                <button class=\"input-group-addon\" (click)=\"d.toggle()\" type=\"button\">\n                                                        <!-- <img src=\"img/calendar-icon.svg\" style=\"width: 1.2rem; height: 1rem; cursor: pointer;\"/> -->\n                                                        <span class=\"fa fa-calendar\"></span>\n                                                    </button>\n                            </div>\n                        </div>\n                    </form>\n                    <label>Fecha de Ingreso: </label>\n                    <form class=\"form-inline mb-3\">\n                        <div class=\"form-group\">\n                            <div class=\"input-group datepicker-input\">\n                                <input class=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"dp\" ngbDatepicker #d=\"ngbDatepicker\">\n                                <button class=\"input-group-addon\" (click)=\"d.toggle()\" type=\"button\">\n                                                            <!-- <img src=\"img/calendar-icon.svg\" style=\"width: 1.2rem; height: 1rem; cursor: pointer;\"/> -->\n                                                            <span class=\"fa fa-calendar\"></span>\n                                                        </button>\n                            </div>\n                        </div>\n                    </form>\n                </div>\n            </div>\n            <div class=\"card mb-3\">\n                <div class=\"card-header \"> DATOS DEL DERECHO AMENAZADO O VIOLENTADO</div>\n                <div class=\"container\">\n                    <br/>\n                    <fieldset class=\"form-group\">\n\n                        <label> <b>Derecho Amenazado o violentado: </b> </label>&nbsp;\n\n                        <label><input type=\"radio\" name=\"optionsRadios\" id=\"optionsRadios1\" value=\"option1\" checked=\"\"> Radio 1\n                            </label>&nbsp;\n                        <label> <input type=\"radio\" name=\"optionsRadios\" id=\"optionsRadios2\" value=\"option2\"> Radio 2\n                            </label>\n\n                    </fieldset>\n                    <fieldset class=\"form-group\">\n                        <label><b>Clasificacion del Derecho Amenazado o Violentado </b></label>\n                        <div class=\"radio\">\n                            <label>\n                                                    <input type=\"radio\" name=\"optionsRadios\" id=\"optionsRadios1\" value=\"option1\" checked=\"\"> Radio 1\n                                                </label>\n                        </div>\n                        <div class=\"radio\">\n                            <label>\n                                                    <input type=\"radio\" name=\"optionsRadios\" id=\"optionsRadios2\" value=\"option2\"> Radio 2\n                                                </label>\n                        </div>\n                    </fieldset>\n\n                </div>\n                <!-- Aqui Cierra el container-->\n\n            </div>\n            <!-- Aqui se cierra la clase del div de derechos amenazados violentados-->\n            <button type=\"button\" class=\"btn btn-primary\">Guardar</button>\n            <div class=\"card mb-3\">\n                <div class=\"card-header \"> DATOS DE CASO INGRESADO</div>\n                <div class=\"container\">\n\n\n                </div>\n                <!-- Aqui Cierra el container-->\n\n            </div>\n            <!-- Aqui se cierra la clase del div de derechos amenazados violentados-->\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/views/caso-form/caso-form.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/views/caso-form/caso-form.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host /deep/ .datepicker-input .custom-select {\n  width: 50%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy94YXZpZXJpbnVjYS9Eb2N1bWVudHMvR2l0SHViL0pjcGRPdGF2YWxvL0pDUEQvc3JjL2FwcC92aWV3cy9jYXNvLWZvcm0vY2Fzby1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRVEsV0FBVSxFQUNiIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvY2Fzby1mb3JtL2Nhc28tZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IC9kZWVwLyAuZGF0ZXBpY2tlci1pbnB1dCB7XG4gICAgLmN1c3RvbS1zZWxlY3Qge1xuICAgICAgICB3aWR0aDogNTAlO1xuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/views/caso-form/caso-form.component.ts":
/*!********************************************************!*\
  !*** ./src/app/views/caso-form/caso-form.component.ts ***!
  \********************************************************/
/*! exports provided: CasoFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CasoFormComponent", function() { return CasoFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../router.animations */ "./src/app/router.animations.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CasoFormComponent = /** @class */ (function () {
    function CasoFormComponent() {
    }
    CasoFormComponent.prototype.ngOnInit = function () {
    };
    CasoFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-caso-form',
            template: __webpack_require__(/*! ./caso-form.component.html */ "./src/app/views/caso-form/caso-form.component.html"),
            styles: [__webpack_require__(/*! ./caso-form.component.scss */ "./src/app/views/caso-form/caso-form.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_1__["routerTransition"])()]
        }),
        __metadata("design:paramtypes", [])
    ], CasoFormComponent);
    return CasoFormComponent;
}());



/***/ }),

/***/ "./src/app/views/caso-form/caso-form.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/views/caso-form/caso-form.module.ts ***!
  \*****************************************************/
/*! exports provided: CasoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CasoModule", function() { return CasoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _caso_form_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./caso-form.routing.module */ "./src/app/views/caso-form/caso-form.routing.module.ts");
/* harmony import */ var _caso_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./caso-form.component */ "./src/app/views/caso-form/caso-form.component.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var CasoModule = /** @class */ (function () {
    function CasoModule() {
    }
    CasoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _caso_form_routing_module__WEBPACK_IMPORTED_MODULE_3__["CasoRoutingModule"], _shared__WEBPACK_IMPORTED_MODULE_5__["PageHeaderModule"]],
            declarations: [_caso_form_component__WEBPACK_IMPORTED_MODULE_4__["CasoFormComponent"]]
        })
    ], CasoModule);
    return CasoModule;
}());



/***/ }),

/***/ "./src/app/views/caso-form/caso-form.routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/views/caso-form/caso-form.routing.module.ts ***!
  \*************************************************************/
/*! exports provided: CasoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CasoRoutingModule", function() { return CasoRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _caso_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./caso-form.component */ "./src/app/views/caso-form/caso-form.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: _caso_form_component__WEBPACK_IMPORTED_MODULE_2__["CasoFormComponent"]
    }
];
var CasoRoutingModule = /** @class */ (function () {
    function CasoRoutingModule() {
    }
    CasoRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], CasoRoutingModule);
    return CasoRoutingModule;
}());



/***/ })

}]);
//# sourceMappingURL=caso-form-caso-form-module.js.map