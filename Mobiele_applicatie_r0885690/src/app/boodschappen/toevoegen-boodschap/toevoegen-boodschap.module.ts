import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ToevoegenBoodschapPageRoutingModule } from './toevoegen-boodschap-routing.module';

import { ToevoegenBoodschapPage } from './toevoegen-boodschap.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ToevoegenBoodschapPageRoutingModule
  ],
  declarations: [ToevoegenBoodschapPage]
})
export class ToevoegenBoodschapPageModule {}
