import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FacturaCabecera } from '../entidades';

@Injectable({
  providedIn: 'root'
})
export class FacturaService {

  endPoint = environment.backEndServer + 'api/factura/';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private _refresh$ = new Subject<void>();


  constructor(private httpClient: HttpClient) {


  }

  get refresh$() {
    return this._refresh$;
  }

  register(factura: FacturaCabecera): Observable<any> {

    let finalUrl = this.endPoint + 'create';
    console.log(JSON.stringify(factura))
    return this.httpClient.post<FacturaCabecera>(finalUrl, JSON.stringify(factura), this.httpOptions)
    .pipe(
      tap(() => {
        this._refresh$.next();
      })
    );


  }
}
