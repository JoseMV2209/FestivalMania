import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FestivalPageRoutingModule } from './festival-routing.module';

import { FestivalPage } from './festival.page';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FestivalPageRoutingModule,
    ComponentsModule
  ],
  declarations: [FestivalPage]
})
export class FestivalPageModule {}
