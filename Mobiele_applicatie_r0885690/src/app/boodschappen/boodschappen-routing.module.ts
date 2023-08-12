import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BoodschappenPage } from './boodschappen.page';

const routes: Routes = [
  {
    path: '',
    component: BoodschappenPage
  },
  {
    path: 'toevoegen-boodschap',
    loadChildren: () => import('./toevoegen-boodschap/toevoegen-boodschap.module').then( m => m.ToevoegenBoodschapPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BoodschappenPageRoutingModule {}
