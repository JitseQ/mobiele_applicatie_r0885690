import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ToevoegenBoodschapPage } from './toevoegen-boodschap.page';

const routes: Routes = [
  {
    path: '',
    component: ToevoegenBoodschapPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToevoegenBoodschapPageRoutingModule {}
