(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"9fKm":function(l,n,u){"use strict";u.r(n);var o=u("CcnG"),e=function(){return function(){}}(),a=u("9AJC"),t=u("pMnS"),i=u("Ip0R"),s=u("gIcY"),c=u("rMXk"),r=u("3zLz"),b=u("ejFE"),d=function(){function l(l,n){this.casosService=l,this.fb=n,this.caso={caso_id:0,proco_id:0,tda_id:0,dav_id:0,tdenun_id:0,caso_numcaso:"",caso_motivo:"",caso_observaciones:"",caso_fechareg:new Date,caso_fechaingreso:new Date},this.proco=[],this.tdenun=[],this.tda=[],this.ttda=[],this.createForm()}return l.prototype.createForm=function(){this.angForm=this.fb.group({proco_id:["",s.t.required],tda_id:["",s.t.required],dav_id:["",s.t.required],tdenun_id:["",s.t.required],caso_numcaso:["",s.t.required],caso_motivo:["",s.t.required],caso_observaciones:["",s.t.required],dacaso_fecharegv_id:["",s.t.required],caso_fechaingreso:["",s.t.required]})},l.prototype.ngOnInit=function(){var l=this;this.nForm=new s.g({proco_id:new s.e(this.caso.proco_id,s.t.required)}),this.casosService.getProco().subscribe(function(n){l.proco=n},function(l){return console.error(l)}),this.casosService.getTipoDenuncia().subscribe(function(n){l.tdenun=n},function(l){return console.log(l)}),this.casosService.getTiposDerechosAmenazas().subscribe(function(n){l.ttda=n},function(l){return console.log(l)}),this.casosService.getDerechoAmeViolentado().subscribe(function(n){l.tda=n},function(l){return console.log(l)})},Object.defineProperty(l.prototype,"proco_id",{get:function(){return this.nForm.get("proco_id")},enumerable:!0,configurable:!0}),l.prototype.saveNewCaso=function(){delete this.caso.caso_id,this.casosService.saveCaso(this.caso).subscribe(function(l){console.log(l)},function(l){return console.error(l)})},l}(),g=o.ob({encapsulation:0,styles:[[".contenedor-modal[_ngcontent-%COMP%]{position:medium;width:100%;height:100%;text-align:right}.contenedor-modal[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{position:medium;top:50%}div[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#e9fcf7}b[_ngcontent-%COMP%]{color:#255fdb}"]],data:{animation:[{type:7,name:"routerTransition",definitions:[],options:{}}]}});function p(l){return o.Kb(0,[(l()(),o.qb(0,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),o.Ib(-1,null,[" Numero de caso is required. "]))],null,null)}function m(l){return o.Kb(0,[(l()(),o.qb(0,0,null,null,2,"div",[["class","alert alert-danger"]],null,null,null,null,null)),(l()(),o.hb(16777216,null,null,1,null,p)),o.pb(2,16384,null,0,i.l,[o.P,o.M],{ngIf:[0,"ngIf"]},null)],function(l,n){l(n,2,0,n.component.angForm.controls.caso_numcaso.errors.required)},null)}function h(l){return o.Kb(0,[(l()(),o.qb(0,0,null,null,3,"option",[],null,null,null,null,null)),o.pb(1,147456,null,0,s.p,[o.k,o.E,[2,s.s]],{value:[0,"value"]},null),o.pb(2,147456,null,0,s.y,[o.k,o.E,[8,null]],{value:[0,"value"]},null),(l()(),o.Ib(3,null,[" "," "]))],function(l,n){l(n,1,0,n.context.$implicit.proco_id),l(n,2,0,n.context.$implicit.proco_id)},function(l,n){l(n,3,0,n.context.$implicit.proco_nombre)})}function v(l){return o.Kb(0,[(l()(),o.qb(0,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),o.Ib(-1,null,[" Name is required. "]))],null,null)}function A(l){return o.Kb(0,[(l()(),o.qb(0,0,null,null,2,"div",[["class","alert alert-danger"]],null,null,null,null,null)),(l()(),o.hb(16777216,null,null,1,null,v)),o.pb(2,16384,null,0,i.l,[o.P,o.M],{ngIf:[0,"ngIf"]},null)],function(l,n){l(n,2,0,n.component.proco_id.errors)},null)}function C(l){return o.Kb(0,[(l()(),o.qb(0,0,null,null,3,"option",[],null,null,null,null,null)),o.pb(1,147456,null,0,s.p,[o.k,o.E,[2,s.s]],{value:[0,"value"]},null),o.pb(2,147456,null,0,s.y,[o.k,o.E,[8,null]],{value:[0,"value"]},null),(l()(),o.Ib(3,null,[" ",""]))],function(l,n){l(n,1,0,n.context.$implicit.tdenun_id),l(n,2,0,n.context.$implicit.tdenun_id)},function(l,n){l(n,3,0,n.context.$implicit.tdenun_nombre)})}function f(l){return o.Kb(0,[(l()(),o.qb(0,0,null,null,1,"span",[["class","help-block"]],null,null,null,null,null)),(l()(),o.Ib(-1,null,[" Se requiere escoger una opcion "]))],null,null)}function _(l){return o.Kb(0,[(l()(),o.qb(0,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),o.Ib(-1,null,[" Numero de caso is required. "]))],null,null)}function q(l){return o.Kb(0,[(l()(),o.qb(0,0,null,null,2,"div",[["class","alert alert-danger"]],null,null,null,null,null)),(l()(),o.hb(16777216,null,null,1,null,_)),o.pb(2,16384,null,0,i.l,[o.P,o.M],{ngIf:[0,"ngIf"]},null)],function(l,n){l(n,2,0,n.component.angForm.controls.caso_motivo.errors.required)},null)}function y(l){return o.Kb(0,[(l()(),o.qb(0,0,null,null,3,"option",[],null,null,null,null,null)),o.pb(1,147456,null,0,s.p,[o.k,o.E,[2,s.s]],{value:[0,"value"]},null),o.pb(2,147456,null,0,s.y,[o.k,o.E,[8,null]],{value:[0,"value"]},null),(l()(),o.Ib(3,null,[""," "]))],function(l,n){l(n,1,0,n.context.$implicit.dav_id),l(n,2,0,n.context.$implicit.dav_id)},function(l,n){l(n,3,0,n.context.$implicit.dav_nombre)})}function I(l){return o.Kb(0,[(l()(),o.qb(0,0,null,null,3,"option",[],null,null,null,null,null)),o.pb(1,147456,null,0,s.p,[o.k,o.E,[2,s.s]],{value:[0,"value"]},null),o.pb(2,147456,null,0,s.y,[o.k,o.E,[8,null]],{value:[0,"value"]},null),(l()(),o.Ib(3,null,[" ",""]))],function(l,n){l(n,1,0,n.context.$implicit.tda_id),l(n,2,0,n.context.$implicit.tda_id)},function(l,n){l(n,3,0,n.context.$implicit.tda_nombre)})}function M(l){return o.Kb(0,[(l()(),o.qb(0,0,null,null,201,"div",[],[[24,"@routerTransition",0]],null,null,null,null)),(l()(),o.qb(1,0,null,null,1,"app-page-header",[],null,null,null,c.b,c.a)),o.pb(2,114688,null,0,r.a,[],{heading:[0,"heading"],icon:[1,"icon"]},null),(l()(),o.qb(3,0,null,null,198,"div",[["class","container"]],null,null,null,null,null)),(l()(),o.qb(4,0,null,null,197,"div",[["class","row"]],null,null,null,null,null)),(l()(),o.qb(5,0,null,null,196,"div",[["class","col col-xl-10 col-lg-10"]],null,null,null,null,null)),(l()(),o.qb(6,0,null,null,1,"div",[["align","center"],["class","card-header "]],null,null,null,null,null)),(l()(),o.Ib(-1,null,[" DATOS DEL CASO "])),(l()(),o.qb(8,0,null,null,128,"div",[["class","card"]],null,null,null,null,null)),(l()(),o.qb(9,0,null,null,127,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),o.qb(10,0,null,null,126,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(l,n,u){var e=!0;return"submit"===n&&(e=!1!==o.Ab(l,12).onSubmit(u)&&e),"reset"===n&&(e=!1!==o.Ab(l,12).onReset()&&e),e},null,null)),o.pb(11,16384,null,0,s.v,[],null,null),o.pb(12,540672,null,0,s.h,[[8,null],[8,null]],{form:[0,"form"]},null),o.Fb(2048,null,s.b,null,[s.h]),o.pb(14,16384,null,0,s.n,[[4,s.b]],null,null),(l()(),o.qb(15,0,null,null,9,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),o.qb(16,0,null,null,2,"label",[],null,null,null,null,null)),(l()(),o.qb(17,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),o.Ib(-1,null,["N\xfamero de Caso:"])),(l()(),o.qb(19,0,null,null,5,"input",[["class","form-control"],["formControlName","caso_numcaso"],["name","caso_numcaso"],["placeholder","caso#/cedula"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var e=!0,a=l.component;return"input"===n&&(e=!1!==o.Ab(l,20)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==o.Ab(l,20).onTouched()&&e),"compositionstart"===n&&(e=!1!==o.Ab(l,20)._compositionStart()&&e),"compositionend"===n&&(e=!1!==o.Ab(l,20)._compositionEnd(u.target.value)&&e),"ngModelChange"===n&&(e=!1!==(a.caso.caso_numcaso=u)&&e),e},null,null)),o.pb(20,16384,null,0,s.c,[o.E,o.k,[2,s.a]],null,null),o.Fb(1024,null,s.k,function(l){return[l]},[s.c]),o.pb(22,671744,null,0,s.f,[[3,s.b],[8,null],[8,null],[6,s.k],[2,s.x]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),o.Fb(2048,null,s.l,null,[s.f]),o.pb(24,16384,null,0,s.m,[[4,s.l]],null,null),(l()(),o.hb(16777216,null,null,1,null,m)),o.pb(26,16384,null,0,i.l,[o.P,o.M],{ngIf:[0,"ngIf"]},null),(l()(),o.qb(27,0,null,null,15,"div",[["class","form-group"]],[[2,"has-error",null]],null,null,null,null)),(l()(),o.qb(28,0,null,null,2,"label",[["class","control-label"],["for","proco_id"]],null,null,null,null,null)),(l()(),o.qb(29,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),o.Ib(-1,null,[" Procedimiento con Conocimientos: "])),(l()(),o.qb(31,0,null,null,9,"select",[["class","form-control"],["id","proco_id"],["name","proco_id"],["ngModel",""],["required",""]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"change"],[null,"blur"]],function(l,n,u){var e=!0,a=l.component;return"change"===n&&(e=!1!==o.Ab(l,32).onChange(u.target.value)&&e),"blur"===n&&(e=!1!==o.Ab(l,32).onTouched()&&e),"ngModelChange"===n&&(e=!1!==(a.caso.proco_id=u)&&e),e},null,null)),o.pb(32,16384,null,0,s.s,[o.E,o.k],null,null),o.pb(33,16384,null,0,s.r,[],{required:[0,"required"]},null),o.Fb(1024,null,s.j,function(l){return[l]},[s.r]),o.Fb(1024,null,s.k,function(l){return[l]},[s.s]),o.pb(36,671744,null,0,s.o,[[2,s.b],[6,s.j],[8,null],[6,s.k]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),o.Fb(2048,null,s.l,null,[s.o]),o.pb(38,16384,null,0,s.m,[[4,s.l]],null,null),(l()(),o.hb(16777216,null,null,1,null,h)),o.pb(40,278528,null,0,i.k,[o.P,o.M,o.t],{ngForOf:[0,"ngForOf"]},null),(l()(),o.hb(16777216,null,null,1,null,A)),o.pb(42,16384,null,0,i.l,[o.P,o.M],{ngIf:[0,"ngIf"]},null),(l()(),o.qb(43,0,null,null,2,"label",[],null,null,null,null,null)),(l()(),o.qb(44,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),o.Ib(-1,null,["Tipo de denuncia: "])),(l()(),o.qb(46,0,null,null,13,"div",[["class","form-group"]],[[2,"has-error",null]],null,null,null,null)),(l()(),o.qb(47,0,null,null,10,"select",[["class","form-control"],["id","tdenun_id"],["name","tipoDenuncia"],["required",""]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"change"],[null,"blur"]],function(l,n,u){var e=!0,a=l.component;return"change"===n&&(e=!1!==o.Ab(l,48).onChange(u.target.value)&&e),"blur"===n&&(e=!1!==o.Ab(l,48).onTouched()&&e),"ngModelChange"===n&&(e=!1!==(a.caso.tdenun_id=u)&&e),e},null,null)),o.pb(48,16384,null,0,s.s,[o.E,o.k],null,null),o.pb(49,16384,null,0,s.r,[],{required:[0,"required"]},null),o.Fb(1024,null,s.j,function(l){return[l]},[s.r]),o.Fb(1024,null,s.k,function(l){return[l]},[s.s]),o.pb(52,671744,[["tdenun_id",4]],0,s.o,[[2,s.b],[6,s.j],[8,null],[6,s.k]],{name:[0,"name"],model:[1,"model"],options:[2,"options"]},{update:"ngModelChange"}),o.Db(53,{standalone:0}),o.Fb(2048,null,s.l,null,[s.o]),o.pb(55,16384,null,0,s.m,[[4,s.l]],null,null),(l()(),o.hb(16777216,null,null,1,null,C)),o.pb(57,278528,null,0,i.k,[o.P,o.M,o.t],{ngForOf:[0,"ngForOf"]},null),(l()(),o.hb(16777216,null,null,1,null,f)),o.pb(59,16384,null,0,i.l,[o.P,o.M],{ngIf:[0,"ngIf"]},null),(l()(),o.qb(60,0,null,null,2,"label",[],null,null,null,null,null)),(l()(),o.qb(61,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),o.Ib(-1,null,["Motivo:"])),(l()(),o.qb(63,0,null,null,6,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),o.qb(64,0,null,null,5,"textarea",[["class","form-control"],["formControlName","caso_motivo"],["id","Motivo"],["name","caso_motivo"],["placeholder","Motivo"],["rows","4"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var e=!0,a=l.component;return"input"===n&&(e=!1!==o.Ab(l,65)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==o.Ab(l,65).onTouched()&&e),"compositionstart"===n&&(e=!1!==o.Ab(l,65)._compositionStart()&&e),"compositionend"===n&&(e=!1!==o.Ab(l,65)._compositionEnd(u.target.value)&&e),"ngModelChange"===n&&(e=!1!==(a.caso.caso_motivo=u)&&e),e},null,null)),o.pb(65,16384,null,0,s.c,[o.E,o.k,[2,s.a]],null,null),o.Fb(1024,null,s.k,function(l){return[l]},[s.c]),o.pb(67,671744,null,0,s.f,[[3,s.b],[8,null],[8,null],[6,s.k],[2,s.x]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),o.Fb(2048,null,s.l,null,[s.f]),o.pb(69,16384,null,0,s.m,[[4,s.l]],null,null),(l()(),o.hb(16777216,null,null,1,null,q)),o.pb(71,16384,null,0,i.l,[o.P,o.M],{ngIf:[0,"ngIf"]},null),(l()(),o.qb(72,0,null,null,2,"label",[],null,null,null,null,null)),(l()(),o.qb(73,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),o.Ib(-1,null,["Observaciones:"])),(l()(),o.qb(75,0,null,null,8,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),o.qb(76,0,null,null,7,"textarea",[["class","form-control"],["id","Observaciones"],["name","caso_observaciones"],["placeholder","Observaciones"],["rows","4"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var e=!0,a=l.component;return"input"===n&&(e=!1!==o.Ab(l,77)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==o.Ab(l,77).onTouched()&&e),"compositionstart"===n&&(e=!1!==o.Ab(l,77)._compositionStart()&&e),"compositionend"===n&&(e=!1!==o.Ab(l,77)._compositionEnd(u.target.value)&&e),"ngModelChange"===n&&(e=!1!==(a.caso.caso_observaciones=u)&&e),e},null,null)),o.pb(77,16384,null,0,s.c,[o.E,o.k,[2,s.a]],null,null),o.Fb(1024,null,s.k,function(l){return[l]},[s.c]),o.pb(79,671744,null,0,s.o,[[2,s.b],[8,null],[8,null],[6,s.k]],{name:[0,"name"],model:[1,"model"],options:[2,"options"]},{update:"ngModelChange"}),o.Db(80,{standalone:0}),o.Fb(2048,null,s.l,null,[s.o]),o.pb(82,16384,null,0,s.m,[[4,s.l]],null,null),(l()(),o.Ib(-1,null,[" "])),(l()(),o.qb(84,0,null,null,10,"div",[["class","form-group col col-xl-3 "]],null,null,null,null,null)),(l()(),o.qb(85,0,null,null,2,"label",[["for","caso_fechareg"]],null,null,null,null,null)),(l()(),o.qb(86,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),o.Ib(-1,null,["Fecha de Registro:"])),(l()(),o.qb(88,0,null,null,6,"input",[["class","form-control"],["id","caso_fechareg"],["name","caso_fechareg"],["type","date"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var e=!0,a=l.component;return"input"===n&&(e=!1!==o.Ab(l,89)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==o.Ab(l,89).onTouched()&&e),"compositionstart"===n&&(e=!1!==o.Ab(l,89)._compositionStart()&&e),"compositionend"===n&&(e=!1!==o.Ab(l,89)._compositionEnd(u.target.value)&&e),"ngModelChange"===n&&(e=!1!==(a.caso.caso_fechareg=u)&&e),e},null,null)),o.pb(89,16384,null,0,s.c,[o.E,o.k,[2,s.a]],null,null),o.Fb(1024,null,s.k,function(l){return[l]},[s.c]),o.pb(91,671744,null,0,s.o,[[2,s.b],[8,null],[8,null],[6,s.k]],{name:[0,"name"],model:[1,"model"],options:[2,"options"]},{update:"ngModelChange"}),o.Db(92,{standalone:0}),o.Fb(2048,null,s.l,null,[s.o]),o.pb(94,16384,null,0,s.m,[[4,s.l]],null,null),(l()(),o.qb(95,0,null,null,10,"div",[["class","form-group col-xl-3  "]],null,null,null,null,null)),(l()(),o.qb(96,0,null,null,2,"label",[],null,null,null,null,null)),(l()(),o.qb(97,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),o.Ib(-1,null,["Fecha de Ingreso:"])),(l()(),o.qb(99,0,null,null,6,"input",[["class","form-control"],["id","caso_fechaingreso"],["name","caso_fechaingreso"],["type","date"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var e=!0,a=l.component;return"input"===n&&(e=!1!==o.Ab(l,100)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==o.Ab(l,100).onTouched()&&e),"compositionstart"===n&&(e=!1!==o.Ab(l,100)._compositionStart()&&e),"compositionend"===n&&(e=!1!==o.Ab(l,100)._compositionEnd(u.target.value)&&e),"ngModelChange"===n&&(e=!1!==(a.caso.caso_fechaingreso=u)&&e),e},null,null)),o.pb(100,16384,null,0,s.c,[o.E,o.k,[2,s.a]],null,null),o.Fb(1024,null,s.k,function(l){return[l]},[s.c]),o.pb(102,671744,null,0,s.o,[[2,s.b],[8,null],[8,null],[6,s.k]],{name:[0,"name"],model:[1,"model"],options:[2,"options"]},{update:"ngModelChange"}),o.Db(103,{standalone:0}),o.Fb(2048,null,s.l,null,[s.o]),o.pb(105,16384,null,0,s.m,[[4,s.l]],null,null),(l()(),o.qb(106,0,null,null,28,"div",[["class","card mb-3"]],null,null,null,null,null)),(l()(),o.qb(107,0,null,null,1,"div",[["align","center"],["class","card-header "]],null,null,null,null,null)),(l()(),o.Ib(-1,null,[" DATOS DEL DERECHO AMENAZADO O VIOLENTADO"])),(l()(),o.qb(109,0,null,null,2,"label",[],null,null,null,null,null)),(l()(),o.qb(110,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),o.Ib(-1,null,["Derecho amenazado o violentado: "])),(l()(),o.qb(112,0,null,null,9,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),o.qb(113,0,null,null,8,"select",[["class","form-control"],["id","dav_id"],["name","dav_id"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"change"],[null,"blur"]],function(l,n,u){var e=!0,a=l.component;return"change"===n&&(e=!1!==o.Ab(l,114).onChange(u.target.value)&&e),"blur"===n&&(e=!1!==o.Ab(l,114).onTouched()&&e),"ngModelChange"===n&&(e=!1!==(a.caso.dav_id=u)&&e),e},null,null)),o.pb(114,16384,null,0,s.s,[o.E,o.k],null,null),o.Fb(1024,null,s.k,function(l){return[l]},[s.s]),o.pb(116,671744,null,0,s.o,[[2,s.b],[8,null],[8,null],[6,s.k]],{name:[0,"name"],model:[1,"model"],options:[2,"options"]},{update:"ngModelChange"}),o.Db(117,{standalone:0}),o.Fb(2048,null,s.l,null,[s.o]),o.pb(119,16384,null,0,s.m,[[4,s.l]],null,null),(l()(),o.hb(16777216,null,null,1,null,y)),o.pb(121,278528,null,0,i.k,[o.P,o.M,o.t],{ngForOf:[0,"ngForOf"]},null),(l()(),o.qb(122,0,null,null,2,"label",[],null,null,null,null,null)),(l()(),o.qb(123,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),o.Ib(-1,null,["Clasificacion del Derecho amenazado o violentado:"])),(l()(),o.qb(125,0,null,null,9,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),o.qb(126,0,null,null,8,"select",[["class","form-control"],["id","tda_id"],["name","tipoderechoA"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"change"],[null,"blur"]],function(l,n,u){var e=!0,a=l.component;return"change"===n&&(e=!1!==o.Ab(l,127).onChange(u.target.value)&&e),"blur"===n&&(e=!1!==o.Ab(l,127).onTouched()&&e),"ngModelChange"===n&&(e=!1!==(a.caso.tda_id=u)&&e),e},null,null)),o.pb(127,16384,null,0,s.s,[o.E,o.k],null,null),o.Fb(1024,null,s.k,function(l){return[l]},[s.s]),o.pb(129,671744,null,0,s.o,[[2,s.b],[8,null],[8,null],[6,s.k]],{name:[0,"name"],model:[1,"model"],options:[2,"options"]},{update:"ngModelChange"}),o.Db(130,{standalone:0}),o.Fb(2048,null,s.l,null,[s.o]),o.pb(132,16384,null,0,s.m,[[4,s.l]],null,null),(l()(),o.hb(16777216,null,null,1,null,I)),o.pb(134,278528,null,0,i.k,[o.P,o.M,o.t],{ngForOf:[0,"ngForOf"]},null),(l()(),o.qb(135,0,null,null,1,"button",[["class","btn btn-success btn-block"],["type","submit"]],null,[[null,"click"]],function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.saveNewCaso()&&o),o},null,null)),(l()(),o.Ib(-1,null,[" Save "])),(l()(),o.qb(137,0,null,null,64,"div",[["class","card mb-3"]],null,null,null,null,null)),(l()(),o.qb(138,0,null,null,1,"div",[["class","card-header "]],null,null,null,null,null)),(l()(),o.Ib(-1,null,[" INGRESO DE DATOS CASO "])),(l()(),o.qb(140,0,null,null,11,"div",[["class","contenedor-modal"]],null,null,null,null,null)),(l()(),o.qb(141,0,null,null,1,"button",[["class","btn btn-primary btn-lg"],["data-target","#miModal"],["data-toggle","modal"],["type","button"]],null,null,null,null,null)),(l()(),o.Ib(-1,null,["AFECTADO"])),(l()(),o.Ib(-1,null,[" \xa0"])),(l()(),o.qb(144,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),o.qb(145,0,null,null,1,"button",[["class","btn btn-primary btn-lg"],["data-target","#miModal1"],["data-toggle","modal"],["type","button"]],null,null,null,null,null)),(l()(),o.Ib(-1,null,["DENUNCIANTE"])),(l()(),o.Ib(-1,null,["\xa0"])),(l()(),o.qb(148,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),o.qb(149,0,null,null,1,"button",[["class","btn btn-primary btn-lg"],["data-target","#miModal2"],["data-toggle","modal"],["type","button"]],null,null,null,null,null)),(l()(),o.Ib(-1,null,["DENUNCIADO"])),(l()(),o.Ib(-1,null,["\xa0 "])),(l()(),o.qb(152,0,null,null,49,"div",[["aria-hidden","true"],["aria-labelledby","myModalLabel"],["class","modal fade"],["id","miModal"],["role","dialog"],["tabindex","-1"]],null,null,null,null,null)),(l()(),o.qb(153,0,null,null,48,"div",[["class","container"]],null,null,null,null,null)),(l()(),o.qb(154,0,null,null,47,"div",[["class","row"]],null,null,null,null,null)),(l()(),o.qb(155,0,null,null,46,"div",[["class","col col-xl-15 col-lg-20"]],null,null,null,null,null)),(l()(),o.qb(156,0,null,null,45,"div",[["class","modal-dialog"],["role","document"]],null,null,null,null,null)),(l()(),o.qb(157,0,null,null,44,"div",[["class","container"]],null,null,null,null,null)),(l()(),o.qb(158,0,null,null,43,"div",[["class","modal-content"]],null,null,null,null,null)),(l()(),o.qb(159,0,null,null,2,"div",[["class","modal-header  bg-primary text-white"]],null,null,null,null,null)),(l()(),o.qb(160,0,null,null,1,"a",[],null,null,null,null,null)),(l()(),o.Ib(-1,null,["INGRESAR DATOS DEL AFECTADO"])),(l()(),o.qb(162,0,null,null,36,"div",[["class","modal-content p-5"]],null,null,null,null,null)),(l()(),o.qb(163,0,null,null,1,"label",[["for","numcaso"]],null,null,null,null,null)),(l()(),o.Ib(-1,null,["NUMERO DE CASO"])),(l()(),o.qb(165,0,null,null,6,"div",[],null,null,null,null,null)),(l()(),o.qb(166,0,null,null,5,"input",[["class","form-control"],["name","caso_numcaso"],["placeholder","caso#/cedula"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var e=!0,a=l.component;return"input"===n&&(e=!1!==o.Ab(l,167)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==o.Ab(l,167).onTouched()&&e),"compositionstart"===n&&(e=!1!==o.Ab(l,167)._compositionStart()&&e),"compositionend"===n&&(e=!1!==o.Ab(l,167)._compositionEnd(u.target.value)&&e),"ngModelChange"===n&&(e=!1!==(a.caso.caso_numcaso=u)&&e),e},null,null)),o.pb(167,16384,null,0,s.c,[o.E,o.k,[2,s.a]],null,null),o.Fb(1024,null,s.k,function(l){return[l]},[s.c]),o.pb(169,671744,null,0,s.o,[[8,null],[8,null],[8,null],[6,s.k]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),o.Fb(2048,null,s.l,null,[s.o]),o.pb(171,16384,null,0,s.m,[[4,s.l]],null,null),(l()(),o.qb(172,0,null,null,1,"label",[["for","numcaso"]],null,null,null,null,null)),(l()(),o.Ib(-1,null,["NUMERO DE CASO"])),(l()(),o.qb(174,0,null,null,6,"div",[],null,null,null,null,null)),(l()(),o.qb(175,0,null,null,5,"input",[["class","form-control"],["name","caso_numcaso"],["placeholder","caso#/cedula"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var e=!0,a=l.component;return"input"===n&&(e=!1!==o.Ab(l,176)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==o.Ab(l,176).onTouched()&&e),"compositionstart"===n&&(e=!1!==o.Ab(l,176)._compositionStart()&&e),"compositionend"===n&&(e=!1!==o.Ab(l,176)._compositionEnd(u.target.value)&&e),"ngModelChange"===n&&(e=!1!==(a.caso.caso_numcaso=u)&&e),e},null,null)),o.pb(176,16384,null,0,s.c,[o.E,o.k,[2,s.a]],null,null),o.Fb(1024,null,s.k,function(l){return[l]},[s.c]),o.pb(178,671744,null,0,s.o,[[8,null],[8,null],[8,null],[6,s.k]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),o.Fb(2048,null,s.l,null,[s.o]),o.pb(180,16384,null,0,s.m,[[4,s.l]],null,null),(l()(),o.qb(181,0,null,null,1,"label",[["for","numcaso"]],null,null,null,null,null)),(l()(),o.Ib(-1,null,["NUMERO DE CASO"])),(l()(),o.qb(183,0,null,null,6,"div",[],null,null,null,null,null)),(l()(),o.qb(184,0,null,null,5,"input",[["class","form-control"],["name","caso_numcaso"],["placeholder","caso#/cedula"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var e=!0,a=l.component;return"input"===n&&(e=!1!==o.Ab(l,185)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==o.Ab(l,185).onTouched()&&e),"compositionstart"===n&&(e=!1!==o.Ab(l,185)._compositionStart()&&e),"compositionend"===n&&(e=!1!==o.Ab(l,185)._compositionEnd(u.target.value)&&e),"ngModelChange"===n&&(e=!1!==(a.caso.caso_numcaso=u)&&e),e},null,null)),o.pb(185,16384,null,0,s.c,[o.E,o.k,[2,s.a]],null,null),o.Fb(1024,null,s.k,function(l){return[l]},[s.c]),o.pb(187,671744,null,0,s.o,[[8,null],[8,null],[8,null],[6,s.k]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),o.Fb(2048,null,s.l,null,[s.o]),o.pb(189,16384,null,0,s.m,[[4,s.l]],null,null),(l()(),o.qb(190,0,null,null,1,"label",[["for","numcaso"]],null,null,null,null,null)),(l()(),o.Ib(-1,null,["NUMERO DE CASO"])),(l()(),o.qb(192,0,null,null,6,"div",[],null,null,null,null,null)),(l()(),o.qb(193,0,null,null,5,"input",[["class","form-control"],["name","caso_numcaso"],["placeholder","caso#/cedula"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var e=!0,a=l.component;return"input"===n&&(e=!1!==o.Ab(l,194)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==o.Ab(l,194).onTouched()&&e),"compositionstart"===n&&(e=!1!==o.Ab(l,194)._compositionStart()&&e),"compositionend"===n&&(e=!1!==o.Ab(l,194)._compositionEnd(u.target.value)&&e),"ngModelChange"===n&&(e=!1!==(a.caso.caso_numcaso=u)&&e),e},null,null)),o.pb(194,16384,null,0,s.c,[o.E,o.k,[2,s.a]],null,null),o.Fb(1024,null,s.k,function(l){return[l]},[s.c]),o.pb(196,671744,null,0,s.o,[[8,null],[8,null],[8,null],[6,s.k]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),o.Fb(2048,null,s.l,null,[s.o]),o.pb(198,16384,null,0,s.m,[[4,s.l]],null,null),(l()(),o.qb(199,0,null,null,2,"div",[["class","modal-footer  bg-secondary text-white"]],null,null,null,null,null)),(l()(),o.qb(200,0,null,null,1,"button",[["class","btn btn-secondary"],["data-dismiss","modal"],["type","button"]],null,null,null,null,null)),(l()(),o.Ib(-1,null,["Cerrar"]))],function(l,n){var u=n.component;l(n,2,0,"Registro de Casos","fa-edit"),l(n,12,0,u.angForm),l(n,22,0,"caso_numcaso",u.caso.caso_numcaso),l(n,26,0,u.angForm.controls.caso_numcaso.invalid&&(u.angForm.controls.caso_numcaso.dirty||u.angForm.controls.caso_numcaso.touched)),l(n,33,0,""),l(n,36,0,"proco_id",u.caso.proco_id),l(n,40,0,u.proco),l(n,42,0,u.proco_id.invalid&&(u.proco_id.dirty||u.proco_id.touched)),l(n,49,0,"");var e=u.caso.tdenun_id,a=l(n,53,0,!0);l(n,52,0,"tipoDenuncia",e,a),l(n,57,0,u.tdenun),l(n,59,0,o.Ab(n,52).touched&&o.Ab(n,52).invalid),l(n,67,0,"caso_motivo",u.caso.caso_motivo),l(n,71,0,u.angForm.controls.caso_motivo.invalid&&(u.angForm.controls.caso_motivo.dirty||u.angForm.controls.caso_motivo.touched));var t=u.caso.caso_observaciones,i=l(n,80,0,!0);l(n,79,0,"caso_observaciones",t,i);var s=u.caso.caso_fechareg,c=l(n,92,0,!0);l(n,91,0,"caso_fechareg",s,c);var r=u.caso.caso_fechaingreso,b=l(n,103,0,!0);l(n,102,0,"caso_fechaingreso",r,b);var d=u.caso.dav_id,g=l(n,117,0,!0);l(n,116,0,"dav_id",d,g),l(n,121,0,u.ttda);var p=u.caso.tda_id,m=l(n,130,0,!0);l(n,129,0,"tipoderechoA",p,m),l(n,134,0,u.tda),l(n,169,0,"caso_numcaso",u.caso.caso_numcaso),l(n,178,0,"caso_numcaso",u.caso.caso_numcaso),l(n,187,0,"caso_numcaso",u.caso.caso_numcaso),l(n,196,0,"caso_numcaso",u.caso.caso_numcaso)},function(l,n){var u=n.component;l(n,0,0,void 0),l(n,10,0,o.Ab(n,14).ngClassUntouched,o.Ab(n,14).ngClassTouched,o.Ab(n,14).ngClassPristine,o.Ab(n,14).ngClassDirty,o.Ab(n,14).ngClassValid,o.Ab(n,14).ngClassInvalid,o.Ab(n,14).ngClassPending),l(n,19,0,o.Ab(n,24).ngClassUntouched,o.Ab(n,24).ngClassTouched,o.Ab(n,24).ngClassPristine,o.Ab(n,24).ngClassDirty,o.Ab(n,24).ngClassValid,o.Ab(n,24).ngClassInvalid,o.Ab(n,24).ngClassPending),l(n,27,0,u.proco_id.touched&&u.proco_id.invalid),l(n,31,0,o.Ab(n,33).required?"":null,o.Ab(n,38).ngClassUntouched,o.Ab(n,38).ngClassTouched,o.Ab(n,38).ngClassPristine,o.Ab(n,38).ngClassDirty,o.Ab(n,38).ngClassValid,o.Ab(n,38).ngClassInvalid,o.Ab(n,38).ngClassPending),l(n,46,0,o.Ab(n,52).touched&&o.Ab(n,52).invalid),l(n,47,0,o.Ab(n,49).required?"":null,o.Ab(n,55).ngClassUntouched,o.Ab(n,55).ngClassTouched,o.Ab(n,55).ngClassPristine,o.Ab(n,55).ngClassDirty,o.Ab(n,55).ngClassValid,o.Ab(n,55).ngClassInvalid,o.Ab(n,55).ngClassPending),l(n,64,0,o.Ab(n,69).ngClassUntouched,o.Ab(n,69).ngClassTouched,o.Ab(n,69).ngClassPristine,o.Ab(n,69).ngClassDirty,o.Ab(n,69).ngClassValid,o.Ab(n,69).ngClassInvalid,o.Ab(n,69).ngClassPending),l(n,76,0,o.Ab(n,82).ngClassUntouched,o.Ab(n,82).ngClassTouched,o.Ab(n,82).ngClassPristine,o.Ab(n,82).ngClassDirty,o.Ab(n,82).ngClassValid,o.Ab(n,82).ngClassInvalid,o.Ab(n,82).ngClassPending),l(n,88,0,o.Ab(n,94).ngClassUntouched,o.Ab(n,94).ngClassTouched,o.Ab(n,94).ngClassPristine,o.Ab(n,94).ngClassDirty,o.Ab(n,94).ngClassValid,o.Ab(n,94).ngClassInvalid,o.Ab(n,94).ngClassPending),l(n,99,0,o.Ab(n,105).ngClassUntouched,o.Ab(n,105).ngClassTouched,o.Ab(n,105).ngClassPristine,o.Ab(n,105).ngClassDirty,o.Ab(n,105).ngClassValid,o.Ab(n,105).ngClassInvalid,o.Ab(n,105).ngClassPending),l(n,113,0,o.Ab(n,119).ngClassUntouched,o.Ab(n,119).ngClassTouched,o.Ab(n,119).ngClassPristine,o.Ab(n,119).ngClassDirty,o.Ab(n,119).ngClassValid,o.Ab(n,119).ngClassInvalid,o.Ab(n,119).ngClassPending),l(n,126,0,o.Ab(n,132).ngClassUntouched,o.Ab(n,132).ngClassTouched,o.Ab(n,132).ngClassPristine,o.Ab(n,132).ngClassDirty,o.Ab(n,132).ngClassValid,o.Ab(n,132).ngClassInvalid,o.Ab(n,132).ngClassPending),l(n,166,0,o.Ab(n,171).ngClassUntouched,o.Ab(n,171).ngClassTouched,o.Ab(n,171).ngClassPristine,o.Ab(n,171).ngClassDirty,o.Ab(n,171).ngClassValid,o.Ab(n,171).ngClassInvalid,o.Ab(n,171).ngClassPending),l(n,175,0,o.Ab(n,180).ngClassUntouched,o.Ab(n,180).ngClassTouched,o.Ab(n,180).ngClassPristine,o.Ab(n,180).ngClassDirty,o.Ab(n,180).ngClassValid,o.Ab(n,180).ngClassInvalid,o.Ab(n,180).ngClassPending),l(n,184,0,o.Ab(n,189).ngClassUntouched,o.Ab(n,189).ngClassTouched,o.Ab(n,189).ngClassPristine,o.Ab(n,189).ngClassDirty,o.Ab(n,189).ngClassValid,o.Ab(n,189).ngClassInvalid,o.Ab(n,189).ngClassPending),l(n,193,0,o.Ab(n,198).ngClassUntouched,o.Ab(n,198).ngClassTouched,o.Ab(n,198).ngClassPristine,o.Ab(n,198).ngClassDirty,o.Ab(n,198).ngClassValid,o.Ab(n,198).ngClassInvalid,o.Ab(n,198).ngClassPending)})}function k(l){return o.Kb(0,[(l()(),o.qb(0,0,null,null,1,"app-caso-form",[],null,null,null,M,g)),o.pb(1,114688,null,0,d,[b.a,s.d],null,null)],function(l,n){l(n,1,0)},null)}var F=o.mb("app-caso-form",d,k,{},{},[]),E=u("4GxJ"),P=u("ZYCi"),D=function(){return function(){}}(),O=u("+Sv0");u.d(n,"CasoModuleNgFactory",function(){return T});var T=o.nb(e,[],function(l){return o.xb([o.yb(512,o.j,o.cb,[[8,[a.a,a.b,a.g,a.c,a.d,a.e,a.f,t.a,F]],[3,o.j],o.y]),o.yb(4608,i.n,i.m,[o.v,[2,i.z]]),o.yb(4608,s.w,s.w,[]),o.yb(4608,E.v,E.v,[o.j,o.r,E.T,E.w]),o.yb(4608,s.d,s.d,[]),o.yb(1073742336,i.b,i.b,[]),o.yb(1073742336,E.c,E.c,[]),o.yb(1073742336,E.f,E.f,[]),o.yb(1073742336,E.g,E.g,[]),o.yb(1073742336,E.k,E.k,[]),o.yb(1073742336,E.l,E.l,[]),o.yb(1073742336,s.u,s.u,[]),o.yb(1073742336,s.i,s.i,[]),o.yb(1073742336,E.q,E.q,[]),o.yb(1073742336,E.t,E.t,[]),o.yb(1073742336,E.x,E.x,[]),o.yb(1073742336,E.B,E.B,[]),o.yb(1073742336,E.C,E.C,[]),o.yb(1073742336,E.F,E.F,[]),o.yb(1073742336,E.I,E.I,[]),o.yb(1073742336,E.L,E.L,[]),o.yb(1073742336,E.P,E.P,[]),o.yb(1073742336,E.Q,E.Q,[]),o.yb(1073742336,E.R,E.R,[]),o.yb(1073742336,E.y,E.y,[]),o.yb(1073742336,P.o,P.o,[[2,P.u],[2,P.l]]),o.yb(1073742336,D,D,[]),o.yb(1073742336,O.a,O.a,[]),o.yb(1073742336,s.q,s.q,[]),o.yb(1073742336,e,e,[]),o.yb(1024,P.j,function(){return[[{path:"",component:d}]]},[])])})}}]);