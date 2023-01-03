import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { error } from 'console';
import { UserService } from '../api/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  userRegisterForm : FormGroup = this.fb.group({      
    'username' : ['', [Validators.required]],
    'password': ['', [Validators.required]],
    'confirmPassword': ['', [Validators.required]]
  });   

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private toastController: ToastController,
    private router: Router
    ) { }

  ngOnInit() {
   
  }

  register(){
    if(!this.userRegisterForm.valid){
      return false;
    }else{
 
      this.userService.register(this.userRegisterForm.value)
      .subscribe(
        (data)=>{
          //console.log('hola', data)
          this.mostrarMensaje('El usuario ha sido creado exitosamente');
          this.router.navigate(['../login']);
          
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
