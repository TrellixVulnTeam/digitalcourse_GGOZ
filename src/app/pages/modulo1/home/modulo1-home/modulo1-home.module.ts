import { NgZorroAntdMobileModule } from 'ng-zorro-antd-mobile';
import { HomeGramaticaVerboPage } from './../gramatica/home-gramatica-verbo/home-gramatica-verbo.page';
import { HomeGramaticaPage } from './../gramatica/home-gramatica/home-gramatica.page'; 
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Modulo1HomePageRoutingModule } from './modulo1-home-routing.module';

import { Modulo1HomePage } from './modulo1-home.page';
import { HttpClientModule } from '@angular/common/http'; 

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Modulo1HomePageRoutingModule,
    HttpClientModule,
    ReactiveFormsModule, 
    NgZorroAntdMobileModule  ,
    
  ],
  declarations: [
    Modulo1HomePage,
    HomeGramaticaPage,
    HomeGramaticaVerboPage
  ]
})
export class Modulo1HomePageModule { }
