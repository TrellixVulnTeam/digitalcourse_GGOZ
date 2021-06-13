import { ErrorInterceptor } from './../account/error-interceptor.service';
import { AppComponent } from './../app.component';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page'; 
import { StorageService } from '../services/storage.service';
import { AuthInterceptor } from '../account/auth-interceptor.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    HttpClientModule, ReactiveFormsModule,
  ],
  declarations: [HomePage],
  providers: [ 
    StorageService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

  ]
  , schemas:   [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class HomePageModule { }
