import { NgZorroAntdMobileModule } from 'ng-zorro-antd-mobile';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Modulo2ChatPageRoutingModule } from './modulo2-chat-routing.module';

import { Modulo2ChatPage } from './modulo2-chat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Modulo2ChatPageRoutingModule,
    ReactiveFormsModule,
    NgZorroAntdMobileModule
  ],
  declarations: [Modulo2ChatPage]
})
export class Modulo2ChatPageModule {}
