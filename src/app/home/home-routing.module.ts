import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../account/auth.guard';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    canActivate:[AuthGuard],
    children:[
      {
        path: 'home',
        loadChildren: () => import('./../pages/home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'modulo1-home',
        loadChildren: () => import('./../pages/modulo1/home/modulo1-home/modulo1-home.module').then( m => m.Modulo1HomePageModule)
      },
      {
        path: 'settings',
        loadChildren: () => import('./../pages/settings/settings.module').then( m => m.SettingsPageModule)
      },
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
