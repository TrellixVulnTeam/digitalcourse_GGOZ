import { EditSegmentoFuturoPage } from './../edit-segmento-futuro/edit-segmento-futuro.page';
import { EditSegmentoPresentecontinuoPage } from './../edit-segmento-presentecontinuo/edit-segmento-presentecontinuo.page';
import { EditSegmentoPresenteQuestionPage } from './../edit-segmento-presente-question/edit-segmento-presente-question.page';
 import { PopoverConjugacaoConditionalPage } from './../popover-conjugacao-conditional/popover-conjugacao-conditional.page';
 import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditVerbPageRoutingModule } from './edit-verb-routing.module';

import { EditVerbPage } from './edit-verb.page';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdMobileModule } from 'ng-zorro-antd-mobile'; 
import { EditSegmentoPresentePage } from '../edit-segmento-presente/edit-segmento-presente.page';
import { EditSegmentoPresenteAfirmativaPage } from '../edit-segmento-presente-afirmativa/edit-segmento-presente-afirmativa.page';
import { EditSegmentoPresenteNegativaPage } from '../edit-segmento-presente-negativa/edit-segmento-presente-negativa.page';
import { EditSegmentoPassadoPage } from '../edit-segmento-passado/edit-segmento-passado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditVerbPageRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgZorroAntdMobileModule,
  ],
  declarations: [
    EditVerbPage, 
    PopoverConjugacaoConditionalPage, 
    EditSegmentoPresentePage,
    EditSegmentoPresenteAfirmativaPage,
    EditSegmentoPresenteNegativaPage,
    EditSegmentoPresenteQuestionPage,
    EditSegmentoPresentecontinuoPage,
    EditSegmentoPassadoPage,
    EditSegmentoFuturoPage
    ]
})
export class EditVerbPageModule { }
