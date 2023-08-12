import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'recepten',
    pathMatch: 'full'
  },
  {
    path: 'boodschappen',
    loadChildren: () => import('./boodschappen/boodschappen.module').then( m => m.BoodschappenPageModule)
  },
  {
    path: 'dagboek',
    loadChildren: () => import('./dagboek/dagboek.module').then( m => m.DagboekPageModule)
  },
  {
    path: 'recepten',
    loadChildren: () => import('./recepten/recepten.module').then( m => m.ReceptenPageModule)
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
