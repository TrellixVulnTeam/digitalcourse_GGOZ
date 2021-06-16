import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Modulo2HomePage } from './modulo2-home.page';

const routes: Routes = [
  {
    path: '',
    component: Modulo2HomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Modulo2HomePageRoutingModule {}
