import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Console } from 'console';
import { ServiciosService } from 'src/app/api/servicios.service';
import { Servicio } from 'src/app/entidades';

@Component({
  selector: 'app-update-servicios',
  templateUrl: './update-servicios.page.html',
  styleUrls: ['./update-servicios.page.scss'],
})
export class UpdateServiciosPage implements OnInit {
  servicioActualizarForm: FormGroup = this.fb.group({
    'id': [localStorage.getItem("idServicio")],
    'descripcion': ['', [Validators.required]],
    'precioUnitario': ['', [Validators.required]]

  });
  servicio: Servicio = new Servicio();

  constructor(
    private fb: FormBuilder,

    private toastController: ToastController,
    private servicioService: ServiciosService,
    private router: Router
  ) { }

  ngOnInit() {
    this.cargarServicio();
  }

  cargarServicio() {
    let idS = localStorage.getItem("idServicio");
    let idU = localStorage.getItem("id-username");
    this.servicioService.listarAllServicio(+idU).subscribe(data => {

      console.log(data.find(x => x.id === (+idS)));
      this.servicio=data.find(x => x.id === (+idS));
    })

  }

  actualizarServicio() {
    if (!this.servicioActualizarForm.valid) {
      return false;
    } else {

      this.servicioService.updateServicio(this.servicioActualizarForm.value)
        .subscribe(
          (data) => {
            //console.log('hola', data)
            this.mostrarMensaje('El Servicio ha sido actualizado Correctamente');
            this.router.navigate(['../listar-servicios']);
            localStorage.removeItem("idServicio")

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
      position: 'bottom',
      message: mensaje,
      duration: 1000
    });
    toast.present();
  }


}
