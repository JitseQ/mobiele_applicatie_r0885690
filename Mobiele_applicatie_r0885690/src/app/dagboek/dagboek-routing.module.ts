import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DagboekPage } from './dagboek.page';

const routes: Routes = [
  {
    path: '',
    component: DagboekPage
  },
  {
    path: 'toevoegen-dagboek',
    loadChildren: () => import('./toevoegen-dagboek/toevoegen-dagboek.module').then( m => m.ToevoegenDagboekPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DagboekPageRoutingModule {}
