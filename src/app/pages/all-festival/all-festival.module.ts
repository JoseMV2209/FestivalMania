import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllFestivalPageRoutingModule } from './all-festival-routing.module';

import { AllFestivalPage } from './all-festival.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllFestivalPageRoutingModule,
    ComponentsModule
  ],
  declarations: [AllFestivalPage]
})
export class AllFestivalPageModule {}
