import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SentencasHomePage } from './sentencas-home.page';

const routes: Routes = [
  {
    path: '',
    component: SentencasHomePage
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SentencasHomePageRoutingModule {}
