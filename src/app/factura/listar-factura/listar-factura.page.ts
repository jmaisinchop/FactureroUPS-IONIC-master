import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { FacturaService } from 'src/app/api/factura.service';
import { FacturaCabecera } from 'src/app/entidades';

@Component({
  selector: 'app-listar-factura',
  templateUrl: './listar-factura.page.html',
  styleUrls: ['./listar-factura.page.scss'],
})
export class ListarFacturaPage implements OnInit {
  factC: any[] = []
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
      

      });
  }

  eliminarDet(){
    localStorage.removeItem("det")
  }

}
