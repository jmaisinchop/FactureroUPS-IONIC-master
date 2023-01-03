import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearServiciosPage } from './crear-servicios.page';

const routes: Routes = [
  {
    path: '',
    component: CrearServiciosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrearServiciosPageRoutingModule {}
