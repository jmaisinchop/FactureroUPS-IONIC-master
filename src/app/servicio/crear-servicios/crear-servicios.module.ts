import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearServiciosPageRoutingModule } from './crear-servicios-routing.module';

import { CrearServiciosPage } from './crear-servicios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CrearServiciosPageRoutingModule
  ],
  declarations: [CrearServiciosPage]
})
export class CrearServiciosPageModule { }
