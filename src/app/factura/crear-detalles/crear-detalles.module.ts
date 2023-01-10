import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearDetallesPageRoutingModule } from './crear-detalles-routing.module';

import { CrearDetallesPage } from './crear-detalles.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    CrearDetallesPageRoutingModule
  ],
  declarations: [CrearDetallesPage]
})
export class CrearDetallesPageModule {}
