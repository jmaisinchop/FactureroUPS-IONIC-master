import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { ClientsService } from 'src/app/api/clients.service';
import { FacturaService } from 'src/app/api/factura.service';
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
  detalles: Detalles[] = JSON.parse(localStorage.getItem("det"));
  detalles1: any[] = JSON.parse(localStorage.getItem("det"));
  subtotal: number = +localStorage.getItem("subtotal");
  total: number
  totalF: number = +localStorage.getItem("totalfinal");
  impuesto: number = +localStorage.getItem("iva");

  det = [];
  suscription: Subscription;
  cliente: Cliente = new Cliente();
  servicio: Servicio = new Servicio();
  date=new Date()
  facturaRegisterForm: FormGroup = this.fb.group({
    'fechaDeEmision': this.date.getFullYear()+"-0"+(this.date.getMonth() + 1)+"-"+this.date.getDate(),
    "subtotal": localStorage.getItem("subtotal"),
    "impuesto": localStorage.getItem("iva"),
    "total": localStorage.getItem("totalfinal"),
    "clienteId": ['', [Validators.required]],
    'usuarioId': localStorage.getItem("id-username"),
    "detalles": [JSON.parse(localStorage.getItem("det"))]


  });



  constructor(
    private servicioService: ServiciosService,
    private facturaService: FacturaService,
    private toastController: ToastController,
    private clienteService: ClientsService,
    private router: Router,

    private fb: FormBuilder,

  ) { }

  ngOnInit() {
    let date = new Date().toLocaleDateString();
    console.log(date)
    localStorage.setItem("date",date)
    


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


  cargarfactura() {
    if (!this.facturaRegisterForm.valid) {
      return false;
    } else {

      this.facturaService.register(this.facturaRegisterForm.value)
        .subscribe(
          (data) => {
            console.log('hola', data)


            this.facturaRegisterForm.reset();
            localStorage.removeItem("subtotal")
            localStorage.removeItem("totalfinal")
            localStorage.removeItem("iva")
            localStorage.removeItem("det"),
              this.mostrarMensaje('Factura Creada exitosamente');
            this.det.pop()
            this.router.navigate(['listar-factura']);
          },
          (error) => {
            //console.log('Ocurrio un error', error.error)
            this.mostrarMensaje(error.error)
          }
        );
      return true;
    }

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






