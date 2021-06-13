import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeGramaticaAdvFrequencyPage } from './home-gramatica-adv-frequency.page';

const routes: Routes = [
  {
    path: '',
    component: HomeGramaticaAdvFrequencyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeGramaticaAdvFrequencyPageRoutingModule {}
