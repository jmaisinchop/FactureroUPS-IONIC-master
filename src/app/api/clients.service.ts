import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cliente } from '../entidades';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  endPoint = environment.backEndServer + 'api/cliente/';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private _refresh$ = new Subject<void>();


  constructor(private httpClient: HttpClient) {


  }

  get refresh$() {
    return this._refresh$;
  }

  register(cliente: Cliente): Observable<any> {

    let finalUrl = this.endPoint + 'create';
    return this.httpClient.post<Cliente>(finalUrl, JSON.stringify(cliente), this.httpOptions)
    .pipe(
      tap(() => {
        this._refresh$.next();
      })
    );


  }

  listarAllClientes(): Observable<Cliente[]> {
    let finalUrl = this.endPoint + 'findAll';
    return this.httpClient.get<Cliente[]>(finalUrl, this.httpOptions)

  }

  getClientId(id: number){
    let finalUrl = this.endPoint + 'findById';
    return this.httpClient.get<Cliente>(finalUrl+"/"+id)

  }

  updateClient(cliente: Cliente){
    let finalUrl = this.endPoint + 'update';
    return this.httpClient.post<Cliente>(finalUrl, JSON.stringify(cliente), this.httpOptions)
    .pipe(
      tap(() => {
        this._refresh$.next();
      })
    );

  }

  deleteCliente(id: number){
    let finalUrl = this.endPoint + 'delete';
    return this.httpClient.get(finalUrl+"/"+id)
    .pipe(
      tap(() => {
        this._refresh$.next();
      })
    );
   

  }

  getClienteIdentificacion(identificacion: string){
    let finalUrl = this.endPoint + 'findByCedula';
    return this.httpClient.get<Cliente>(finalUrl+"/"+identificacion)
  }
}
