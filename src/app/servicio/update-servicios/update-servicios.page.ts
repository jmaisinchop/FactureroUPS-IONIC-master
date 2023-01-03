import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ServiciosService } from 'src/app/api/servicios.service';
import { Servicio } from 'src/app/entidades';

@Component({
  selector: 'app-update-servicios',
  templateUrl: './update-servicios.page.html',
  styleUrls: ['./update-servicios.page.scss'],
})
export class UpdateServiciosPage implements OnInit {
  servicioActualizarForm: FormGroup = this.fb.group({
    'id': [''],
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
    let id = localStorage.getItem("idServicio");
    this.servicioService.getServicioId(+id).subscribe(data => {
      console.log(data.descripcion);
      this.servicio = data;
    })

  }

  actualizarServicio() {
    if(!this.servicioActualizarForm.valid){
      return false;
    }else{
 
      this.servicioService.updateServicio(this.servicioActualizarForm.value)
      .subscribe(
        (data)=>{
          //console.log('hola', data)
          this.mostrarMensaje('El Servicio ha sido actualizado Correctamente');
          this.router.navigate(['../listar-servicios']);
          
         
        },
        (error)=>{
          //console.log('Ocurrio un error', error.error)
          this.mostrarMensaje(error.error)
        }
      );
      return true;
    }

  }

  
  async mostrarMensaje(mensaje: any){
    const toast = await this.toastController.create({
      position: 'bottom',
      message: mensaje,
      duration:1000
    });
    toast.present();
  }


}
