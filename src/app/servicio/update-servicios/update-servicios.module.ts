import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateServiciosPageRoutingModule } from './update-servicios-routing.module';

import { UpdateServiciosPage } from './update-servicios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    UpdateServiciosPageRoutingModule
  ],
  declarations: [UpdateServiciosPage]
})
export class UpdateServiciosPageModule {}
