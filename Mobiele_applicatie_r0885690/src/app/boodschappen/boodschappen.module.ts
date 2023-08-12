import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BoodschappenPageRoutingModule } from './boodschappen-routing.module';

import { BoodschappenPage } from './boodschappen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BoodschappenPageRoutingModule
  ],
  declarations: [BoodschappenPage]
})
export class BoodschappenPageModule {}
