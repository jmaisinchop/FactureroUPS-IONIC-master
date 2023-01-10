import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearDetallesPage } from './crear-detalles.page';

const routes: Routes = [
 
  {
    path: '',
    component: CrearDetallesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrearDetallesPageRoutingModule {}
