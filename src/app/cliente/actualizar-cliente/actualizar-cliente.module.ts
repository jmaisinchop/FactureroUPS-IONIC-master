import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActualizarClientePageRoutingModule } from './actualizar-cliente-routing.module';

import { ActualizarClientePage } from './actualizar-cliente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ActualizarClientePageRoutingModule
  ],
  declarations: [ActualizarClientePage]
})
export class ActualizarClientePageModule {}
