import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ClientsService } from 'src/app/api/clients.service';

@Component({
  selector: 'app-registrar-cliente',
  templateUrl: './registrar-cliente.page.html',
  styleUrls: ['./registrar-cliente.page.scss'],
})
export class RegistrarClientePage implements OnInit {

  clientRegisterForm : FormGroup = this.fb.group({   
    'tipoIdentificacion':['',[Validators.required]],
    'identificacionNumero' : ['', [Validators.required]],
    'nombre': ['', [Validators.required]],
    'direccion': ['', [Validators.required]],
    'telefono': ['', [Validators.required]],
    'correoElectronico': ['', [Validators.required]]
  }); 

  constructor(
    private fb: FormBuilder,
    private clientsService: ClientsService,
    private toastController: ToastController,
    private router: Router
  ) { }

  ngOnInit() {
  }

  registerCliente(){
    if(!this.clientRegisterForm.valid){
      return false;
    }else{
 
      this.clientsService.register(this.clientRegisterForm.value)
      .subscribe(
        (data)=>{
          //console.log('hola', data)
          this.mostrarMensaje('El Cliente ha sido creado exitosamente');
          this.router.navigate(['../listar-cliente']);
          
          this.clientRegisterForm.reset();
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
      position: 'top',
      message: mensaje,
      duration:3000
    });
    toast.present();
  }

}


