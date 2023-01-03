import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { IngresadoGuard } from './ingresado.guard';
import { NoIngresadoGuard } from './no-ingresado.guard';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule),
    canActivate:[NoIngresadoGuard]
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule),

  
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule),
    canActivate:[IngresadoGuard]
  },

  {
    path: 'actualizar-cliente',
    loadChildren: () => import('./cliente/actualizar-cliente/actualizar-cliente.module').then( m => m.ActualizarClientePageModule)
  },
  {
    path: 'registrar-cliente',
    loadChildren: () => import('./cliente/registrar-cliente/registrar-cliente.module').then( m => m.RegistrarClientePageModule)
  },
  {
    path: 'listar-cliente',
    loadChildren: () => import('./cliente/listar-cliente/listar-cliente.module').then( m => m.ListarClientePageModule)
  },
  {
    path: 'listar-servicios',
    loadChildren: () => import('./servicio/listar-servicios/listar-servicios.module').then( m => m.ListarServiciosPageModule)
  },
  {
    path: 'crear-servicios',
    loadChildren: () => import('./servicio/crear-servicios/crear-servicios.module').then( m => m.CrearServiciosPageModule)
  },
  {
    path: 'update-servicios',
    loadChildren: () => import('./servicio/update-servicios/update-servicios.module').then( m => m.UpdateServiciosPageModule)
  },
  {
    path: 'listar-factura',
    loadChildren: () => import('./factura/listar-factura/listar-factura.module').then( m => m.ListarFacturaPageModule)
  },
  {
    path: 'tab1',
    loadChildren: () => import('./tab1/tab1.module').then( m => m.Tab1PageModule)
  },
  {
    path: 'tab2',
    loadChildren: () => import('./tab2/tab2.module').then( m => m.Tab2PageModule)
  },
  {
    path: 'tab3',
    loadChildren: () => import('./tab3/tab3.module').then( m => m.Tab3PageModule)
  },
  {
    path: 'crear-factura',
    loadChildren: () => import('./factura/crear-factura/crear-factura.module').then( m => m.CrearFacturaPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
