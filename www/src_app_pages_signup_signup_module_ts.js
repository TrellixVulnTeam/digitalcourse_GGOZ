(self["webpackChunkdigitalcourse"] = self["webpackChunkdigitalcourse"] || []).push([["src_app_pages_signup_signup_module_ts"],{

/***/ 392:
/*!*******************************************************!*\
  !*** ./src/app/pages/signup/signup-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupPageRoutingModule": () => (/* binding */ SignupPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signup.page */ 4374);




const routes = [
    {
        path: '',
        component: _signup_page__WEBPACK_IMPORTED_MODULE_0__.SignupPage
    }
];
let SignupPageRoutingModule = class SignupPageRoutingModule {
};
SignupPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SignupPageRoutingModule);



/***/ }),

/***/ 7110:
/*!***********************************************!*\
  !*** ./src/app/pages/signup/signup.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupPageModule": () => (/* binding */ SignupPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _signup_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signup-routing.module */ 392);
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signup.page */ 4374);







let SignupPageModule = class SignupPageModule {
};
SignupPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _signup_routing_module__WEBPACK_IMPORTED_MODULE_0__.SignupPageRoutingModule
        ],
        declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_1__.SignupPage]
    })
], SignupPageModule);



/***/ }),

/***/ 4374:
/*!*********************************************!*\
  !*** ./src/app/pages/signup/signup.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupPage": () => (/* binding */ SignupPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_signup_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./signup.page.html */ 1979);
/* harmony import */ var _signup_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signup.page.scss */ 9233);
/* harmony import */ var src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/utils.service */ 8270);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _config_api_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../config/api.config */ 5926);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var src_app_account_account_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/account/account.service */ 740);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);










let SignupPage = class SignupPage {
    constructor(http, router, util, accountService, navCtrl) {
        this.http = http;
        this.router = router;
        this.util = util;
        this.accountService = accountService;
        this.navCtrl = navCtrl;
        this.creds = {
            email: '',
            senha: ''
        };
    }
    ngOnInit() {
        this.usuario = { nome: '', email: '', senha: '' };
    }
    createuser() {
        if (this.usuario.email == '' || this.usuario.senha == '') {
            this.util.presentAlert('Atenção', 'Obrigatório preencher seu email e senha');
            return false;
        }
        if (!this.util.testaEmail(this.usuario.email)) {
            this.util.presentAlert('Atenção', 'Verifique seu email e tente novamente');
            return false;
        }
        this.http.post(`${_config_api_config__WEBPACK_IMPORTED_MODULE_3__.API_CONFIG.baseUrl}/usuarios/insertusuario?pws=${this.usuario.senha}`, this.usuario)
            .toPromise()
            .then(rest => {
            this.creds.senha = this.usuario.senha;
            this.util.preloadLogin();
            this.creds.email = this.usuario.email;
            this.accountService.login(this.creds);
            this.navCtrl.navigateRoot('/home', { animationDirection: 'forward' });
        });
    }
};
SignupPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_2__.UtilsService },
    { type: src_app_account_account_service__WEBPACK_IMPORTED_MODULE_4__.AccountService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavController }
];
SignupPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-signup',
        template: _raw_loader_signup_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_signup_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SignupPage);



/***/ }),

/***/ 9233:
/*!***********************************************!*\
  !*** ./src/app/pages/signup/signup.page.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWdudXAucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 1979:
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signup/signup.page.html ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n    <ion-toolbar>\n\n\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n    <div class=\"ion-padding container\">\n        <h1>Signup</h1>\n\n        <div class=\"form-container\">\n            <ion-item>\n                <ion-label position=\"floating\">Name</ion-label>\n                <ion-input [(ngModel)]=\"usuario.nome\"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label position=\"floating\">Email</ion-label>\n                <ion-input [(ngModel)]=\"usuario.email\" type='email'></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label position=\"floating\">Password</ion-label>\n                <ion-input type=\"password\" [(ngModel)]=\"usuario.senha\"></ion-input>\n                <ion-icon name=\"eye\" slot=\"end\"></ion-icon>\n            </ion-item>\n\n            <ion-button expand=\"block\" class=\"main-button\" (click)=\"createuser()\">Sign Up</ion-button>\n\n            <div class=\"sign-up\">\n                Already have an account?\n                <ion-button color=\"dark\" fill=\"clear\" routerLink=\"/login\" routerDirection=\"forward\">Sign in</ion-button>\n            </div>\n        </div>\n    </div>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_signup_signup_module_ts.js.map