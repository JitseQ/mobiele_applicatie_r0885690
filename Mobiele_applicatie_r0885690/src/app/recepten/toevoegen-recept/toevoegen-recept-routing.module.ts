import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ToevoegenReceptPage } from './toevoegen-recept.page';

const routes: Routes = [
  {
    path: '',
    component: ToevoegenReceptPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToevoegenReceptPageRoutingModule {}
