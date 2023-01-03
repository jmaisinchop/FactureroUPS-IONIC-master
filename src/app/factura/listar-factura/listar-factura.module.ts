import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarFacturaPageRoutingModule } from './listar-factura-routing.module';

import { ListarFacturaPage } from './listar-factura.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarFacturaPageRoutingModule
  ],
  declarations: [ListarFacturaPage]
})
export class ListarFacturaPageModule {}
