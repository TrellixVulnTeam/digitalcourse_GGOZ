import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Modulo2ChatPage } from './modulo2-chat.page';

const routes: Routes = [
  {
    path: '',
    component: Modulo2ChatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Modulo2ChatPageRoutingModule {}
