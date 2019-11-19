import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root'
  })
export class ListarQtdPedidos{

    private relativeLink = 'pedido';

    constructor(
        private http: HttpClient
    ) {}
    
    public listarQtdPedidosById(idStatusPedido : number) : Observable<any> {
        return this.http.get(`${environment.url.apirest}/${this.relativeLink}/contar-pedidos/${idStatusPedido}`) as Observable<any>; 
    }
}