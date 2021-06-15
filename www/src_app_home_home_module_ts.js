(self["webpackChunkdigitalcourse"] = self["webpackChunkdigitalcourse"] || []).push([["src_app_home_home_module_ts"],{

/***/ 2003:
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _account_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../account/auth.guard */ 4436);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page */ 2267);





const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_1__.HomePage,
        canActivate: [_account_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
        children: [
            {
                path: 'home',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_home_home_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./../pages/home/home.module */ 7994)).then(m => m.HomePageModule)
            },
            {
                path: 'modulo1-home',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_modulo1_home_modulo1-home_modulo1-home_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./../pages/modulo1/home/modulo1-home/modulo1-home.module */ 6634)).then(m => m.Modulo1HomePageModule)
            },
            {
                path: 'settings',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_settings_settings_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./../pages/settings/settings.module */ 7850)).then(m => m.SettingsPageModule)
            },
        ]
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    })
], HomePageRoutingModule);



/***/ }),

/***/ 3467:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _account_error_interceptor_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../account/error-interceptor.service */ 6246);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../app.component */ 5041);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-routing.module */ 2003);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ 2267);
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/storage.service */ 1188);
/* harmony import */ var _account_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../account/auth-interceptor.service */ 8869);












let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_2__.HomePageRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_3__.HomePage],
        providers: [
            _services_storage_service__WEBPACK_IMPORTED_MODULE_4__.StorageService,
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HTTP_INTERCEPTORS, useClass: _account_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_5__.AuthInterceptor, multi: true },
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HTTP_INTERCEPTORS, useClass: _account_error_interceptor_service__WEBPACK_IMPORTED_MODULE_0__.ErrorInterceptor, multi: true },
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_7__.CUSTOM_ELEMENTS_SCHEMA],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
    })
], HomePageModule);



/***/ }),

/***/ 2267:
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./home.page.html */ 9764);
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss */ 2610);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _config_api_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/api.config */ 5926);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 1841);








let HomePage = class HomePage {
    constructor(platform, http, router) {
        this.http = http;
        this.router = router;
        this.isAndroid = false;
        this.isloading = true;
        this.resumoDTO = {};
        this.hidden = false;
        this.fullScreen = false;
        this.topFlag = false;
        this.tintColor = '#108ee9';
        this.unselectedTintColor = '#888';
        this.tabbarStyle = { height: '400px' };
        this.selectedIndex = 1;
        this.isAndroid = platform.is('android');
    }
    ngOnInit() {
        this.isloading = true;
        this.http.get(`${_config_api_config__WEBPACK_IMPORTED_MODULE_2__.API_CONFIG.baseUrl}/gramatica/resumoverbos`)
            .toPromise()
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
    showTabBar(event) {
        event.preventDefault();
        this.hidden = !this.hidden;
    }
    showNextTabBar(event) {
        event.preventDefault();
        const PANE_COUNT = 4;
        if (this.selectedIndex == PANE_COUNT - 1) {
            this.selectedIndex = 0;
        }
        else {
            this.selectedIndex++;
        }
        console.log('selectedIndex: ', this.selectedIndex);
    }
    showFullScreen(event) {
        event.preventDefault();
        this.fullScreen = !this.fullScreen;
        this.tabbarStyle = this.fullScreen
            ? {
                position: 'fixed',
                height: '100%',
                width: '100%',
                top: 0
            }
            : { height: '400px' };
    }
    changePosition(event) {
        event.preventDefault();
        this.topFlag = !this.topFlag;
    }
    tabBarTabOnPress(pressParam) {
        console.log('onPress Params: ', pressParam);
        this.selectedIndex = pressParam.index;
    }
};
HomePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.Platform },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router }
];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HomePage);



/***/ }),

/***/ 2610:
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 9764:
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n    <ion-toolbar color=\"tertiary\">\n        <ion-title>Digital.Course.English</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-router-outlet></ion-router-outlet>\n</ion-content>\n\n<ion-tabs>\n\n    <ion-tab-bar slot=\"bottom\" color='primary'>\n        <ion-tab-button tab=\"home\">\n            <ion-icon name=\"person-circle-outline\"></ion-icon>\n            <ion-label>Home</ion-label>\n        </ion-tab-button>\n\n        <ion-tab-button tab=\"modulo1-home\">\n            <ion-icon name=\"easel-outline\"></ion-icon>\n            <ion-label>Módulo 1</ion-label>\n        </ion-tab-button>\n\n        <ion-tab-button tab=\"settings\">\n            <ion-icon name=\"settings-outline\"></ion-icon>\n            <ion-label>Módulo 2</ion-label>\n        </ion-tab-button>\n\n        <ion-tab-button tab=\"settings\">\n            <ion-icon name=\"settings-outline\"></ion-icon>\n            <ion-label>Perfil</ion-label>\n        </ion-tab-button>\n    </ion-tab-bar>\n\n</ion-tabs>");

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map