import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReceptenPage } from './recepten.page';

const routes: Routes = [
  {
    path: '',
    component: ReceptenPage
  },
  {
    path: 'toevoegen-recept',
    loadChildren: () => import('./toevoegen-recept/toevoegen-recept.module').then( m => m.ToevoegenReceptPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReceptenPageRoutingModule {}
