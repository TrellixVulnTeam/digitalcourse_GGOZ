import { StorageService } from './../../services/storage.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorInterceptor } from './../../account/error-interceptor.service';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular'; 

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { AuthInterceptor } from 'src/app/account/auth-interceptor.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage],
  providers: [ 
    StorageService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

  ]
  , schemas:   [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomePageModule {}
