import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { FacturaService } from '../api/factura.service';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page implements OnInit {
  factC: any[] = []

  suscription: Subscription;
  constructor(
    private facturaService: FacturaService,
    private router: Router
  ) { }

  ngOnInit() {
    this.cargarCliente();
    this.suscription = this.facturaService.refresh$.subscribe(() => {
      this.cargarCliente();
    })

  }

  cargarCliente() {

    this.facturaService.listarAllServicioEmitidos(+localStorage.getItem("id-username"))
      .subscribe(servicios => {
        this.factC = servicios
        console.log(this.factC)

      });
  }
}






