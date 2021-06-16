import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SentencasHomePageRoutingModule } from './sentencas-home-routing.module';

import { SentencasHomePage } from './sentencas-home.page';
import { NgZorroAntdMobileModule } from 'ng-zorro-antd-mobile';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SentencasHomePageRoutingModule,
    ReactiveFormsModule,
    NgZorroAntdMobileModule
  ],
  declarations: [SentencasHomePage]
})
export class SentencasHomePageModule {}
