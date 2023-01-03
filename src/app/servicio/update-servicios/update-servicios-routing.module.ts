import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateServiciosPage } from './update-servicios.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateServiciosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateServiciosPageRoutingModule {}
