import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ToevoegenDagboekPage } from './toevoegen-dagboek.page';

const routes: Routes = [
  {
    path: '',
    component: ToevoegenDagboekPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToevoegenDagboekPageRoutingModule {}
