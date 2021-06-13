import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Modulo1HomePage } from './modulo1-home.page';

const routes: Routes = [
  {
    path: '',
    component: Modulo1HomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Modulo1HomePageRoutingModule {}
