import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DagboekPageRoutingModule } from './dagboek-routing.module';

import { DagboekPage } from './dagboek.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DagboekPageRoutingModule
  ],
  declarations: [DagboekPage]
})
export class DagboekPageModule {}
