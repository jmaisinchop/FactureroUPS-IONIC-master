import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ServiciosService } from 'src/app/api/servicios.service';

@Component({
  selector: 'app-crear-servicios',
  templateUrl: './crear-servicios.page.html',
  styleUrls: ['./crear-servicios.page.scss'],
})
export class CrearServiciosPage implements OnInit {
  serviceRegisterForm: FormGroup = this.fb.group({
    'descripcion': ['', [Validators.required]],
    'precioUnitario': ['', [Validators.required]],
    'usuarioId': localStorage.getItem("id-username")

  });

  constructor(
    private fb: FormBuilder,
    private servicioService: ServiciosService,
    private toastController: ToastController,
    private router: Router
  ) { }

  ngOnInit() {
  }

  registerServicio() {
    if (!this.serviceRegisterForm.valid) {
      return false;
    } else {

      this.servicioService.postService(this.serviceRegisterForm.value)
        .subscribe(
          (data) => {
            //console.log('hola', data)
            this.mostrarMensaje('Servicio registrado');
            this.router.navigate(['../listar-servicios']);

            this.serviceRegisterForm.reset();
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
      duration: 3000
    });
    toast.present();
  }

}
