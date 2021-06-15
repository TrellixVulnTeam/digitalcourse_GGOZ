(self["webpackChunkdigitalcourse"] = self["webpackChunkdigitalcourse"] || []).push([["src_app_pages_login_login_module_ts"],{

/***/ 3403:
/*!*****************************************************!*\
  !*** ./src/app/pages/login/login-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginRoutingModule": () => (/* binding */ LoginRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 3058);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);




const routes = [
    {
        path: '', component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginRoutingModule = class LoginRoutingModule {
};
LoginRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], LoginRoutingModule);



/***/ }),

/***/ 1053:
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginModule": () => (/* binding */ LoginModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 3058);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login-routing.module */ 3403);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);







let LoginModule = class LoginModule {
};
LoginModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_1__.LoginRoutingModule
        ]
    })
], LoginModule);



/***/ }),

/***/ 3058:
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./login.page.html */ 1021);
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss */ 8781);
/* harmony import */ var _account_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../account/account.service */ 740);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/utils.service */ 8270);







let LoginPage = class LoginPage {
    constructor(util, accountService, navCtrl) {
        this.util = util;
        this.accountService = accountService;
        this.navCtrl = navCtrl;
        this.creds = {
            email: '',
            senha: ''
        };
    }
    ngOnInit() {
    }
    login() {
        // Enabling Side Menu 
        if (this.creds.email == '' || this.creds.senha == '') {
            this.util.presentAlert('Atenção', 'Obrigatório preencher seu email e senha');
            return false;
        }
        if (!this.util.testaEmail(this.creds.email)) {
            this.util.presentAlert('Atenção', 'Verifique seu email e tente novamente');
            return false;
        }
        this.util.preloadLogin();
        this.accountService.login(this.creds);
        this.navCtrl.navigateRoot('/home', { animationDirection: 'forward' });
    }
};
LoginPage.ctorParameters = () => [
    { type: src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_3__.UtilsService },
    { type: _account_account_service__WEBPACK_IMPORTED_MODULE_2__.AccountService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LoginPage);



/***/ }),

/***/ 8781:
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-toolbar {\n  --border-width: 0 !important;\n}\n\n.header-md::after {\n  background: none !important;\n}\n\n.container h1 {\n  margin-top: 0;\n}\n\n.backbtn {\n  margin-left: 20px;\n}\n\n.form-container {\n  margin-top: 48px;\n}\n\n.form-container ion-item {\n  --padding-start: 0;\n  --border-color: #DADADA;\n}\n\n.form-container ion-item ion-label {\n  color: #A6A6A6;\n}\n\n.form-container ion-item ion-icon {\n  margin-top: auto;\n  color: #c6cbd4;\n}\n\n.form-container ion-button {\n  margin-top: 48px;\n}\n\n.sign-up {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.sign-up ion-button {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLDRCQUFBO0FBQUo7O0FBSUE7RUFDSSwyQkFBQTtBQURKOztBQUlBO0VBQ0ksYUFBQTtBQURKOztBQUlBO0VBQ0ksaUJBQUE7QUFESjs7QUFJQTtFQUNJLGdCQUFBO0FBREo7O0FBSUE7RUFDSSxrQkFBQTtFQUNBLHVCQUFBO0FBREo7O0FBSUE7RUFDSSxjQUFBO0FBREo7O0FBSUE7RUFDSSxnQkFBQTtFQUNBLGNBQUE7QUFESjs7QUFJQTtFQUNJLGdCQUFBO0FBREo7O0FBSUE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQURKOztBQUlBO0VBQ0ksU0FBQTtBQURKIiwiZmlsZSI6ImxvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRoaXMgd2lsbCByZW1vdmUgaU9TIEhlYWRlciBMaW5lXG5pb24tdG9vbGJhciB7XG4gICAgLS1ib3JkZXItd2lkdGg6IDAgIWltcG9ydGFudDtcbn1cblxuLy8gUmVtb3ZpbmcgQW5kcm9pZCBIZWFkZXIgTGluZVxuLmhlYWRlci1tZDo6YWZ0ZXIge1xuICAgIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmNvbnRhaW5lciBoMSB7XG4gICAgbWFyZ2luLXRvcDogMDtcbn1cblxuLmJhY2tidG4ge1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuXG4uZm9ybS1jb250YWluZXIge1xuICAgIG1hcmdpbi10b3A6IDQ4cHg7XG59XG5cbi5mb3JtLWNvbnRhaW5lciBpb24taXRlbSB7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAgIC0tYm9yZGVyLWNvbG9yOiAjREFEQURBO1xufVxuXG4uZm9ybS1jb250YWluZXIgaW9uLWl0ZW0gaW9uLWxhYmVsIHtcbiAgICBjb2xvcjogI0E2QTZBNjtcbn1cblxuLmZvcm0tY29udGFpbmVyIGlvbi1pdGVtIGlvbi1pY29uIHtcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xuICAgIGNvbG9yOiAjYzZjYmQ0O1xufVxuXG4uZm9ybS1jb250YWluZXIgaW9uLWJ1dHRvbiB7XG4gICAgbWFyZ2luLXRvcDogNDhweDtcbn1cblxuLnNpZ24tdXAge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnNpZ24tdXAgaW9uLWJ1dHRvbiB7XG4gICAgbWFyZ2luOiAwO1xufSJdfQ== */");

/***/ }),

/***/ 1021:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-button class=\"backbtn\" routerLink=\"/welcome\" routerDirection=\"back\">\n                <!-- <img src=\"../../assets/back.svg\" />\n               -->\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n    <div class=\"ion-padding container\">\n        <h1>Login</h1>\n\n        <div class=\"form-container\">\n            <ion-item>\n                <ion-label position=\"floating\">Email</ion-label>\n                <ion-input type='email' [(ngModel)]=\"creds.email\" placeholder='Email'></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label position=\"floating\">Password</ion-label>\n                <ion-input [(ngModel)]=\"creds.senha\" placeholder='Password' type=\"password\"></ion-input>\n                <ion-icon name=\"eye\" slot=\"end\"></ion-icon>\n            </ion-item>\n\n            <ion-button expand=\"block\" class=\"main-button\" (click)=\"login()\">Log in</ion-button>\n\n            <div class=\"sign-up\">\n                Don't have an account?\n                <ion-button color=\"dark\" fill=\"clear\" routerLink=\"/signup\" routerDirection=\"forward\">Sign up</ion-button>\n            </div>\n        </div>\n    </div>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_login_login_module_ts.js.map