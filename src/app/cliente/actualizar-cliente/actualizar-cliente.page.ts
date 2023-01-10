import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ClientsService } from 'src/app/api/clients.service';
import { Cliente } from 'src/app/entidades';

@Component({
  selector: 'app-actualizar-cliente',
  templateUrl: './actualizar-cliente.page.html',
  styleUrls: ['./actualizar-cliente.page.scss'],
})
export class ActualizarClientePage implements OnInit {

  clientActualizarForm: FormGroup = this.fb.group({
    'id': [localStorage.getItem("id")],
    'tipoIdentificacion': ['', [Validators.required]],
    'identificacionNumero': ['', [Validators.required]],
    'nombre': ['', [Validators.required]],
    'direccion': ['', [Validators.required]],
    'telefono': ['', [Validators.required]],
    'correoElectronico': ['', [Validators.required]]
  });
  cliente: Cliente = new Cliente();

  constructor(
    private fb: FormBuilder,

    private toastController: ToastController,
    private clientsService: ClientsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.actualizar();
  }

  actualizar() {
    let idC = localStorage.getItem("id");

    this.clientsService.listarAllClientes().subscribe(data => {
      console.log(data.find(x => x.id === (+idC)));
      this.cliente = data.find(x => x.id === (+idC));

    })
  }

  updateT() {
    if (!this.clientActualizarForm.valid) {
      return false;
    } else {

      this.clientsService.updateClient(this.clientActualizarForm.value)
        .subscribe(
          (data) => {
            //console.log('hola', data)
            this.mostrarMensaje('El Cliente ha sido actualizado Correctamente');
            this.router.navigate(['../listar-cliente']);
            localStorage.removeItem("id")


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
