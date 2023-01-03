import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { ClientsService } from 'src/app/api/clients.service';
import { ServiciosService } from 'src/app/api/servicios.service';
import { Cliente, Detalles, Servicio } from 'src/app/entidades';

@Component({
  selector: 'app-crear-factura',
  templateUrl: './crear-factura.page.html',
  styleUrls: ['./crear-factura.page.scss'],
})
export class CrearFacturaPage implements OnInit {

  servicioT: Servicio[] = []
  dettalle: Detalles = new Detalles();
  detalles: Detalles[] = [];
  subtotal: number;
  total: number
  totalF: number
  impuesto: number

  det = [];
  suscription: Subscription;
  cliente: Cliente = new Cliente();
  servicio: Servicio = new Servicio();

  constructor(
    private servicioService: ServiciosService,
    private toastController: ToastController,
    private clienteService: ClientsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.cargarCliente();
  }

  cargarCliente() {

    this.servicioService.listarAllServicio(+localStorage.getItem("id-username"))
      .subscribe(servicios => {
        this.servicioT = servicios


      });
  }

  buscarClienteIdentificacion(identificacion: string) {
    this.clienteService.getClienteIdentificacion(identificacion).subscribe(
      (data) => {
        this.cliente = data;
        console.log(this.cliente)
        this.mostrarMensaje('Cliente Encontrado')
      }, (error) => {
        this.mostrarMensaje(error.error)

      }
    )

  }

  agregarDetalles(precio: number, idServicio: number, cantidad1: number) {


    this.total = precio * cantidad1;
    this.total.toFixed(2);
    this.det.push(
      {
        "cantidad": cantidad1,
        "precioUnitario": precio,
        "total": this.total,
        "servicioId": idServicio

      }
        

    )

    this.subtotal = +localStorage.getItem("subtotal")
    console.log(localStorage.getItem("subtotal"))

    this.subtotal = (this.total + this.subtotal);
    this.impuesto=(this.subtotal*0.12);
    this.totalF=this.impuesto+this.subtotal
    this.subtotal.toFixed(2);
    this.totalF.toFixed(2);
    this.impuesto.toFixed(2)
  



   

  }
 

  async mostrarMensaje(mensaje: any) {
    const toast = await this.toastController.create({
      position: 'top',
      message: mensaje,
      duration: 1500
    });
    toast.present();
  }

}






