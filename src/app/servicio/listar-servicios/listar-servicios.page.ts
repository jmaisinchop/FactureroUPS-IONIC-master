import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ServiciosService } from 'src/app/api/servicios.service';
import { Servicio } from 'src/app/entidades';

@Component({
  selector: 'app-listar-servicios',
  templateUrl: './listar-servicios.page.html',
  styleUrls: ['./listar-servicios.page.scss'],
})
export class ListarServiciosPage implements OnInit {

  servicioT: Servicio[] = []
  suscription: Subscription;

  constructor(
    private servicioService: ServiciosService,
    private router: Router
  ) { }

  ngOnInit() {
    this.cargarCliente();
    this.suscription=this.servicioService.refresh$.subscribe(()=>{
      this.cargarCliente();
    })
  }
  userRev(){
    return localStorage.getItem("username")
  }

  cargarCliente(){
    
    this.servicioService.listarAllServicio(+localStorage.getItem("id-username"))
      .subscribe(servicios => {
        this.servicioT = servicios
       // console.log(this.servicioT)

      });
  }

  actualizar(servicio: Servicio){
    localStorage.setItem("idServicio",servicio.id.toString());
    this.router.navigate(["update-servicios"]);

    
  }

  deleteServicio(cliente: Servicio){
    this.servicioService.deleteServicio(cliente.id).subscribe(
      
      
      
    )
    
  }

}
