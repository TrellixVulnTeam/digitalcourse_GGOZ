(self["webpackChunkdigitalcourse"] = self["webpackChunkdigitalcourse"] || []).push([["src_app_pages_modulo1_gramatica_verbos_edit-verb_edit-verb_module_ts"],{

/***/ 9311:
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/modulo1/gramatica/verbos/edit-segmento-futuro/edit-segmento-futuro.page.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditSegmentoFuturoPage": () => (/* binding */ EditSegmentoFuturoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_edit_segmento_futuro_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./edit-segmento-futuro.page.html */ 1042);
/* harmony import */ var _edit_segmento_futuro_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-segmento-futuro.page.scss */ 1005);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var src_app_services_home_gramatica_verb_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/home-gramatica-verb.service */ 3007);
/* harmony import */ var src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/utils.service */ 8270);







let EditSegmentoFuturoPage = class EditSegmentoFuturoPage {
    constructor(toastCtrl, homeGramaticaVerbService, utilService) {
        this.toastCtrl = toastCtrl;
        this.homeGramaticaVerbService = homeGramaticaVerbService;
        this.utilService = utilService;
        this.translator = true;
        this.thumbStyle = {
            width: '32px',
            height: '32px'
        };
    }
    ngOnInit() {
        /*let direcao = 'translatorpttoen';
        let texto = this.atividadeVerb.atividadesverbais.futuro.regra
        if (this.translator)
          this.homeGramaticaVerbService.ontranlator(direcao, texto)
            .then(
              rest => {
                this.rulers = rest.fraseportugues;
              }
            )
            */
    }
    helppresent() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            let texto = '';
            if (this.translator)
                texto = this.atividadeVerb.atividadesverbais.futuro.descricaoingles;
            else
                texto = this.atividadeVerb.atividadesverbais.futuro.descricao;
            /*this._toast.info('We use the present simple for: things that we do regularly, facts and truths,  habits, permanent situations', 6000,
          ()=>{ this._toast.hide()},true,'middle' );*/
            const toast = yield this.toastCtrl.create({
                header: 'Simple Future',
                message: texto,
                position: 'middle',
                buttons: [
                    {
                        text: 'ok',
                        role: 'cancel',
                        handler: () => {
                            console.log('Cancel clicked');
                        }
                    }
                ]
            });
            yield toast.present();
            const { role } = yield toast.onDidDismiss();
            console.log('onDidDismiss resolved with role', role);
        });
    }
    invertTranslator() {
        this.translator = !this.translator;
        /*  let direcao = 'translatorpttoen'
          let texto = this.atividadeVerb.atividadesverbais.futuro.regra
          if (this.translator)
            this.homeGramaticaVerbService.ontranlator(direcao, texto)
              .then(
                rest => {
                  this.rulers = rest.fraseportugues;
                }
              )
              */
    }
    onTranslateafirmativo() {
        this.utilService.preloadLogin();
        let texto = this.atividadeVerb.atividadesverbais.futuro.frases.fraseingles;
        let direcao;
        if (this.translator) {
            direcao = 'translatorentopt';
            texto = this.atividadeVerb.atividadesverbais.futuro.frases.fraseingles;
        }
        else {
            direcao = 'translatorpttoen';
            texto = this.atividadeVerb.atividadesverbais.futuro.frases.fraseportugues;
        }
        ;
        this.homeGramaticaVerbService.ontranlator(direcao, texto)
            .then(rest => {
            var json_data = (rest);
            this.utilService.loadingDemiss();
            console.log(json_data);
            this.texttraduzido = this.atividadeVerb.atividadesverbais.futuro.frases.status;
            this.atividadeVerb.atividadesverbais.futuro.frases = rest;
            this.atividadeVerb.atividadesverbais.futuro.frases.status = this.texttraduzido;
        });
    }
};
EditSegmentoFuturoPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController },
    { type: src_app_services_home_gramatica_verb_service__WEBPACK_IMPORTED_MODULE_2__.HomeGramaticaVerbService },
    { type: src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_3__.UtilsService }
];
EditSegmentoFuturoPage.propDecorators = {
    rulers: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }],
    atividadeVerb: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }]
};
EditSegmentoFuturoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-edit-segmento-futuro',
        template: _raw_loader_edit_segmento_futuro_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_edit_segmento_futuro_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], EditSegmentoFuturoPage);



/***/ }),

/***/ 5540:
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/modulo1/gramatica/verbos/edit-segmento-passado/edit-segmento-passado.page.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditSegmentoPassadoPage": () => (/* binding */ EditSegmentoPassadoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_edit_segmento_passado_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./edit-segmento-passado.page.html */ 4162);
/* harmony import */ var _edit_segmento_passado_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-segmento-passado.page.scss */ 4755);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var src_app_services_home_gramatica_verb_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/home-gramatica-verb.service */ 3007);
/* harmony import */ var src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/utils.service */ 8270);







let EditSegmentoPassadoPage = class EditSegmentoPassadoPage {
    constructor(toastCtrl, homeGramaticaVerbService, utilService) {
        this.toastCtrl = toastCtrl;
        this.homeGramaticaVerbService = homeGramaticaVerbService;
        this.utilService = utilService;
        this.translator = true;
        this.thumbStyle = {
            width: '32px',
            height: '32px'
        };
    }
    ngOnInit() {
        /*let direcao = 'translatorpttoen';
        let texto = this.atividadeVerb.atividadesverbais.passado.regra
        if (this.translator)
          this.homeGramaticaVerbService.ontranlator(direcao, texto)
            .then(
              rest => {
                this.rulers = rest.fraseportugues;
              }
            )
            */
    }
    helppresent() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            let texto = '';
            if (this.translator)
                texto = this.atividadeVerb.atividadesverbais.passado.descricaoingles;
            else
                texto = this.atividadeVerb.atividadesverbais.passado.descricao;
            const toast = yield this.toastCtrl.create({
                header: 'Simple Past',
                message: texto,
                position: 'middle',
                buttons: [
                    {
                        text: 'ok',
                        role: 'cancel',
                        handler: () => {
                            console.log('Cancel clicked');
                        }
                    }
                ]
            });
            yield toast.present();
            const { role } = yield toast.onDidDismiss();
            console.log('onDidDismiss resolved with role', role);
        });
    }
    invertTranslator() {
        this.translator = !this.translator;
        /*  let direcao = 'translatorpttoen'
          let texto = this.atividadeVerb.atividadesverbais.passado.regra
          if (this.translator)
            this.homeGramaticaVerbService.ontranlator(direcao, texto)
              .then(
                rest => {
                  this.rulers = rest.fraseportugues;
                }
              )
              */
    }
    onTranslateafirmativo() {
        this.utilService.preloadLogin();
        let texto = this.atividadeVerb.atividadesverbais.passado.frases.fraseingles;
        let direcao;
        if (this.translator) {
            direcao = 'translatorentopt';
            texto = this.atividadeVerb.atividadesverbais.passado.frases.fraseingles;
        }
        else {
            direcao = 'translatorpttoen';
            texto = this.atividadeVerb.atividadesverbais.passado.frases.fraseportugues;
        }
        ;
        this.homeGramaticaVerbService.ontranlator(direcao, texto)
            .then(rest => {
            var json_data = (rest);
            this.utilService.loadingDemiss();
            console.log(json_data);
            this.texttraduzido = this.atividadeVerb.atividadesverbais.passado.frases.status;
            this.atividadeVerb.atividadesverbais.passado.frases = rest;
            this.atividadeVerb.atividadesverbais.passado.frases.status = this.texttraduzido;
        });
    }
};
EditSegmentoPassadoPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController },
    { type: src_app_services_home_gramatica_verb_service__WEBPACK_IMPORTED_MODULE_2__.HomeGramaticaVerbService },
    { type: src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_3__.UtilsService }
];
EditSegmentoPassadoPage.propDecorators = {
    rulers: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }],
    atividadeVerb: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }]
};
EditSegmentoPassadoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-edit-segmento-passado',
        template: _raw_loader_edit_segmento_passado_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_edit_segmento_passado_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], EditSegmentoPassadoPage);



/***/ }),

/***/ 2995:
/*!****************************************************************************************************************************!*\
  !*** ./src/app/pages/modulo1/gramatica/verbos/edit-segmento-presente-afirmativa/edit-segmento-presente-afirmativa.page.ts ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditSegmentoPresenteAfirmativaPage": () => (/* binding */ EditSegmentoPresenteAfirmativaPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_edit_segmento_presente_afirmativa_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./edit-segmento-presente-afirmativa.page.html */ 2100);
/* harmony import */ var _edit_segmento_presente_afirmativa_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-segmento-presente-afirmativa.page.scss */ 3109);
/* harmony import */ var _services_utils_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../../services/utils.service */ 8270);
/* harmony import */ var src_app_services_home_gramatica_verb_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/home-gramatica-verb.service */ 3007);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);






let EditSegmentoPresenteAfirmativaPage = class EditSegmentoPresenteAfirmativaPage {
    constructor(homeGramaticaVerbService, utilService) {
        this.homeGramaticaVerbService = homeGramaticaVerbService;
        this.utilService = utilService;
        this.translator = true;
    }
    ngOnInit() {
        console.log(this.atividadeVerb);
    }
    invertTranslator() {
        this.translator = !this.translator;
    }
    onTranslateafirmativo() {
        this.utilService.preloadLogin();
        let texto = this.atividadeVerb.atividadesverbais.presente.afirmativo.frases.fraseingles;
        let direcao;
        if (this.translator) {
            direcao = 'translatorentopt';
            texto = this.atividadeVerb.atividadesverbais.presente.afirmativo.frases.fraseingles;
        }
        else {
            direcao = 'translatorpttoen';
            texto = this.atividadeVerb.atividadesverbais.presente.afirmativo.frases.fraseportugues;
        }
        ;
        this.homeGramaticaVerbService.ontranlator(direcao, texto)
            .then(rest => {
            var json_data = (rest);
            this.utilService.loadingDemiss();
            console.log(json_data);
            this.texttraduzido = this.atividadeVerb.atividadesverbais.presente.afirmativo.frases.status;
            this.atividadeVerb.atividadesverbais.presente.afirmativo.frases = rest;
            this.atividadeVerb.atividadesverbais.presente.afirmativo.frases.status = this.texttraduzido;
        });
    }
};
EditSegmentoPresenteAfirmativaPage.ctorParameters = () => [
    { type: src_app_services_home_gramatica_verb_service__WEBPACK_IMPORTED_MODULE_3__.HomeGramaticaVerbService },
    { type: _services_utils_service__WEBPACK_IMPORTED_MODULE_2__.UtilsService }
];
EditSegmentoPresenteAfirmativaPage.propDecorators = {
    atividadeVerb: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }]
};
EditSegmentoPresenteAfirmativaPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-edit-segmento-presente-afirmativa',
        template: _raw_loader_edit_segmento_presente_afirmativa_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_edit_segmento_presente_afirmativa_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], EditSegmentoPresenteAfirmativaPage);



/***/ }),

/***/ 3676:
/*!************************************************************************************************************************!*\
  !*** ./src/app/pages/modulo1/gramatica/verbos/edit-segmento-presente-negativa/edit-segmento-presente-negativa.page.ts ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditSegmentoPresenteNegativaPage": () => (/* binding */ EditSegmentoPresenteNegativaPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_edit_segmento_presente_negativa_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./edit-segmento-presente-negativa.page.html */ 4310);
/* harmony import */ var _edit_segmento_presente_negativa_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-segmento-presente-negativa.page.scss */ 2919);
/* harmony import */ var _services_utils_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../../services/utils.service */ 8270);
/* harmony import */ var src_app_services_home_gramatica_verb_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/home-gramatica-verb.service */ 3007);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);






let EditSegmentoPresenteNegativaPage = class EditSegmentoPresenteNegativaPage {
    constructor(homeGramaticaVerbService, utilService) {
        this.homeGramaticaVerbService = homeGramaticaVerbService;
        this.utilService = utilService;
        this.translator = true;
    }
    ngOnInit() {
        console.log(this.atividadeVerb);
    }
    invertTranslator() {
        this.translator = !this.translator;
    }
    onTranslatenegativo() {
        this.utilService.preloadLogin();
        let texto = this.atividadeVerb.atividadesverbais.presente.negativo.frases.fraseingles;
        let direcao;
        if (this.translator) {
            direcao = 'translatorentopt';
            texto = this.atividadeVerb.atividadesverbais.presente.negativo.frases.fraseingles;
        }
        else {
            direcao = 'translatorpttoen';
            texto = this.atividadeVerb.atividadesverbais.presente.negativo.frases.fraseportugues;
        }
        ;
        this.homeGramaticaVerbService.ontranlator(direcao, texto)
            .then(rest => {
            var json_data = (rest);
            this.utilService.loadingDemiss();
            console.log(json_data);
            this.texttraduzido = this.atividadeVerb.atividadesverbais.presente.negativo.frases.status;
            this.atividadeVerb.atividadesverbais.presente.negativo.frases = rest;
            this.atividadeVerb.atividadesverbais.presente.negativo.frases.status = this.texttraduzido;
        });
    }
};
EditSegmentoPresenteNegativaPage.ctorParameters = () => [
    { type: src_app_services_home_gramatica_verb_service__WEBPACK_IMPORTED_MODULE_3__.HomeGramaticaVerbService },
    { type: _services_utils_service__WEBPACK_IMPORTED_MODULE_2__.UtilsService }
];
EditSegmentoPresenteNegativaPage.propDecorators = {
    atividadeVerb: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }]
};
EditSegmentoPresenteNegativaPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-edit-segmento-presente-negativa',
        template: _raw_loader_edit_segmento_presente_negativa_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_edit_segmento_presente_negativa_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], EditSegmentoPresenteNegativaPage);



/***/ }),

/***/ 4471:
/*!************************************************************************************************************************!*\
  !*** ./src/app/pages/modulo1/gramatica/verbos/edit-segmento-presente-question/edit-segmento-presente-question.page.ts ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditSegmentoPresenteQuestionPage": () => (/* binding */ EditSegmentoPresenteQuestionPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_edit_segmento_presente_question_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./edit-segmento-presente-question.page.html */ 8439);
/* harmony import */ var _edit_segmento_presente_question_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-segmento-presente-question.page.scss */ 9351);
/* harmony import */ var _services_utils_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../../services/utils.service */ 8270);
/* harmony import */ var src_app_services_home_gramatica_verb_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/home-gramatica-verb.service */ 3007);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);






let EditSegmentoPresenteQuestionPage = class EditSegmentoPresenteQuestionPage {
    constructor(homeGramaticaVerbService, utilService) {
        this.homeGramaticaVerbService = homeGramaticaVerbService;
        this.utilService = utilService;
        this.translator = true;
    }
    ngOnInit() {
        console.log(this.atividadeVerb);
    }
    invertTranslator() {
        this.translator = !this.translator;
    }
    onTranslatepergunta() {
        this.utilService.preloadLogin();
        let texto = this.atividadeVerb.atividadesverbais.presente.pergunta.frases.fraseingles;
        let direcao;
        if (this.translator) {
            direcao = 'translatorentopt';
            texto = this.atividadeVerb.atividadesverbais.presente.pergunta.frases.fraseingles;
        }
        else {
            direcao = 'translatorpttoen';
            texto = this.atividadeVerb.atividadesverbais.presente.pergunta.frases.fraseportugues;
        }
        ;
        this.homeGramaticaVerbService.ontranlator(direcao, texto)
            .then(rest => {
            var json_data = (rest);
            this.utilService.loadingDemiss();
            console.log(json_data);
            this.texttraduzido = this.atividadeVerb.atividadesverbais.presente.pergunta.frases.status;
            this.atividadeVerb.atividadesverbais.presente.pergunta.frases = rest;
            this.atividadeVerb.atividadesverbais.presente.pergunta.frases.status = this.texttraduzido;
        });
    }
};
EditSegmentoPresenteQuestionPage.ctorParameters = () => [
    { type: src_app_services_home_gramatica_verb_service__WEBPACK_IMPORTED_MODULE_3__.HomeGramaticaVerbService },
    { type: _services_utils_service__WEBPACK_IMPORTED_MODULE_2__.UtilsService }
];
EditSegmentoPresenteQuestionPage.propDecorators = {
    atividadeVerb: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }]
};
EditSegmentoPresenteQuestionPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-edit-segmento-presente-question',
        template: _raw_loader_edit_segmento_presente_question_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_edit_segmento_presente_question_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], EditSegmentoPresenteQuestionPage);



/***/ }),

/***/ 4838:
/*!******************************************************************************************************!*\
  !*** ./src/app/pages/modulo1/gramatica/verbos/edit-segmento-presente/edit-segmento-presente.page.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditSegmentoPresentePage": () => (/* binding */ EditSegmentoPresentePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_edit_segmento_presente_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./edit-segmento-presente.page.html */ 2185);
/* harmony import */ var _edit_segmento_presente_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-segmento-presente.page.scss */ 6610);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 476);





let EditSegmentoPresentePage = class EditSegmentoPresentePage {
    constructor(toastCtrl) {
        this.toastCtrl = toastCtrl;
        this.translator = true;
        this.segmentModel = 'Afirmativa';
        this.thumbStyle = {
            width: '32px',
            height: '32px'
        };
    }
    ngOnInit() {
    }
    helppresent() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            let texto = '';
            if (this.translator)
                texto = 'We use the present simple for: things that we do regularly, facts and truths,  habits, permanent situations';
            else
                texto = 'Usamos o presente simples para: coisas que fazemos regularmente, fatos e verdades, hábitos, situações permanentes';
            /*this._toast.info('We use the present simple for: things that we do regularly, facts and truths,  habits, permanent situations', 6000,
          ()=>{ this._toast.hide()},true,'middle' );*/
            const toast = yield this.toastCtrl.create({
                header: 'Present Sample',
                message: texto,
                position: 'middle',
                buttons: [
                    {
                        text: 'ok',
                        role: 'cancel',
                        handler: () => {
                            console.log('Cancel clicked');
                        }
                    }
                ]
            });
            yield toast.present();
            const { role } = yield toast.onDidDismiss();
            console.log('onDidDismiss resolved with role', role);
        });
    }
    segmentChanged(event) {
        console.log(this.segmentModel);
        console.log(event);
    }
    invertTranslator() {
        this.translator = !this.translator;
    }
};
EditSegmentoPresentePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ToastController }
];
EditSegmentoPresentePage.propDecorators = {
    atividadeVerb: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }]
};
EditSegmentoPresentePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-edit-segmento-presente',
        template: _raw_loader_edit_segmento_presente_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_edit_segmento_presente_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], EditSegmentoPresentePage);



/***/ }),

/***/ 6512:
/*!**********************************************************************************************************************!*\
  !*** ./src/app/pages/modulo1/gramatica/verbos/edit-segmento-presentecontinuo/edit-segmento-presentecontinuo.page.ts ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditSegmentoPresentecontinuoPage": () => (/* binding */ EditSegmentoPresentecontinuoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_edit_segmento_presentecontinuo_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./edit-segmento-presentecontinuo.page.html */ 7599);
/* harmony import */ var _edit_segmento_presentecontinuo_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-segmento-presentecontinuo.page.scss */ 741);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var src_app_services_home_gramatica_verb_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/home-gramatica-verb.service */ 3007);
/* harmony import */ var src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/utils.service */ 8270);







let EditSegmentoPresentecontinuoPage = class EditSegmentoPresentecontinuoPage {
    constructor(toastCtrl, homeGramaticaVerbService, utilService) {
        this.toastCtrl = toastCtrl;
        this.homeGramaticaVerbService = homeGramaticaVerbService;
        this.utilService = utilService;
        this.translator = true;
        this.thumbStyle = {
            width: '32px',
            height: '32px'
        };
    }
    ngOnInit() {
    }
    helppresent() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            let texto = '';
            if (this.translator)
                texto = this.atividadeVerb.atividadesverbais.presentecontinuo.descricaoingles;
            else
                texto = this.atividadeVerb.atividadesverbais.presentecontinuo.descricao;
            const toast = yield this.toastCtrl.create({
                header: 'Present Continuous',
                message: texto,
                position: 'middle',
                buttons: [
                    {
                        text: 'ok',
                        role: 'cancel',
                        handler: () => {
                            console.log('Cancel clicked');
                        }
                    }
                ]
            });
            yield toast.present();
            const { role } = yield toast.onDidDismiss();
            console.log('onDidDismiss resolved with role', role);
        });
    }
    invertTranslator() {
        this.translator = !this.translator;
    }
    onTranslateafirmativo() {
        this.utilService.preloadLogin();
        let texto = this.atividadeVerb.atividadesverbais.presentecontinuo.frases.fraseingles;
        let direcao;
        if (this.translator) {
            direcao = 'translatorentopt';
            texto = this.atividadeVerb.atividadesverbais.presentecontinuo.frases.fraseingles;
        }
        else {
            direcao = 'translatorpttoen';
            texto = this.atividadeVerb.atividadesverbais.presentecontinuo.frases.fraseportugues;
        }
        ;
        this.homeGramaticaVerbService.ontranlator(direcao, texto)
            .then(rest => {
            var json_data = (rest);
            this.utilService.loadingDemiss();
            console.log(json_data);
            this.texttraduzido = this.atividadeVerb.atividadesverbais.presentecontinuo.frases.status;
            this.atividadeVerb.atividadesverbais.presentecontinuo.frases = rest;
            this.atividadeVerb.atividadesverbais.presentecontinuo.frases.status = this.texttraduzido;
        });
    }
};
EditSegmentoPresentecontinuoPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController },
    { type: src_app_services_home_gramatica_verb_service__WEBPACK_IMPORTED_MODULE_2__.HomeGramaticaVerbService },
    { type: src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_3__.UtilsService }
];
EditSegmentoPresentecontinuoPage.propDecorators = {
    atividadeVerb: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }]
};
EditSegmentoPresentecontinuoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-edit-segmento-presentecontinuo',
        template: _raw_loader_edit_segmento_presentecontinuo_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_edit_segmento_presentecontinuo_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], EditSegmentoPresentecontinuoPage);



/***/ }),

/***/ 5245:
/*!**************************************************************************************!*\
  !*** ./src/app/pages/modulo1/gramatica/verbos/edit-verb/edit-verb-routing.module.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditVerbPageRoutingModule": () => (/* binding */ EditVerbPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _edit_verb_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-verb.page */ 7088);




const routes = [
    {
        path: '',
        component: _edit_verb_page__WEBPACK_IMPORTED_MODULE_0__.EditVerbPage
    }
];
let EditVerbPageRoutingModule = class EditVerbPageRoutingModule {
};
EditVerbPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EditVerbPageRoutingModule);



/***/ }),

/***/ 4573:
/*!******************************************************************************!*\
  !*** ./src/app/pages/modulo1/gramatica/verbos/edit-verb/edit-verb.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditVerbPageModule": () => (/* binding */ EditVerbPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _edit_segmento_futuro_edit_segmento_futuro_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../edit-segmento-futuro/edit-segmento-futuro.page */ 9311);
/* harmony import */ var _edit_segmento_presentecontinuo_edit_segmento_presentecontinuo_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../edit-segmento-presentecontinuo/edit-segmento-presentecontinuo.page */ 6512);
/* harmony import */ var _edit_segmento_presente_question_edit_segmento_presente_question_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../edit-segmento-presente-question/edit-segmento-presente-question.page */ 4471);
/* harmony import */ var _popover_conjugacao_conditional_popover_conjugacao_conditional_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../popover-conjugacao-conditional/popover-conjugacao-conditional.page */ 132);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _edit_verb_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit-verb-routing.module */ 5245);
/* harmony import */ var _edit_verb_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-verb.page */ 7088);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var ng_zorro_antd_mobile__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd-mobile */ 9086);
/* harmony import */ var _edit_segmento_presente_edit_segmento_presente_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../edit-segmento-presente/edit-segmento-presente.page */ 4838);
/* harmony import */ var _edit_segmento_presente_afirmativa_edit_segmento_presente_afirmativa_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../edit-segmento-presente-afirmativa/edit-segmento-presente-afirmativa.page */ 2995);
/* harmony import */ var _edit_segmento_presente_negativa_edit_segmento_presente_negativa_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../edit-segmento-presente-negativa/edit-segmento-presente-negativa.page */ 3676);
/* harmony import */ var _edit_segmento_passado_edit_segmento_passado_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../edit-segmento-passado/edit-segmento-passado.page */ 5540);

















let EditVerbPageModule = class EditVerbPageModule {
};
EditVerbPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonicModule,
            _edit_verb_routing_module__WEBPACK_IMPORTED_MODULE_4__.EditVerbPageRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_15__.HttpClientModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule,
            ng_zorro_antd_mobile__WEBPACK_IMPORTED_MODULE_16__.NgZorroAntdMobileModule,
        ],
        declarations: [
            _edit_verb_page__WEBPACK_IMPORTED_MODULE_5__.EditVerbPage,
            _popover_conjugacao_conditional_popover_conjugacao_conditional_page__WEBPACK_IMPORTED_MODULE_3__.PopoverConjugacaoConditionalPage,
            _edit_segmento_presente_edit_segmento_presente_page__WEBPACK_IMPORTED_MODULE_6__.EditSegmentoPresentePage,
            _edit_segmento_presente_afirmativa_edit_segmento_presente_afirmativa_page__WEBPACK_IMPORTED_MODULE_7__.EditSegmentoPresenteAfirmativaPage,
            _edit_segmento_presente_negativa_edit_segmento_presente_negativa_page__WEBPACK_IMPORTED_MODULE_8__.EditSegmentoPresenteNegativaPage,
            _edit_segmento_presente_question_edit_segmento_presente_question_page__WEBPACK_IMPORTED_MODULE_2__.EditSegmentoPresenteQuestionPage,
            _edit_segmento_presentecontinuo_edit_segmento_presentecontinuo_page__WEBPACK_IMPORTED_MODULE_1__.EditSegmentoPresentecontinuoPage,
            _edit_segmento_passado_edit_segmento_passado_page__WEBPACK_IMPORTED_MODULE_9__.EditSegmentoPassadoPage,
            _edit_segmento_futuro_edit_segmento_futuro_page__WEBPACK_IMPORTED_MODULE_0__.EditSegmentoFuturoPage
        ]
    })
], EditVerbPageModule);



/***/ }),

/***/ 7088:
/*!****************************************************************************!*\
  !*** ./src/app/pages/modulo1/gramatica/verbos/edit-verb/edit-verb.page.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditVerbPage": () => (/* binding */ EditVerbPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_edit_verb_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./edit-verb.page.html */ 2669);
/* harmony import */ var _edit_verb_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-verb.page.scss */ 8994);
/* harmony import */ var _popover_conjugacao_conditional_popover_conjugacao_conditional_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../popover-conjugacao-conditional/popover-conjugacao-conditional.page */ 132);
/* harmony import */ var src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/utils.service */ 8270);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var src_app_services_home_gramatica_verb_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/home-gramatica-verb.service */ 3007);









let EditVerbPage = class EditVerbPage {
    constructor(popoverCtrl, alertController, activatedRoute, router, utilService, homeGramatica) {
        this.popoverCtrl = popoverCtrl;
        this.alertController = alertController;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.utilService = utilService;
        this.homeGramatica = homeGramatica;
        this.isloading = true;
        this.listasegmento = ['Presente', 'Presente Continuo', 'Passado', 'Futuro'];
        this.tempoverbal = 'Presente';
    }
    ngOnInit() {
        this.isloading = true;
        this.atividadeVerb = {};
        this.utilService.preloadLogin();
        this.id = this.activatedRoute.snapshot.paramMap.get('id');
        this.homeGramatica.findAtividadeVerboId(this.id).then(response => {
            this.utilService.loadingDemiss();
            this.atividadeVerb = response;
            /* let direcao = 'translatorpttoen'
             let texto = this.atividadeVerb.atividadesverbais.passado.regra
              
               this.homeGramatica.ontranlator(direcao, texto)
                 .then(
                   rest => {
                     this.rulers = rest.fraseingles;
                     console.log(this.rulers);
                     
                   }
                 )
                 */
            this.isloading = false;
        });
    }
    onLeftClick() {
        this.router.navigate(['list-verb']);
    }
    save() {
        this.homeGramatica.saveAtividadeVerbo(this.atividadeVerb).then(rest => {
            this.utilService.toast('Atividade Salvo com sucesso', "Sucesso");
        });
    }
    finalizar() {
        this.presentAlertConfirm();
    }
    presentAlertConfirm() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Confirmação!',
                mode: 'ios',
                message: 'Deseja finalizar estudo?',
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                            console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'Confirmar',
                        handler: () => {
                            this.onconcluir();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    presentPopovercondicional(ev) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const popover = yield this.popoverCtrl.create({
                componentProps: { 'id': this.atividadeVerb.verb.root.conjugation_tables.conditional },
                component: _popover_conjugacao_conditional_popover_conjugacao_conditional_page__WEBPACK_IMPORTED_MODULE_2__.PopoverConjugacaoConditionalPage,
                cssClass: 'my-custom-class',
                event: ev,
                translucent: true
            });
            yield popover.present();
            const { role } = yield popover.onDidDismiss();
            console.log('onDidDismiss resolved with role', role);
        });
    }
    presentPopoverindicative(ev) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const popover = yield this.popoverCtrl.create({
                componentProps: { 'id': this.atividadeVerb.verb.root.conjugation_tables.indicative },
                component: _popover_conjugacao_conditional_popover_conjugacao_conditional_page__WEBPACK_IMPORTED_MODULE_2__.PopoverConjugacaoConditionalPage,
                cssClass: 'my-custom-class',
                event: ev,
                translucent: true
            });
            yield popover.present();
            const { role } = yield popover.onDidDismiss();
            console.log('onDidDismiss resolved with role', role);
        });
    }
    presentPopoverpassive(ev) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const popover = yield this.popoverCtrl.create({
                componentProps: { 'id': this.atividadeVerb.verb.root.conjugation_tables.passive },
                component: _popover_conjugacao_conditional_popover_conjugacao_conditional_page__WEBPACK_IMPORTED_MODULE_2__.PopoverConjugacaoConditionalPage,
                cssClass: 'my-custom-class',
                event: ev,
                translucent: true
            });
            yield popover.present();
            const { role } = yield popover.onDidDismiss();
            console.log('onDidDismiss resolved with role', role);
        });
    }
    /******** Segmento */
    choose(event) {
        console.log('index: ', event.selectedIndex, 'value: ', event.value);
        this.tempoverbal = event.value;
    }
    onconcluir() {
        let confirmed = true;
        {
            //presente.afirmativo
            if (this.atividadeVerb.atividadesverbais.presente.afirmativo.frases.fraseingles === null) {
                this.utilService.toast('É necessário uma frase no presente afirmativo', 'Alerta');
                confirmed = false;
                return;
            }
            else {
                if (this.atividadeVerb.atividadesverbais.presente.afirmativo.frases.fraseportugues === null) {
                    let texto = this.atividadeVerb.atividadesverbais.presente.afirmativo.frases.fraseingles;
                    this.homeGramatica.ontranlator('translatorentopt', texto)
                        .then(rest => {
                        this.atividadeVerb.atividadesverbais.presente.afirmativo.frases.fraseportugues = rest.fraseportugues;
                    });
                }
            }
            //presente.negativo
            if (this.atividadeVerb.atividadesverbais.presente.negativo.frases.fraseingles === null) {
                this.utilService.toast('É necessário uma frase no presente negativo', 'Alerta');
                confirmed = false;
                return;
            }
            else {
                if (this.atividadeVerb.atividadesverbais.presente.negativo.frases.fraseportugues === null) {
                    let texto = this.atividadeVerb.atividadesverbais.presente.negativo.frases.fraseingles;
                    confirmed = false;
                    this.homeGramatica.ontranlator('translatorentopt', texto)
                        .then(rest => {
                        this.atividadeVerb.atividadesverbais.presente.negativo.frases.fraseportugues = rest.fraseportugues;
                    });
                }
            }
            //presente.negativo
            if (this.atividadeVerb.atividadesverbais.presente.pergunta.frases.fraseingles === null) {
                this.utilService.toast('É necessário uma frase no presente  formato de pergunta', 'Alerta');
                confirmed = false;
                return;
            }
            else {
                if (this.atividadeVerb.atividadesverbais.presente.pergunta.frases.fraseportugues === null) {
                    let texto = this.atividadeVerb.atividadesverbais.presente.pergunta.frases.fraseingles;
                    this.homeGramatica.ontranlator('translatorentopt', texto)
                        .then(rest => {
                        this.atividadeVerb.atividadesverbais.presente.pergunta.frases.fraseportugues = rest.fraseportugues;
                    });
                }
            }
            //presente continuo
            if (this.atividadeVerb.atividadesverbais.presentecontinuo.frases.fraseingles === null) {
                this.utilService.toast('É necessário uma frase no  presente contínuo', 'Alerta');
                confirmed = false;
                return;
            }
            else {
                if (this.atividadeVerb.atividadesverbais.presentecontinuo.frases.fraseportugues === null) {
                    let texto = this.atividadeVerb.atividadesverbais.presentecontinuo.frases.fraseingles;
                    this.homeGramatica.ontranlator('translatorentopt', texto)
                        .then(rest => {
                        this.atividadeVerb.atividadesverbais.presentecontinuo.frases.fraseportugues = rest.fraseportugues;
                    });
                }
            }
            //Passado
            if (this.atividadeVerb.atividadesverbais.passado.frases.fraseingles === null) {
                this.utilService.toast('É necessário uma frase no passado', 'Alerta');
                confirmed = false;
                return;
            }
            else {
                if (this.atividadeVerb.atividadesverbais.passado.frases.fraseportugues === null) {
                    let texto = this.atividadeVerb.atividadesverbais.passado.frases.fraseingles;
                    this.homeGramatica.ontranlator('translatorentopt', texto)
                        .then(rest => {
                        this.atividadeVerb.atividadesverbais.passado.frases.fraseportugues = rest.fraseportugues;
                    });
                }
            }
            //futuro
            if (this.atividadeVerb.atividadesverbais.futuro.frases.fraseingles === null) {
                this.utilService.toast('É necessário uma frase no futuro', 'Alerta');
                confirmed = false;
                return;
            }
            else {
                if (this.atividadeVerb.atividadesverbais.futuro.frases.fraseportugues === null) {
                    let texto = this.atividadeVerb.atividadesverbais.futuro.frases.fraseingles;
                    this.homeGramatica.ontranlator('translatorentopt', texto)
                        .then(rest => {
                        this.atividadeVerb.atividadesverbais.futuro.frases.fraseportugues = rest.fraseportugues;
                        ;
                    });
                }
            }
            if (confirmed) {
                //presente.afirmativo
                this.atividadeVerb.atividadesverbais.presente.afirmativo.frases.status = 'Concluido';
                //presente.negativo          
                this.atividadeVerb.atividadesverbais.presente.negativo.frases.status = 'Concluido';
                //presente.negativo     
                this.atividadeVerb.atividadesverbais.presente.pergunta.frases.status = 'Concluido';
                //presente continuo           
                this.atividadeVerb.atividadesverbais.presentecontinuo.frases.status = 'Concluido';
                //Passado
                this.atividadeVerb.atividadesverbais.passado.frases.status = 'Concluido';
                //futuro           
                this.atividadeVerb.atividadesverbais.futuro.frases.status = 'Concluido';
                this.homeGramatica.concluirAtividadeVerbo(this.atividadeVerb)
                    .subscribe(rest => this.router.navigate(['list-verb']));
            }
        }
    }
};
EditVerbPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.PopoverController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_3__.UtilsService },
    { type: src_app_services_home_gramatica_verb_service__WEBPACK_IMPORTED_MODULE_4__.HomeGramaticaVerbService }
];
EditVerbPage.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild, args: ['popoverContent', { read: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ElementRef },] }],
    text: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild, args: ['popoverText', { read: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ElementRef },] }]
};
EditVerbPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-edit-verb',
        template: _raw_loader_edit_verb_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_edit_verb_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], EditVerbPage);



/***/ }),

/***/ 132:
/*!**********************************************************************************************************************!*\
  !*** ./src/app/pages/modulo1/gramatica/verbos/popover-conjugacao-conditional/popover-conjugacao-conditional.page.ts ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PopoverConjugacaoConditionalPage": () => (/* binding */ PopoverConjugacaoConditionalPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_popover_conjugacao_conditional_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./popover-conjugacao-conditional.page.html */ 4069);
/* harmony import */ var _popover_conjugacao_conditional_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./popover-conjugacao-conditional.page.scss */ 5545);
/* harmony import */ var data_text_css_charset_utf_8_base64_ICAgIC5yZWRiIHsKICAgICAgY29sb3I6IGJyb3duOwogIH0KICA___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! data:text/css;charset=utf-8;base64,ICAgIC5yZWRiIHsKICAgICAgY29sb3I6IGJyb3duOwogIH0KICA= */ 8579);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 476);







let PopoverConjugacaoConditionalPage = class PopoverConjugacaoConditionalPage {
    constructor(navCtrl, navParams, activatedRoute, popover, modalController, platform, actionsheetCtrl) {
        // this.items = this.navParams.get('id');
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.activatedRoute = activatedRoute;
        this.popover = popover;
        this.modalController = modalController;
        this.platform = platform;
        this.actionsheetCtrl = actionsheetCtrl;
        this.state = false;
        this.texto = [];
        this.conditional = {};
    }
    ngOnInit() {
        this.conjugacao = this.navParams.get('id');
        console.log(this.conjugacao);
    }
    ClosePopover() {
        this.state = false;
        this.popover.dismiss();
    }
    presentModal(item) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.texto = [];
            console.log(item);
            this.conditional = item;
            this.conditional.forms.forEach(form => {
                let t = {};
                t.text = form[0] + " " + form[1];
                t.cssClass = 'redb';
                this.texto.push(t);
            });
            console.log(this.texto);
            let actionSheet = this.actionsheetCtrl.create({
                cssClass: 'action-sheets-basic-page',
                buttons: this.texto
            });
            (yield actionSheet).present();
            //this.showModal();
            /*const modal = await this.modalController.create({
              component: ModalConjugacaoPage,
              componentProps: { 'id':   item},
              cssClass: 'my-custom-class'
            });
            return await modal.present();
            */
        });
    }
    dismiss() {
        this.state = false;
        this.popover.dismiss();
    }
    showModal() {
        this.state = true;
    }
};
PopoverConjugacaoConditionalPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavParams },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.PopoverController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.Platform },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ActionSheetController }
];
PopoverConjugacaoConditionalPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-popover-conjugacao-conditional',
        template: _raw_loader_popover_conjugacao_conditional_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [data_text_css_charset_utf_8_base64_ICAgIC5yZWRiIHsKICAgICAgY29sb3I6IGJyb3duOwogIH0KICA___WEBPACK_IMPORTED_MODULE_2__.default, _popover_conjugacao_conditional_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PopoverConjugacaoConditionalPage);



/***/ }),

/***/ 1005:
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/modulo1/gramatica/verbos/edit-segmento-futuro/edit-segmento-futuro.page.scss ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LXNlZ21lbnRvLWZ1dHVyby5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 4755:
/*!******************************************************************************************************!*\
  !*** ./src/app/pages/modulo1/gramatica/verbos/edit-segmento-passado/edit-segmento-passado.page.scss ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LXNlZ21lbnRvLXBhc3NhZG8ucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 3109:
/*!******************************************************************************************************************************!*\
  !*** ./src/app/pages/modulo1/gramatica/verbos/edit-segmento-presente-afirmativa/edit-segmento-presente-afirmativa.page.scss ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LXNlZ21lbnRvLXByZXNlbnRlLWFmaXJtYXRpdmEucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 2919:
/*!**************************************************************************************************************************!*\
  !*** ./src/app/pages/modulo1/gramatica/verbos/edit-segmento-presente-negativa/edit-segmento-presente-negativa.page.scss ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LXNlZ21lbnRvLXByZXNlbnRlLW5lZ2F0aXZhLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 9351:
/*!**************************************************************************************************************************!*\
  !*** ./src/app/pages/modulo1/gramatica/verbos/edit-segmento-presente-question/edit-segmento-presente-question.page.scss ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LXNlZ21lbnRvLXByZXNlbnRlLXF1ZXN0aW9uLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 6610:
/*!********************************************************************************************************!*\
  !*** ./src/app/pages/modulo1/gramatica/verbos/edit-segmento-presente/edit-segmento-presente.page.scss ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LXNlZ21lbnRvLXByZXNlbnRlLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 741:
/*!************************************************************************************************************************!*\
  !*** ./src/app/pages/modulo1/gramatica/verbos/edit-segmento-presentecontinuo/edit-segmento-presentecontinuo.page.scss ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LXNlZ21lbnRvLXByZXNlbnRlY29udGludW8ucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 8994:
/*!******************************************************************************!*\
  !*** ./src/app/pages/modulo1/gramatica/verbos/edit-verb/edit-verb.page.scss ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/* DOES NOT WORK - not specific enough */\n.alert-wrapper {\n  background: #e5e5e5;\n}\n/* Works - pass \"my-custom-class\" in cssClass to increase specificity */\n.my-custom-class .alert-wrapper {\n  background: #f1e5e5;\n}\n.on-grid1 {\n  text-align: center;\n}\n.on-grid1 ion-row:first-child {\n  font-weight: bold;\n  border-bottom: 0;\n  border-right: 0;\n  text-align: center;\n}\n.on-grid1 .on-grid {\n  border: 1px solid #575151;\n  border-bottom: 0;\n  border-right: 0;\n  text-align: center;\n}\n.on-grid1 .ion-col :last-child {\n  border-right: 1px solid #575151;\n  text-align: center;\n}\n.on-grid1 .ion-row :last-child {\n  border-bottom: 1px solid #575151;\n  text-align: center;\n}\n.my-custom-class .popover-content {\n  background: #222;\n}\n.flex-container {\n  margin: 0 15px;\n}\n.inline {\n  width: 80px !important;\n  margin: 9px 9px 9px 0;\n}\n.small {\n  height: 20px !important;\n  line-height: 20px !important;\n}\n.sub-title {\n  color: #888;\n  font-size: 14px;\n  padding: 30px 0 18px 0;\n}\n.placeholder {\n  text-align: center;\n  height: 30px;\n  line-height: 30px;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQtdmVyYi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsd0NBQUE7QUFFQTtFQUNJLG1CQUFBO0FBQUo7QUFJQSx1RUFBQTtBQUVBO0VBQ0ksbUJBQUE7QUFGSjtBQUtBO0VBQ0ksa0JBQUE7QUFGSjtBQUdJO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQURSO0FBR0k7RUFDSSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBRFI7QUFHSTtFQUNJLCtCQUFBO0VBQ0Esa0JBQUE7QUFEUjtBQUdJO0VBQ0ksZ0NBQUE7RUFDQSxrQkFBQTtBQURSO0FBS0E7RUFDSSxnQkFBQTtBQUZKO0FBS0E7RUFDSSxjQUFBO0FBRko7QUFLQTtFQUNJLHNCQUFBO0VBQ0EscUJBQUE7QUFGSjtBQUtBO0VBQ0ksdUJBQUE7RUFDQSw0QkFBQTtBQUZKO0FBS0E7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0FBRko7QUFLQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQUZKIiwiZmlsZSI6ImVkaXQtdmVyYi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBET0VTIE5PVCBXT1JLIC0gbm90IHNwZWNpZmljIGVub3VnaCAqL1xuXG4uYWxlcnQtd3JhcHBlciB7XG4gICAgYmFja2dyb3VuZDogI2U1ZTVlNTtcbn1cblxuXG4vKiBXb3JrcyAtIHBhc3MgXCJteS1jdXN0b20tY2xhc3NcIiBpbiBjc3NDbGFzcyB0byBpbmNyZWFzZSBzcGVjaWZpY2l0eSAqL1xuXG4ubXktY3VzdG9tLWNsYXNzIC5hbGVydC13cmFwcGVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjZjFlNWU1O1xufVxuXG4ub24tZ3JpZDEge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBpb24tcm93OmZpcnN0LWNoaWxkIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDA7XG4gICAgICAgIGJvcmRlci1yaWdodDogMDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgICAub24tZ3JpZCB7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYig4NywgODEsIDgxKTtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMDtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAwO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICAgIC5pb24tY29sIDpsYXN0LWNoaWxkIHtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiKDg3LCA4MSwgODEpO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICAgIC5pb24tcm93IDpsYXN0LWNoaWxkIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYig4NywgODEsIDgxKTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbn1cblxuLm15LWN1c3RvbS1jbGFzcyAucG9wb3Zlci1jb250ZW50IHtcbiAgICBiYWNrZ3JvdW5kOiAjMjIyO1xufVxuXG4uZmxleC1jb250YWluZXIge1xuICAgIG1hcmdpbjogMCAxNXB4O1xufVxuXG4uaW5saW5lIHtcbiAgICB3aWR0aDogODBweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogOXB4IDlweCA5cHggMDtcbn1cblxuLnNtYWxsIHtcbiAgICBoZWlnaHQ6IDIwcHggIWltcG9ydGFudDtcbiAgICBsaW5lLWhlaWdodDogMjBweCAhaW1wb3J0YW50O1xufVxuXG4uc3ViLXRpdGxlIHtcbiAgICBjb2xvcjogIzg4ODtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgcGFkZGluZzogMzBweCAwIDE4cHggMDtcbn1cblxuLnBsYWNlaG9sZGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xufSJdfQ== */");

/***/ }),

/***/ 5545:
/*!************************************************************************************************************************!*\
  !*** ./src/app/pages/modulo1/gramatica/verbos/popover-conjugacao-conditional/popover-conjugacao-conditional.page.scss ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".popup-list .am-list-body {\n  height: 400px;\n  overflow: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvcG92ZXItY29uanVnYWNhby1jb25kaXRpb25hbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsY0FBQTtBQUNKIiwiZmlsZSI6InBvcG92ZXItY29uanVnYWNhby1jb25kaXRpb25hbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucG9wdXAtbGlzdCAuYW0tbGlzdC1ib2R5IHtcbiAgICBoZWlnaHQ6IDQwMHB4O1xuICAgIG92ZXJmbG93OiBhdXRvO1xufSJdfQ== */");

/***/ }),

/***/ 8579:
/*!***********************************************************************************************!*\
  !*** data:text/css;charset=utf-8;base64,ICAgIC5yZWRiIHsKICAgICAgY29sb3I6IGJyb3duOwogIH0KICA= ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("    .redb {\n      color: brown;\n  }\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNzcztjaGFyc2V0PXV0Zi04O2Jhc2U2NCxJQ0FnSUM1eVpXUmlJSHNLSUNBZ0lDQWdZMjlzYjNJNklHSnliM2R1T3dvZ0lIMEtJQ0E9Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJJQUFJO01BQ0UsWUFBWTtFQUNoQiIsImZpbGUiOiJjc3M7Y2hhcnNldD11dGYtODtiYXNlNjQsSUNBZ0lDNXlaV1JpSUhzS0lDQWdJQ0FnWTI5c2IzSTZJR0p5YjNkdU93b2dJSDBLSUNBPSIsInNvdXJjZXNDb250ZW50IjpbIiAgICAucmVkYiB7XG4gICAgICBjb2xvcjogYnJvd247XG4gIH1cbiAgIl19 */");

/***/ }),

/***/ 1042:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/modulo1/gramatica/verbos/edit-segmento-futuro/edit-segmento-futuro.page.html ***!
  \******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<WingBlank [size]=\"'lg'\">\n    <Card>\n        <CardHeader [title]=\"title\" [extra]=\"extra\" [thumb]=\"thumb\" [thumbStyle]=\"thumbStyle\">\n            <ng-template #extra>\n                <ion-icon name=\"help-circle\" (click)=\"helppresent()\"></ion-icon>\n            </ng-template>\n            <ng-template #title>\n                <small>Simple Future</small>\n            </ng-template>\n\n            <ng-template #thumb>\n                <img src=\"assets/images/futureSimple.jpg\" width=\"50\">\n\n            </ng-template>\n\n\n        </CardHeader>\n        <CardBody>\n            <Card class=\"ion-no-padding\">\n                <CardHeader [extra]=\"extra1\" [title]='title1'>\n                    <ng-template #title1>\n                        <Brief> <small *ngIf=\"translator\">eng-por</small><small *ngIf=\"!translator\">por-eng</small></Brief>\n                    </ng-template>\n                    <ng-template #extra1>\n                        <ion-icon name=\"swap-horizontal-outline\" (click)=\"invertTranslator()\" *ngIf=\"atividadeVerb.atividadesverbais.futuro.frases.status!='Concluido'\"></ion-icon>\n                        <ion-icon name=\"language-outline\" (click)=\"onTranslateafirmativo()\" *ngIf=\"atividadeVerb.atividadesverbais.futuro.frases.status!='Concluido'\"></ion-icon>\n                    </ng-template>\n                </CardHeader>\n                <CardBody class=\"ion-no-padding\">\n                    <p class=\"ion-text-justify\"><small *ngIf=\"!translator\">{{atividadeVerb.atividadesverbais.futuro.regra}}</small>\n                        <small *ngIf=\"translator\"> {{atividadeVerb.atividadesverbais.futuro.regraingles}} </small>\n\n                    </p>\n                    <div><small> {{atividadeVerb.atividadesverbais.futuro.estrutura}}</small> </div>\n                    <ion-item>\n                        <ion-textarea class=\"ion-text-justify\" [(ngModel)]=\"atividadeVerb.atividadesverbais.futuro.frases.fraseingles\" [readonly]=\"atividadeVerb.atividadesverbais.futuro.frases.status=='Concluido'\" *ngIf=\"translator\" placeholder='Enter the phrase here'></ion-textarea>\n                        <ion-textarea class=\"ion-text-justify\" *ngIf=\"!translator\" [(ngModel)]=\"atividadeVerb.atividadesverbais.futuro.frases.fraseportugues\" [readonly]=\"atividadeVerb.atividadesverbais.futuro.frases.status=='Concluido'\" placeholder=\"Digite a frase aqui\"></ion-textarea>\n                    </ion-item>\n                </CardBody>\n                <CardFooter [content]=\"footerExtra\">\n                    <ng-template #footerExtra>\n                        <p style=\"overflow-x:auto; overflow-y:auto;\"><small *ngIf=\"translator\">{{atividadeVerb.atividadesverbais.futuro.frases.fraseportugues}} </small>\n                            <small *ngIf=\"!translator\">{{atividadeVerb.atividadesverbais.futuro.frases.fraseingles}} </small></p>\n                    </ng-template>\n                </CardFooter>\n            </Card>\n\n\n\n        </CardBody>\n    </Card>\n</WingBlank>");

/***/ }),

/***/ 4162:
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/modulo1/gramatica/verbos/edit-segmento-passado/edit-segmento-passado.page.html ***!
  \********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<WingBlank [size]=\"'lg'\">\n    <Card>\n        <CardHeader [title]=\"title\" [extra]=\"extra\" [thumb]=\"thumb\" [thumbStyle]=\"thumbStyle\">\n            <ng-template #extra>\n                <ion-icon name=\"help-circle\" (click)=\"helppresent()\"></ion-icon>\n            </ng-template>\n            <ng-template #title>\n                <small>Simple Past</small>\n            </ng-template>\n\n            <ng-template #thumb>\n                <img src=\"assets/images/Passado.jpg\" width=\"50\">\n\n            </ng-template>\n\n\n        </CardHeader>\n        <CardBody>\n            <Card class=\"ion-no-padding\">\n                <CardHeader [extra]=\"extra1\" [title]='title1'>\n                    <ng-template #title1>\n                        <Brief> <small *ngIf=\"translator\">eng-por</small><small *ngIf=\"!translator\">por-eng</small></Brief>\n                    </ng-template>\n                    <ng-template #extra1>\n                        <ion-icon name=\"swap-horizontal-outline\" (click)=\"invertTranslator()\" *ngIf=\"atividadeVerb.atividadesverbais.passado.frases.status!='Concluido'\"></ion-icon>\n                        <ion-icon name=\"language-outline\" (click)=\"onTranslateafirmativo()\" *ngIf=\"atividadeVerb.atividadesverbais.passado.frases.status!='Concluido'\"></ion-icon>\n                    </ng-template>\n                </CardHeader>\n                <CardBody class=\"ion-no-padding\">\n                    <p class=\"ion-text-justify\"><small *ngIf=\"!translator\">{{atividadeVerb.atividadesverbais.passado.regra}}</small>\n                        <small *ngIf=\"translator\"> {{atividadeVerb.atividadesverbais.passado.regraingles}} </small>\n\n                    </p>\n                    <div><small> {{atividadeVerb.atividadesverbais.passado.estrutura}}</small> </div>\n                    <ion-item>\n                        <ion-textarea class=\"ion-text-justify\" [(ngModel)]=\"atividadeVerb.atividadesverbais.passado.frases.fraseingles\" [readonly]=\"atividadeVerb.atividadesverbais.passado.frases.status=='Concluido'\" *ngIf=\"translator\" placeholder='Enter the phrase here'></ion-textarea>\n                        <ion-textarea class=\"ion-text-justify\" *ngIf=\"!translator\" [(ngModel)]=\"atividadeVerb.atividadesverbais.passado.frases.fraseportugues\" [readonly]=\"atividadeVerb.atividadesverbais.passado.frases.status=='Concluido'\" placeholder=\"Digite a frase aqui\"></ion-textarea>\n                    </ion-item>\n                </CardBody>\n                <CardFooter [content]=\"footerExtra\">\n                    <ng-template #footerExtra>\n                        <p style=\"overflow-x:auto; overflow-y:auto;\"><small *ngIf=\"translator\">{{atividadeVerb.atividadesverbais.passado.frases.fraseportugues}} </small>\n                            <small *ngIf=\"!translator\">{{atividadeVerb.atividadesverbais.passado.frases.fraseingles}} </small></p>\n                    </ng-template>\n                </CardFooter>\n            </Card>\n\n\n\n        </CardBody>\n    </Card>\n</WingBlank>");

/***/ }),

/***/ 2100:
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/modulo1/gramatica/verbos/edit-segmento-presente-afirmativa/edit-segmento-presente-afirmativa.page.html ***!
  \********************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<Card class=\"ion-no-padding\">\n    <CardHeader [extra]=\"extra\" [title]='title'>\n        <ng-template #title>\n            <Brief> <small *ngIf=\"translator\">eng-por</small><small *ngIf=\"!translator\">por-eng</small></Brief>\n        </ng-template>\n        <ng-template #extra>\n            <ion-icon name=\"swap-horizontal-outline\" (click)=\"invertTranslator()\" *ngIf=\"atividadeVerb.atividadesverbais.presente.afirmativo.frases.status!='Concluido'\"></ion-icon>\n            <ion-icon name=\"language-outline\" (click)=\"onTranslateafirmativo()\" *ngIf=\"atividadeVerb.atividadesverbais.presente.afirmativo.frases.status!='Concluido'\"></ion-icon>\n        </ng-template>\n    </CardHeader>\n    <CardBody class=\"ion-no-padding\">\n        <p class=\"ion-text-justify\"><small *ngIf=\"translator\"> The present simple has the same form as the infinitive without 'to'’ for I, you, we and they. For he, she and it, we add -s or -es to the infinitive.</small>\n            <small *ngIf=\"!translator\">  O presente simples tem a mesma forma que o infinitivo sem 'para' 'para eu, você, nós e eles. Para ele, ela e isso, adicionamos -s ou -es ao infinitivo.</small>\n\n        </p>\n        <div><small> {{atividadeVerb.atividadesverbais.presente.afirmativo.estrutura}}</small> </div>\n        <ion-item>\n            <ion-textarea class=\"ion-text-justify\" [(ngModel)]=\"atividadeVerb.atividadesverbais.presente.afirmativo.frases.fraseingles\" [readonly]=\"atividadeVerb.atividadesverbais.presente.afirmativo.frases.status=='Concluido'\" *ngIf=\"translator\" placeholder='Enter the phrase here'></ion-textarea>\n            <ion-textarea class=\"ion-text-justify\" *ngIf=\"!translator\" [(ngModel)]=\"atividadeVerb.atividadesverbais.presente.afirmativo.frases.fraseportugues\" [readonly]=\"atividadeVerb.atividadesverbais.presente.afirmativo.frases.status=='Concluido'\" placeholder=\"Digite a frase aqui\"></ion-textarea>\n        </ion-item>\n    </CardBody>\n    <CardFooter [content]=\"footerExtra\">\n        <ng-template #footerExtra>\n            <p style=\"overflow-x:auto; overflow-y:auto;\"><small *ngIf=\"translator\">{{atividadeVerb.atividadesverbais.presente.afirmativo.frases.fraseportugues}} </small>\n                <small *ngIf=\"!translator\">{{atividadeVerb.atividadesverbais.presente.afirmativo.frases.fraseingles}} </small></p>\n        </ng-template>\n    </CardFooter>\n</Card>");

/***/ }),

/***/ 4310:
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/modulo1/gramatica/verbos/edit-segmento-presente-negativa/edit-segmento-presente-negativa.page.html ***!
  \****************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<Card class=\"ion-no-padding\">\n    <CardHeader [extra]=\"extra\" [title]='title'>\n        <ng-template #title>\n            <Brief> <small *ngIf=\"translator\">eng-por</small><small *ngIf=\"!translator\">por-eng</small></Brief>\n        </ng-template>\n        <ng-template #extra>\n            <ion-icon name=\"swap-horizontal-outline\" (click)=\"invertTranslator()\" *ngIf=\"atividadeVerb.atividadesverbais.presente.negativo.frases.status!='Concluido'\"></ion-icon>\n            <ion-icon name=\"language-outline\" (click)=\"onTranslatenegativo()\" *ngIf=\"atividadeVerb.atividadesverbais.presente.negativo.frases.status!='Concluido'\"></ion-icon>\n        </ng-template>\n    </CardHeader>\n    <CardBody class=\"ion-no-padding\">\n        <p class=\"ion-text-justify\"><small *ngIf=\"translator\"> The negative present simple is subject + don’t (do not) + infinitive without 'to' for I, you, we and they, and subject + doesn’t (does not) + infinitive without 'to' for he, she and it.</small>\n            <small *ngIf=\"!translator\">O presente negativo simples é sujeito + não (não) + infinitivo sem 'to' para eu, você, nós e eles, e sujeito + não (não) + infinitivo sem 'to' para ele, ela e isto.</small>\n\n        </p>\n        <div><small> {{atividadeVerb.atividadesverbais.presente.negativo.estrutura}}</small> </div>\n\n        <ion-item>\n            <ion-textarea class=\"ion-text-justify\" [(ngModel)]=\"atividadeVerb.atividadesverbais.presente.negativo.frases.fraseingles\" [readonly]=\"atividadeVerb.atividadesverbais.presente.negativo.frases.status=='Concluido'\" *ngIf=\"translator\" placeholder='Enter the phrase here'></ion-textarea>\n            <ion-textarea class=\"ion-text-justify\" *ngIf=\"!translator\" [(ngModel)]=\"atividadeVerb.atividadesverbais.presente.negativo.frases.fraseportugues\" [readonly]=\"atividadeVerb.atividadesverbais.presente.negativo.frases.status=='Concluido'\" placeholder=\"Digite a frase aqui\"></ion-textarea>\n        </ion-item>\n    </CardBody>\n    <CardFooter [content]=\"footerExtra\">\n        <ng-template #footerExtra>\n            <p style=\"overflow-x:auto; overflow-y:auto;\"><small *ngIf=\"translator\">{{atividadeVerb.atividadesverbais.presente.negativo.frases.fraseportugues}} </small>\n                <small *ngIf=\"!translator\">{{atividadeVerb.atividadesverbais.presente.negativo.frases.fraseingles}} </small></p>\n        </ng-template>\n    </CardFooter>\n</Card>");

/***/ }),

/***/ 8439:
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/modulo1/gramatica/verbos/edit-segmento-presente-question/edit-segmento-presente-question.page.html ***!
  \****************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<Card class=\"ion-no-padding\">\n    <CardHeader [extra]=\"extra\" [title]='title'>\n        <ng-template #title>\n            <Brief> <small *ngIf=\"translator\">eng-por</small><small *ngIf=\"!translator\">por-eng</small></Brief>\n        </ng-template>\n        <ng-template #extra>\n            <ion-icon name=\"swap-horizontal-outline\" (click)=\"invertTranslator()\" *ngIf=\"atividadeVerb.atividadesverbais.presente.pergunta.frases.status!='Concluido'\"></ion-icon>\n            <ion-icon name=\"language-outline\" (click)=\"onTranslatepergunta()\" *ngIf=\"atividadeVerb.atividadesverbais.presente.pergunta.frases.status!='Concluido'\"></ion-icon>\n        </ng-template>\n    </CardHeader>\n    <CardBody class=\"ion-no-padding\">\n        <p class=\"ion-text-justify\"><small *ngIf=\"translator\"> The present simple question form is do/does + subject + infinitive without ‘to’.</small>\n            <small *ngIf=\"!translator\">O presente formulário de pergunta simples é fazer / fazer + sujeito + infinitivo sem 'to'.</small>\n        </p>\n\n        <div><small> {{atividadeVerb.atividadesverbais.presente.pergunta.estrutura}}</small> </div>\n        <ion-item>\n            <ion-textarea class=\"ion-text-justify\" [(ngModel)]=\"atividadeVerb.atividadesverbais.presente.pergunta.frases.fraseingles\" [readonly]=\"atividadeVerb.atividadesverbais.presente.pergunta.frases.status=='Concluido'\" *ngIf=\"translator\" placeholder='Enter the phrase here'></ion-textarea>\n            <ion-textarea class=\"ion-text-justify\" *ngIf=\"!translator\" [(ngModel)]=\"atividadeVerb.atividadesverbais.presente.pergunta.frases.fraseportugues\" [readonly]=\"atividadeVerb.atividadesverbais.presente.pergunta.frases.status=='Concluido'\" placeholder=\"Digite a frase aqui\"></ion-textarea>\n        </ion-item>\n    </CardBody>\n    <CardFooter [content]=\"footerExtra\">\n        <ng-template #footerExtra>\n            <p style=\"overflow-x:auto; overflow-y:auto;\"><small *ngIf=\"translator\">{{atividadeVerb.atividadesverbais.presente.pergunta.frases.fraseportugues}} </small>\n                <small *ngIf=\"!translator\">{{atividadeVerb.atividadesverbais.presente.pergunta.frases.fraseingles}} </small></p>\n        </ng-template>\n    </CardFooter>\n</Card>");

/***/ }),

/***/ 2185:
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/modulo1/gramatica/verbos/edit-segmento-presente/edit-segmento-presente.page.html ***!
  \**********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<WingBlank [size]=\"'lg'\">\n    <Card>\n        <CardHeader [title]=\"'PresentSimple'\" [extra]=\"extra\" [thumb]=\"'assets/images/PresentSimple.jpg'\" [thumbStyle]=\"thumbStyle\">\n            <ng-template #extra>\n                <ion-icon name=\"help-circle\" (click)=\"helppresent()\"></ion-icon>\n            </ng-template>\n        </CardHeader>\n        <CardBody>\n            <p> A conjugação do Simple Present varia de acordo com a pessoa verbal, com a terminação do verbo e com o tipo de frase (afirmativa, negativa e interrogativa.)</p>\n\n\n\n            <ion-grid>\n                <ion-row>\n                    <ion-col size=\"12\" class=\"ion-no-padding\">\n                        <ion-segment value=\"Afirmativa\" mode='ios' [(ngModel)]=\"segmentModel\" (ionChange)=\"segmentChanged($event)\">\n                            <ion-segment-button value=\"Afirmativa\">\n                                <ion-label>Form-Positive</ion-label>\n                            </ion-segment-button>\n                            <ion-segment-button value=\"Negativa\">\n                                <ion-label>Form-Negative</ion-label>\n                            </ion-segment-button>\n                            <ion-segment-button value=\"Interrogativa\">\n                                <ion-label>Form-questions</ion-label>\n                            </ion-segment-button>\n                        </ion-segment>\n\n                        <app-edit-segmento-presente-afirmativa *ngIf=\"segmentModel==='Afirmativa'\" [atividadeVerb]='atividadeVerb'></app-edit-segmento-presente-afirmativa>\n                        <app-edit-segmento-presente-negativa *ngIf=\"segmentModel==='Negativa'\" [atividadeVerb]='atividadeVerb'></app-edit-segmento-presente-negativa>\n                        <app-edit-segmento-presente-question *ngIf=\"segmentModel==='Interrogativa'\" [atividadeVerb]='atividadeVerb'></app-edit-segmento-presente-question>\n                    </ion-col>\n                    <ion-col size=\"12\">\n\n\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n            <!-- Label only -->\n\n\n        </CardBody>\n\n    </Card>\n</WingBlank>");

/***/ }),

/***/ 7599:
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/modulo1/gramatica/verbos/edit-segmento-presentecontinuo/edit-segmento-presentecontinuo.page.html ***!
  \**************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<WingBlank [size]=\"'lg'\">\n    <Card>\n        <CardHeader [title]=\"title\" [extra]=\"extra\" [thumb]=\"thumb\" [thumbStyle]=\"thumbStyle\">\n            <ng-template #extra>\n                <ion-icon name=\"help-circle\" (click)=\"helppresent()\"></ion-icon>\n            </ng-template>\n            <ng-template #title>\n                <small>Present Continuous</small>\n            </ng-template>\n\n            <ng-template #thumb>\n                <img src=\"assets/images/Presentcontinuo.jpg\" width=\"50\">\n\n            </ng-template>\n\n\n        </CardHeader>\n        <CardBody>\n            <Card class=\"ion-no-padding\">\n                <CardHeader [extra]=\"extra1\" [title]='title1'>\n                    <ng-template #title1>\n                        <Brief> <small *ngIf=\"translator\">eng-por</small><small *ngIf=\"!translator\">por-eng</small></Brief>\n                    </ng-template>\n                    <ng-template #extra1>\n                        <ion-icon name=\"swap-horizontal-outline\" (click)=\"invertTranslator()\" *ngIf=\"atividadeVerb.atividadesverbais.presentecontinuo.frases.status!='Concluido'\"></ion-icon>\n                        <ion-icon name=\"language-outline\" (click)=\"onTranslateafirmativo()\" *ngIf=\"atividadeVerb.atividadesverbais.presentecontinuo.frases.status!='Concluido'\"></ion-icon>\n                    </ng-template>\n                </CardHeader>\n                <CardBody class=\"ion-no-padding\">\n                    <p class=\"ion-text-justify\"><small *ngIf=\"translator\">Subject + verb to be + verb with “ing” + complement, For the negative form, just add the “not” after the verb “to be” (am, is are).</small>\n                        <small *ngIf=\"!translator\">Sujeito + verbo to be + verbo com “ing” + complemento, Para a forma negativa, basta acrescentar o “not” após o verbo “to be” (am, is are).</small>\n\n                    </p>\n                    <div><small> {{atividadeVerb.atividadesverbais.presentecontinuo.estrutura}}</small> </div>\n                    <ion-item>\n                        <ion-textarea class=\"ion-text-justify\" [(ngModel)]=\"atividadeVerb.atividadesverbais.presentecontinuo.frases.fraseingles\" [readonly]=\"atividadeVerb.atividadesverbais.presentecontinuo.frases.status=='Concluido'\" *ngIf=\"translator\" placeholder='Enter the phrase here'></ion-textarea>\n                        <ion-textarea class=\"ion-text-justify\" *ngIf=\"!translator\" [(ngModel)]=\"atividadeVerb.atividadesverbais.presentecontinuo.frases.fraseportugues\" [readonly]=\"atividadeVerb.atividadesverbais.presentecontinuo.frases.status=='Concluido'\" placeholder=\"Digite a frase aqui\"></ion-textarea>\n                    </ion-item>\n                </CardBody>\n                <CardFooter [content]=\"footerExtra\">\n                    <ng-template #footerExtra>\n                        <p style=\"overflow-x:auto; overflow-y:auto;\"><small *ngIf=\"translator\">{{atividadeVerb.atividadesverbais.presentecontinuo.frases.fraseportugues}} </small>\n                            <small *ngIf=\"!translator\">{{atividadeVerb.atividadesverbais.presentecontinuo.frases.fraseingles}} </small></p>\n                    </ng-template>\n                </CardFooter>\n            </Card>\n\n\n\n        </CardBody>\n    </Card>\n</WingBlank>");

/***/ }),

/***/ 2669:
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/modulo1/gramatica/verbos/edit-verb/edit-verb.page.html ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<Navbar [icon]=\"icon\" [rightContent]=\"rightContent\" [mode]=\"'ios'\" (onLeftClick)=\"onLeftClick()\" color=\"primary\" *ngIf=\"!isloading\">\n    {{atividadeVerb.palavraingles}} / {{atividadeVerb.palavratraduzida}}\n</Navbar>\n\n\n<ng-template #icon>\n    <ion-icon name=\"arrow-back-outline\"></ion-icon>\n</ng-template>\n\n<ng-template #rightContent>\n    <ion-icon name=\"save-outline\" [ngStyle]=\"{ marginRight: '16px' }\" (click)=\"save()\"></ion-icon>\n    <ion-icon name=\"create-outline\" (click)=\"finalizar()\"></ion-icon>\n</ng-template>\n\n<ion-content *ngIf=\"!isloading\">\n    <ion-grid [ngClass]=\"{'on-grid1': true}\">\n        <ion-row>\n            <ion-col sizeSm=\"4\" [ngClass]=\"{'on-col1': true}\">\n                <Brief style=\"color: rgb(122, 133, 129);\">{{atividadeVerb.verb.root.conjugated_forms[0][0]}}</Brief>\n                <Brief>{{atividadeVerb.verb.root.conjugated_forms[0][1]}} </Brief>\n            </ion-col>\n            <ion-col sizeSm=\"4\" [ngClass]=\"{'on-col1': true}\">\n                <Brief style=\"color: rgb(133, 122, 122);\">{{atividadeVerb.verb.root.conjugated_forms[1][0]}}</Brief>\n                <Brief>{{atividadeVerb.verb.root.conjugated_forms[1][1]}} </Brief>\n            </ion-col>\n            <ion-col sizeSm=\"4\" [ngClass]=\"{'on-col1': true}\">\n                <Brief style=\"color: rgb(133, 122, 122);\">{{atividadeVerb.verb.root.conjugated_forms[2][0]}}</Brief>\n                <Brief>{{atividadeVerb.verb.root.conjugated_forms[2][1]}} </Brief>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col size=\"12\">\n                <Flex class=\"ion-padding-start ion-padding-end\" style=\"font-weight: bold;\">\n                    <FlexItem>\n                        <div Button [size]=\"'small'\" [type]=\"'warning'\" (click)=\"presentPopovercondicional($event)\">Condicional</div>\n                    </FlexItem>\n                    <FlexItem>\n                        <div Button [size]=\"'small'\" [type]=\"'warning'\" (click)=\"presentPopoverindicative($event)\">Indicative</div>\n                    </FlexItem>\n                    <FlexItem>\n                        <div Button [type]=\"'warning'\" [size]=\"'small'\" (click)=\"presentPopoverpassive($event)\">Passive</div>\n                    </FlexItem>\n                </Flex>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col size=\"12\">\n                <SegmentedControl [tintColor]=\"'rgb(96, 151, 133)'\" [values]=\"listasegmento\" (onChange)=\"choose($event)\"></SegmentedControl>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n    <app-edit-segmento-presente *ngIf=\"tempoverbal=='Presente'\" [atividadeVerb]='atividadeVerb'></app-edit-segmento-presente>\n    <app-edit-segmento-presentecontinuo *ngIf=\"tempoverbal=='Presente Continuo'\" [atividadeVerb]='atividadeVerb'></app-edit-segmento-presentecontinuo>\n    <app-edit-segmento-passado *ngIf=\"tempoverbal=='Passado'\" [atividadeVerb]='atividadeVerb' [rulers]='rulers'></app-edit-segmento-passado>\n    <app-edit-segmento-futuro *ngIf=\"tempoverbal=='Futuro'\" [atividadeVerb]='atividadeVerb' [rulers]='rulers'></app-edit-segmento-futuro>\n</ion-content>");

/***/ }),

/***/ 4069:
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/modulo1/gramatica/verbos/popover-conjugacao-conditional/popover-conjugacao-conditional.page.html ***!
  \**************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<List [className]=\"'my-list'\" class=\"ion-no-padding\" style=\" overflow-x:auto;height:100%; overflow-y:auto;\">\n\n    <ListItem [align]=\"'top'\" multipleLine [arrow]=\"'horizontal'\" (onClick)=\"presentModal(item)\" *ngFor=\"let item of conjugacao; let i=index\">\n        <Brief style=\"font-size: 70%;\">{{item.heading}} </Brief>\n    </ListItem>\n</List>\n<WhiteSpace></WhiteSpace>\n\n<Modal [(ngModel)]=\"this.state\" [popup]=\"true\" [animationType]=\"'slide-up'\" (onClose)=\"dismiss()\" style=\" overflow-x:auto;height:200px; overflow-y:auto;\">\n\n    <List [renderHeader]=\"conditional.heading\" [className]=\"'popup-list'\">\n\n        <ListItem *ngFor=\"let form of conditional.forms\"> <label style=\"color: brown;\">{{form[0]}} </label> {{form[1]}}</ListItem>\n        <ListItem>\n            <div Button [type]=\"'primary'\" (onClick)=\"dismiss()\">close</div>\n        </ListItem>\n    </List>\n</Modal>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_modulo1_gramatica_verbos_edit-verb_edit-verb_module_ts.js.map