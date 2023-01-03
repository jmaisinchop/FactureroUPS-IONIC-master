import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ClientsService } from 'src/app/api/clients.service';
import { UserService } from 'src/app/api/user.service';
import { Cliente } from 'src/app/entidades';

@Component({
  selector: 'app-listar-cliente',
  templateUrl: './listar-cliente.page.html',
  styleUrls: ['./listar-cliente.page.scss'],
})
export class ListarClientePage implements OnInit {



  clientesT: Cliente[] = []
  suscription: Subscription;


  constructor(

    private clientsService: ClientsService,
    private router: Router


  ) { }

  ngOnInit() {
    this.cargarCliente();
    this.suscription = this.clientsService.refresh$.subscribe(() => {
      this.cargarCliente();
    })
  }
  cargarCliente() {
    this.clientsService.listarAllClientes()
      .subscribe(clientes => {
        this.clientesT = clientes
        console.log(this.clientesT)

      });
  }

  handleRefresh(event) {
    setTimeout(() => {
      this.cargarCliente();
    }, 2000);
  };

  actualizar(cliente: Cliente) {
    localStorage.setItem("id", cliente.id.toString());
    this.router.navigate(["actualizar-cliente"]);


  }

  delete(cliente: Cliente) {
    this.clientsService.deleteCliente(cliente.id).subscribe(



    )

  }
}
