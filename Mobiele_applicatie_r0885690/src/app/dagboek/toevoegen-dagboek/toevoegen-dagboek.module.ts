import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ToevoegenDagboekPageRoutingModule } from './toevoegen-dagboek-routing.module';

import { ToevoegenDagboekPage } from './toevoegen-dagboek.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ToevoegenDagboekPageRoutingModule
  ],
  declarations: [ToevoegenDagboekPage]
})
export class ToevoegenDagboekPageModule {}
