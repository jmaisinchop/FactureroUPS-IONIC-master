import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { FacturaService } from '../api/factura.service';

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
})
export class Tab3Page implements OnInit {
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

    this.facturaService.listarAllServicioAnuladas(+localStorage.getItem("id-username"))
      .subscribe(servicios => {
        this.factC = servicios
        console.log(this.factC)

      });
  }
}
