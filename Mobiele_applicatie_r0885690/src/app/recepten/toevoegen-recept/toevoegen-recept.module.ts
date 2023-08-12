import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ToevoegenReceptPageRoutingModule } from './toevoegen-recept-routing.module';

import { ToevoegenReceptPage } from './toevoegen-recept.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ToevoegenReceptPageRoutingModule
  ],
  declarations: [ToevoegenReceptPage]
})
export class ToevoegenReceptPageModule {}
