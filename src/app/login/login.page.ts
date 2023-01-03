import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';
import { UserService } from '../api/user.service';
import { Usuario } from '../entidades';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  
  loginForm : FormGroup = this.fb.group({      
    'username' : ['', [Validators.required]],
    'password': ['', [Validators.required]]
  });   


  constructor(
    public navController: NavController,
    private fb: FormBuilder,
    private userService: UserService,
    private toastController: ToastController,
    private router: Router
  ) { 
    
     
    
  }

  ngOnInit() {
    
  
    

  }


  login(){
    if(!this.loginForm.valid){
      return false;
    }else{
 
      this.userService.login(this.loginForm.value)
      .subscribe(
        (data)=>{
         console.log('hola', data.username)
      
         // this.router.navigate(['../inicio']);
          localStorage.setItem("ingresado", "true")
          localStorage.setItem("id-username",data.id)
          localStorage.setItem("username", data.username)
          
          
          
          this.navController.navigateRoot('inicio')
       
          this.mostrarMensaje('Ingresando al sistema');
        },
        (error)=>{
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
