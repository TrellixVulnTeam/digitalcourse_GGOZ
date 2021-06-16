import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Modulo2HomePageRoutingModule } from './modulo2-home-routing.module';

import { Modulo2HomePage } from './modulo2-home.page';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdMobileModule } from 'ng-zorro-antd-mobile';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Modulo2HomePageRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgZorroAntdMobileModule,
  ],
  declarations: [
    Modulo2HomePage,]
})
export class Modulo2HomePageModule {}
