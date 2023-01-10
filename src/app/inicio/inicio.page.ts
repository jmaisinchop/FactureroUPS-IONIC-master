import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    localStorage.removeItem("subtotal")
    localStorage.removeItem("totalfinal")
    localStorage.removeItem("iva")
  }

  cerrarSesion(){
    localStorage.setItem("ingresado","false")

    this.router.navigate(['../login']);
  }

}
