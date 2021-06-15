(self["webpackChunkdigitalcourse"] = self["webpackChunkdigitalcourse"] || []).push([["src_app_pages_modulo1_gramatica_verbos_list-verb_list-verb_module_ts"],{

/***/ 3771:
/*!******************************************************************************************!*\
  !*** ./src/app/pages/modulo1/gramatica/verbos/list-verb-aberto/list-verb-aberto.page.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListVerbAbertoPage": () => (/* binding */ ListVerbAbertoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_list_verb_aberto_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./list-verb-aberto.page.html */ 927);
/* harmony import */ var _list_verb_aberto_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list-verb-aberto.page.scss */ 9474);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var src_app_services_home_gramatica_verb_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/home-gramatica-verb.service */ 3007);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 9765);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 4395);









let ListVerbAbertoPage = class ListVerbAbertoPage {
    constructor(httpConfigService, router, loadingCtrl) {
        this.httpConfigService = httpConfigService;
        this.router = router;
        this.loadingCtrl = loadingCtrl;
        this.value = '';
        this.itemss = [];
        this.page = 0;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    }
    ngOnInit() {
        this.getLista(false, "");
        this.subject.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.debounceTime)(1000)).subscribe(searchTextValue => {
            console.log(searchTextValue);
            this.getLista(false, "");
            ;
        });
    }
    onKeyUp(event) {
        this.itemss = [];
        this.page = 0;
        this.subject.next(event.target.value);
        //  this.compararfrase();
    }
    getLista(isFirstLoad, event) {
        this.presentLoading();
        this.httpConfigService.loadverbsaberto(this.value, this.page)
            .then(response => {
            let start = this.itemss.length;
            this.itemss = this.itemss.concat(response['content']);
            let end = this.itemss.length - 1;
            if (isFirstLoad)
                event.target.complete();
            this.last = response.last;
            this.page++;
            console.log(this.page);
            console.log(this.itemss);
        }, error => {
            console.log(error);
        });
    }
    doInfinite(event) {
        this.getLista(true, event);
        setTimeout(() => {
            event.target.complete();
        }, 1000);
    }
    submit() {
        this.getLista(false, "");
    }
    onClick(id) {
        this.router.navigate(['edit-verb/', id]);
    }
    presentLoading() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.loadingcnt = yield this.loadingCtrl.create({
                message: 'Please wait...',
                duration: 500
            });
            yield this.loadingcnt.present();
        });
    }
};
ListVerbAbertoPage.ctorParameters = () => [
    { type: src_app_services_home_gramatica_verb_service__WEBPACK_IMPORTED_MODULE_2__.HomeGramaticaVerbService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController }
];
ListVerbAbertoPage.propDecorators = {
    infiniteScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonInfiniteScroll,] }]
};
ListVerbAbertoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-list-verb-aberto',
        template: _raw_loader_list_verb_aberto_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_list_verb_aberto_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ListVerbAbertoPage);



/***/ }),

/***/ 7211:
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/modulo1/gramatica/verbos/list-verb-concluidos/list-verb-concluidos.page.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListVerbConcluidosPage": () => (/* binding */ ListVerbConcluidosPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_list_verb_concluidos_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./list-verb-concluidos.page.html */ 432);
/* harmony import */ var _list_verb_concluidos_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list-verb-concluidos.page.scss */ 7442);
/* harmony import */ var src_app_services_home_gramatica_verb_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/home-gramatica-verb.service */ 3007);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 9765);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 4395);








let ListVerbConcluidosPage = class ListVerbConcluidosPage {
    constructor(httpConfigService, loadingCtrl) {
        this.httpConfigService = httpConfigService;
        this.loadingCtrl = loadingCtrl;
        this.value = '';
        this.itemss = [];
        this.page = 0;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    }
    ngOnInit() {
        this.getLista(false, "");
        this.subject.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.debounceTime)(1000)).subscribe(searchTextValue => {
            console.log(searchTextValue);
            this.getLista(false, "");
            ;
        });
    }
    onKeyUp(event) {
        this.itemss = [];
        this.page = 0;
        this.subject.next(event.target.value);
        //  this.compararfrase();
    }
    getLista(isFirstLoad, event) {
        this.presentLoading();
        this.httpConfigService.loadverbsconcluido(this.value, this.page)
            .then(response => {
            let start = this.itemss.length;
            this.itemss = this.itemss.concat(response['content']);
            let end = this.itemss.length - 1;
            if (isFirstLoad)
                event.target.complete();
            this.last = response.last;
            this.page++;
            console.log(this.page);
            console.log(this.itemss);
        }, error => {
            console.log(error);
        });
    }
    doInfinite(event) {
        this.getLista(true, event);
        setTimeout(() => {
            event.target.complete();
        }, 1000);
    }
    submit() {
        this.getLista(false, "");
    }
    onClick() {
        console.log('click');
    }
    presentLoading() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.loadingcnt = yield this.loadingCtrl.create({
                message: 'Please wait...',
                duration: 500
            });
            yield this.loadingcnt.present();
        });
    }
};
ListVerbConcluidosPage.ctorParameters = () => [
    { type: src_app_services_home_gramatica_verb_service__WEBPACK_IMPORTED_MODULE_2__.HomeGramaticaVerbService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController }
];
ListVerbConcluidosPage.propDecorators = {
    infiniteScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonInfiniteScroll,] }]
};
ListVerbConcluidosPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-list-verb-concluidos',
        template: _raw_loader_list_verb_concluidos_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_list_verb_concluidos_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ListVerbConcluidosPage);



/***/ }),

/***/ 5230:
/*!**************************************************************************************!*\
  !*** ./src/app/pages/modulo1/gramatica/verbos/list-verb/list-verb-routing.module.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListVerbPageRoutingModule": () => (/* binding */ ListVerbPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _list_verb_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list-verb.page */ 4208);




const routes = [
    {
        path: '',
        component: _list_verb_page__WEBPACK_IMPORTED_MODULE_0__.ListVerbPage
    }
];
let ListVerbPageRoutingModule = class ListVerbPageRoutingModule {
};
ListVerbPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ListVerbPageRoutingModule);



/***/ }),

/***/ 2755:
/*!******************************************************************************!*\
  !*** ./src/app/pages/modulo1/gramatica/verbos/list-verb/list-verb.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListVerbPageModule": () => (/* binding */ ListVerbPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _list_verb_concluidos_list_verb_concluidos_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../list-verb-concluidos/list-verb-concluidos.page */ 7211);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _list_verb_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list-verb-routing.module */ 5230);
/* harmony import */ var _list_verb_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list-verb.page */ 4208);
/* harmony import */ var ng_zorro_antd_mobile__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd-mobile */ 9086);
/* harmony import */ var _list_verb_aberto_list_verb_aberto_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../list-verb-aberto/list-verb-aberto.page */ 3771);










let ListVerbPageModule = class ListVerbPageModule {
};
ListVerbPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _list_verb_routing_module__WEBPACK_IMPORTED_MODULE_1__.ListVerbPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
            ng_zorro_antd_mobile__WEBPACK_IMPORTED_MODULE_9__.NgZorroAntdMobileModule
        ],
        declarations: [
            _list_verb_page__WEBPACK_IMPORTED_MODULE_2__.ListVerbPage,
            _list_verb_aberto_list_verb_aberto_page__WEBPACK_IMPORTED_MODULE_3__.ListVerbAbertoPage,
            _list_verb_concluidos_list_verb_concluidos_page__WEBPACK_IMPORTED_MODULE_0__.ListVerbConcluidosPage,
        ]
    })
], ListVerbPageModule);



/***/ }),

/***/ 4208:
/*!****************************************************************************!*\
  !*** ./src/app/pages/modulo1/gramatica/verbos/list-verb/list-verb.page.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListVerbPage": () => (/* binding */ ListVerbPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_list_verb_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./list-verb.page.html */ 2325);
/* harmony import */ var _list_verb_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list-verb.page.scss */ 9141);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);





let ListVerbPage = class ListVerbPage {
    constructor(route) {
        this.route = route;
        this.segmentModel = "aberto";
    }
    ngOnInit() {
    }
    segmentChanged(event) {
        console.log(this.segmentModel);
        console.log(event);
    }
    onLeftClick() {
        this.route.navigate(['home/modulo1-home']);
    }
};
ListVerbPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
ListVerbPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-list-verb',
        template: _raw_loader_list_verb_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_list_verb_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ListVerbPage);



/***/ }),

/***/ 9474:
/*!********************************************************************************************!*\
  !*** ./src/app/pages/modulo1/gramatica/verbos/list-verb-aberto/list-verb-aberto.page.scss ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0LXZlcmItYWJlcnRvLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 7442:
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/modulo1/gramatica/verbos/list-verb-concluidos/list-verb-concluidos.page.scss ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0LXZlcmItY29uY2x1aWRvcy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 9141:
/*!******************************************************************************!*\
  !*** ./src/app/pages/modulo1/gramatica/verbos/list-verb/list-verb.page.scss ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0LXZlcmIucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 927:
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/modulo1/gramatica/verbos/list-verb-aberto/list-verb-aberto.page.html ***!
  \**********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-searchbar color=\"primary\" [placeholder]=\"'A Fazer'\" [(ngModel)]=\"value\" (keyup)=\"onKeyUp($event)\" (ionClear)=\"onKeyUp($event)\"> </ion-searchbar>\n\n<ion-content>\n\n\n    <List [className]=\"'my-list'\">\n\n        <ListItem [align]=\"'top'\" multipleLine [arrow]=\"'horizontal'\" (onClick)=\"onClick(item.id)\" *ngFor=\"let item of itemss; let i=index\">\n            {{i+1}} - {{item.present}}\n            <Brief>{{item.tranlate}} </Brief>\n        </ListItem>\n    </List>\n\n    <ion-infinite-scroll (ionInfinite)=\"doInfinite($event)\">\n        <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Loading more data...\">\n        </ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n\n\n\n\n</ion-content>");

/***/ }),

/***/ 432:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/modulo1/gramatica/verbos/list-verb-concluidos/list-verb-concluidos.page.html ***!
  \******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-searchbar color=\"primary\" [placeholder]=\"'Concluidos'\" [(ngModel)]=\"value\" (keyup)=\"onKeyUp($event)\" (ionClear)=\"onKeyUp($event)\"> </ion-searchbar>\n\n<ion-content>\n\n\n    <List [className]=\"'my-list'\">\n\n        <ListItem [align]=\"'top'\" multipleLine [arrow]=\"'horizontal'\" (onClick)=\"onClick()\" *ngFor=\"let item of itemss; let i=index\">\n            {{i+1}} - {{item.present}}\n            <Brief>{{item.tranlate}} </Brief>\n        </ListItem>\n    </List>\n\n    <ion-infinite-scroll (ionInfinite)=\"doInfinite($event)\">\n        <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Loading more data...\">\n        </ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n\n\n\n\n</ion-content>");

/***/ }),

/***/ 2325:
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/modulo1/gramatica/verbos/list-verb/list-verb.page.html ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\n\n\n    <Navbar [icon]=\"icon\" color=\"primary\" (onLeftClick)=\"onLeftClick()\">\n        Gramática - Verbos\n    </Navbar>\n\n\n    <ng-template #icon>\n        <Icon [type]=\"'left'\"></Icon>\n    </ng-template>\n\n\n</ion-header>\n\n<ion-header [translucent]=\"true\">\n    <ion-toolbar>\n\n        <ion-segment value=\"all\" color=\"tertiary\" scrollable=\"true\" [(ngModel)]=\"segmentModel\" (ionChange)=\"segmentChanged($event)\">\n\n            <ion-segment-button value=\"aberto\">\n\n                <ion-label>A Fazer</ion-label>\n            </ion-segment-button>\n\n            <ion-segment-button value=\"concluido\">\n                <ion-label>Concuidos</ion-label>\n            </ion-segment-button>\n            <ion-segment-button value=\"desafios\">\n                <ion-label>Sentenças criadas</ion-label>\n            </ion-segment-button>\n\n        </ion-segment>\n\n    </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n\n    <!-- <app-home-gramatica *ngIf=\"segmentModel === 'gramatica'\">\n\n    </app-home-gramatica>\n  -->\n    <app-list-verb-aberto *ngIf=\"segmentModel === 'aberto'\"></app-list-verb-aberto>\n    <app-list-verb-concluidos *ngIf=\"segmentModel === 'concluido'\"></app-list-verb-concluidos>\n    <ion-card *ngIf=\"segmentModel === 'desafios'\">\n        <ion-card-header>\n            <ion-card-subtitle>Segment Content</ion-card-subtitle>\n            <ion-card-title>Favorites</ion-card-title>\n        </ion-card-header>\n\n        <ion-card-content>\n            Keep close to Nature's heart... and break clear away, once in awhile, and climb a mountain or spend a week in the woods. Wash your spirit clean.\n        </ion-card-content>\n    </ion-card>\n\n\n\n\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_modulo1_gramatica_verbos_list-verb_list-verb_module_ts.js.map