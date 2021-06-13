import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListVerbPage } from './list-verb.page';

const routes: Routes = [
  {
    path: '',
    component: ListVerbPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListVerbPageRoutingModule {}
