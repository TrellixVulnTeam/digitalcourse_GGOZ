(self["webpackChunkdigitalcourse"] = self["webpackChunkdigitalcourse"] || []).push([["src_app_pages_modulo1_home_modulo1-home_modulo1-home_module_ts"],{

/***/ 5841:
/*!************************************************************************************************!*\
  !*** ./src/app/pages/modulo1/home/gramatica/home-gramatica-verbo/home-gramatica-verbo.page.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeGramaticaVerboPage": () => (/* binding */ HomeGramaticaVerboPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_home_gramatica_verbo_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./home-gramatica-verbo.page.html */ 5049);
/* harmony import */ var _home_gramatica_verbo_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-gramatica-verbo.page.scss */ 1143);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var src_app_services_home_gramatica_verb_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/home-gramatica-verb.service */ 3007);







let HomeGramaticaVerboPage = class HomeGramaticaVerboPage {
    constructor(http, router, homeGramaticaVerbService) {
        this.http = http;
        this.router = router;
        this.homeGramaticaVerbService = homeGramaticaVerbService;
        this.isloading = true;
        this.resumoDTO = {};
    }
    ngOnInit() {
        this.isloading = true;
        this.homeGramaticaVerbService.resumoverb()
            .then(rest => {
            this.resumoDTO = rest;
            this.percentual = this.resumoDTO.qtdquit / this.resumoDTO.qtddaberto;
            this.isloading = false;
        }, erro => {
            this.isloading = true;
            //this.router.navigate(['/error-no-server'])
        }).catch(erro => {
        });
    }
};
HomeGramaticaVerboPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: src_app_services_home_gramatica_verb_service__WEBPACK_IMPORTED_MODULE_2__.HomeGramaticaVerbService }
];
HomeGramaticaVerboPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-home-gramatica-verbo',
        template: _raw_loader_home_gramatica_verbo_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_home_gramatica_verbo_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HomeGramaticaVerboPage);



/***/ }),

/***/ 1893:
/*!************************************************************************************!*\
  !*** ./src/app/pages/modulo1/home/gramatica/home-gramatica/home-gramatica.page.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeGramaticaPage": () => (/* binding */ HomeGramaticaPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_home_gramatica_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./home-gramatica.page.html */ 1833);
/* harmony import */ var _home_gramatica_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-gramatica.page.scss */ 5524);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let HomeGramaticaPage = class HomeGramaticaPage {
    constructor() { }
    ngOnInit() {
    }
};
HomeGramaticaPage.ctorParameters = () => [];
HomeGramaticaPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-home-gramatica',
        template: _raw_loader_home_gramatica_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_home_gramatica_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HomeGramaticaPage);



/***/ }),

/***/ 4911:
/*!********************************************************************************!*\
  !*** ./src/app/pages/modulo1/home/modulo1-home/modulo1-home-routing.module.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Modulo1HomePageRoutingModule": () => (/* binding */ Modulo1HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _modulo1_home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modulo1-home.page */ 5438);




const routes = [
    {
        path: '',
        component: _modulo1_home_page__WEBPACK_IMPORTED_MODULE_0__.Modulo1HomePage
    }
];
let Modulo1HomePageRoutingModule = class Modulo1HomePageRoutingModule {
};
Modulo1HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], Modulo1HomePageRoutingModule);



/***/ }),

/***/ 6634:
/*!************************************************************************!*\
  !*** ./src/app/pages/modulo1/home/modulo1-home/modulo1-home.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Modulo1HomePageModule": () => (/* binding */ Modulo1HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var ng_zorro_antd_mobile__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd-mobile */ 9086);
/* harmony import */ var _gramatica_home_gramatica_verbo_home_gramatica_verbo_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../gramatica/home-gramatica-verbo/home-gramatica-verbo.page */ 5841);
/* harmony import */ var _gramatica_home_gramatica_home_gramatica_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../gramatica/home-gramatica/home-gramatica.page */ 1893);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _modulo1_home_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modulo1-home-routing.module */ 4911);
/* harmony import */ var _modulo1_home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modulo1-home.page */ 5438);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 1841);











let Modulo1HomePageModule = class Modulo1HomePageModule {
};
Modulo1HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _modulo1_home_routing_module__WEBPACK_IMPORTED_MODULE_2__.Modulo1HomePageRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
            ng_zorro_antd_mobile__WEBPACK_IMPORTED_MODULE_10__.NgZorroAntdMobileModule,
        ],
        declarations: [
            _modulo1_home_page__WEBPACK_IMPORTED_MODULE_3__.Modulo1HomePage,
            _gramatica_home_gramatica_home_gramatica_page__WEBPACK_IMPORTED_MODULE_1__.HomeGramaticaPage,
            _gramatica_home_gramatica_verbo_home_gramatica_verbo_page__WEBPACK_IMPORTED_MODULE_0__.HomeGramaticaVerboPage
        ]
    })
], Modulo1HomePageModule);



/***/ }),

/***/ 5438:
/*!**********************************************************************!*\
  !*** ./src/app/pages/modulo1/home/modulo1-home/modulo1-home.page.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Modulo1HomePage": () => (/* binding */ Modulo1HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_modulo1_home_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./modulo1-home.page.html */ 2924);
/* harmony import */ var _modulo1_home_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modulo1-home.page.scss */ 7049);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);





let Modulo1HomePage = class Modulo1HomePage {
    constructor(activatedRoute) {
        this.activatedRoute = activatedRoute;
        this.segment = '';
        this.index = 0;
        this.slideOpts = {
            effect: 'flip',
            zoom: false
        };
        this.segmentModel = "gramatica";
    }
    segmentChanged(event) {
        console.log(this.segmentModel);
        console.log(event);
    }
    ngOnInit() {
    }
};
Modulo1HomePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute }
];
Modulo1HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-modulo1-home',
        template: _raw_loader_modulo1_home_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_modulo1_home_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], Modulo1HomePage);



/***/ }),

/***/ 1143:
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/modulo1/home/gramatica/home-gramatica-verbo/home-gramatica-verbo.page.scss ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".fake {\n  background-color: lightgrey;\n  opacity: 0.5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUtZ3JhbWF0aWNhLXZlcmJvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDJCQUFBO0VBQ0EsWUFBQTtBQUNKIiwiZmlsZSI6ImhvbWUtZ3JhbWF0aWNhLXZlcmJvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mYWtlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XG4gICAgb3BhY2l0eTogMC41O1xufSJdfQ== */");

/***/ }),

/***/ 5524:
/*!**************************************************************************************!*\
  !*** ./src/app/pages/modulo1/home/gramatica/home-gramatica/home-gramatica.page.scss ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLWdyYW1hdGljYS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 7049:
/*!************************************************************************!*\
  !*** ./src/app/pages/modulo1/home/modulo1-home/modulo1-home.page.scss ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb2R1bG8xLWhvbWUucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 5049:
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/modulo1/home/gramatica/home-gramatica-verbo/home-gramatica-verbo.page.html ***!
  \****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-card *ngIf=\"isloading\">\n    <ion-card-title>\n        <div id=\"container\">\n            <ion-row no-padding>\n                <ion-col>\n                    <p>\n                        <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n                    </p>\n                </ion-col>\n                <ion-col>\n                </ion-col>\n            </ion-row>\n        </div>\n    </ion-card-title>\n    <ion-thumbnail style=\"width: 100%; height: 100px;\">\n        <ion-skeleton-text animated></ion-skeleton-text>\n    </ion-thumbnail>\n    <ion-card-content>\n        <p>\n            <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n        </p>\n    </ion-card-content>\n</ion-card>\n\n\n\n<ion-card *ngIf=\"!isloading\">\n    <ion-card-title>\n        <div id=\"container\">\n            <ion-row no-padding>\n                <ion-col>\n                    <p> Verbos</p>\n                </ion-col>\n                <ion-col>\n\n                    <a routerDirection=\"root\" ion-button clear item-end [routerLink]=\"['/list-verb']\" routerLinkActive=\"router-link-active\">\n                        <ion-icon name=\"git-compare-outline\"></ion-icon>\n                    </a>\n\n                </ion-col>\n            </ion-row>\n        </div>\n    </ion-card-title>\n    <img src=\"/assets/images/verbs.png\" />\n    <ion-card-content>\n        <ion-badge id=\"notifications-badge\" color=\"danger\">{{percentual|percent:'1.2-2'}}</ion-badge>\n        <ion-row no-padding>\n            <strong class=\"capitalize\"> {{resumoDTO.qtddaberto}}<small class=\"tx-medium text-success\">/{{resumoDTO.qtdquit}}</small>\n            </strong>\n        </ion-row>\n    </ion-card-content>\n</ion-card>");

/***/ }),

/***/ 1833:
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/modulo1/home/gramatica/home-gramatica/home-gramatica.page.html ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n\n    <ion-content>\n        <ion-grid>\n            <ion-row>\n                <ion-col size=\"6\">\n                    <app-home-gramatica-verbo></app-home-gramatica-verbo>\n                </ion-col>\n                <ion-col size=\"6\">\n                    <ion-card>\n                        <ion-card-title>\n                            <div id=\"container\">\n                                <ion-row no-padding>\n                                    <ion-col>\n                                        <p>\n                                            <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n                                        </p>\n                                    </ion-col>\n                                    <ion-col>\n                                    </ion-col>\n                                </ion-row>\n                            </div>\n                        </ion-card-title>\n                        <ion-thumbnail style=\"width: 100%; height: 100px;\">\n                            <ion-skeleton-text animated></ion-skeleton-text>\n                        </ion-thumbnail>\n                        <ion-card-content>\n                            <p>\n                                <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n                            </p>\n                        </ion-card-content>\n                    </ion-card>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </ion-content>\n\n\n</ion-content>");

/***/ }),

/***/ 2924:
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/modulo1/home/modulo1-home/modulo1-home.page.html ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\n\n\n    <Navbar color=\"primary\">\n        Digital.Course-Module one\n    </Navbar>\n\n\n    <ng-template #icon>\n        <Icon [type]=\"'left'\"></Icon>\n    </ng-template>\n\n\n</ion-header>\n\n<ion-header [translucent]=\"true\">\n    <ion-toolbar>\n\n        <ion-segment value=\"all\" color=\"tertiary\" scrollable=\"true\" mode=\"android\" [(ngModel)]=\"segmentModel\" (ionChange)=\"segmentChanged($event)\">\n\n            <ion-segment-button value=\"gramatica\">\n\n                <ion-label>Gramatica</ion-label>\n            </ion-segment-button>\n\n            <!--<ion-segment-button value=\"desafio\">\n                <ion-label>Desafio</ion-label>\n            </ion-segment-button>\n        -->\n\n\n        </ion-segment>\n\n    </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n\n    <app-home-gramatica *ngIf=\"segmentModel === 'gramatica'\"></app-home-gramatica>\n\n\n    <ion-card *ngIf=\"segmentModel === 'desafio'\">\n\n        <ion-card-header>\n            <ion-card-subtitle>Segment Content</ion-card-subtitle>\n            <ion-card-title>Favorites</ion-card-title>\n        </ion-card-header>\n\n        <ion-card-content>\n            Keep close to Nature's heart... and break clear away, once in awhile, and climb a mountain or spend a week in the woods. Wash your spirit clean.\n        </ion-card-content>\n    </ion-card>\n\n\n\n\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_modulo1_home_modulo1-home_modulo1-home_module_ts.js.map