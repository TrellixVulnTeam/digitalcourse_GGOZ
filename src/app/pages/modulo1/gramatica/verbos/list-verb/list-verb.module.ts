import { ListVerbConcluidosPage } from './../list-verb-concluidos/list-verb-concluidos.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListVerbPageRoutingModule } from './list-verb-routing.module';

import { ListVerbPage } from './list-verb.page';
import { NgZorroAntdMobileModule } from 'ng-zorro-antd-mobile';
import { ListVerbAbertoPage } from '../list-verb-aberto/list-verb-aberto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListVerbPageRoutingModule,
    ReactiveFormsModule,
    NgZorroAntdMobileModule
  ],
  declarations: [
    ListVerbPage,
    ListVerbAbertoPage,
    ListVerbConcluidosPage,
  ]
})
export class ListVerbPageModule { }
