import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarFacturaPage } from './listar-factura.page';

const routes: Routes = [
  {
    path: '',
    component: ListarFacturaPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../../tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../../tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../../tab3/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: '',
        redirectTo: 'tab1',
        pathMatch: 'full'
      },
      {
        path: 'crear-factura',
        loadChildren: () => import('../crear-factura/crear-factura.module').then(m => m.CrearFacturaPageModule)
      }
      
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListarFacturaPageRoutingModule {}
