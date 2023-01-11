import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { FacturaService } from '../api/factura.service';
import { FacturaCabecera } from '../entidades';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  isModalOpen = false;
  factC: any[] = []
  factCTo: any[] = []
  suscription: Subscription;
  constructor(

    private facturaService: FacturaService,
    private router: Router) { }

  ngOnInit() {
    this.cargarCliente();
    this.suscription = this.facturaService.refresh$.subscribe(() => {
      this.cargarCliente();
    })
  }

  cargarCliente() {

    this.facturaService.listarAllServicio(+localStorage.getItem("id-username"))
      .subscribe(servicios => {
        this.factC = servicios
        console.log(this.factC)

      });
  }
  setOpen(isOpen: boolean, factt: any[]) {
    document.getElementById("modal1").removeChild
    this.isModalOpen = isOpen;
   this.factCTo=factt
   console.log(this.factCTo)
  }

  deleteFac(id: number){
    this.facturaService.deleteFac(id).subscribe(
      
      
      
    )
    
  }

  ir(){
    this.router.navigate(['../crear-detalles'])
  }


}
