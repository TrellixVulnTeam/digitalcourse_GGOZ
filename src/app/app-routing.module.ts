import { AuthGuard } from './account/auth.guard';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  }, {
    path: 'home',
    canActivate: [AuthGuard],
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  }, {
    path: 'edit-verb/:id',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/modulo1/gramatica/verbos/edit-verb/edit-verb.module').then(m => m.EditVerbPageModule)
  },

  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
  }, 
  {
    path: 'list-verb',
    loadChildren: () => import('./pages/modulo1/gramatica/verbos/list-verb/list-verb.module').then( m => m.ListVerbPageModule)
  },   {
    path: 'home-gramatica-adv-frequency',
    loadChildren: () => import('./pages/modulo1/home/gramatica/home-gramatica-adv-frequency/home-gramatica-adv-frequency.module').then( m => m.HomeGramaticaAdvFrequencyPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then( m => m.SignupPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
