import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PedidoResource } from 'src/app/model/pedido-resource';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
  })
  export class ListaPedidosService implements OnInit{
  
    private relativeLink = 'pedido';

    constructor(
        private http: HttpClient
      ) { }

      ngOnInit() {
    }

    public listarPedidosById(idStatusPedido : number) : Observable<any> {
      return this.http.get(`${environment.url.apirest}/${this.relativeLink}/lista-pedidos-status/${idStatusPedido}`); 
  }

    public listarPedidosPorId(idPedido : number) : Observable<any> {
      return this.http.get('http://localhost:8080/projetointegrador/api/pedido/get/'+ idPedido) ; 
  }

    findById(id: Number): Observable<any> {
      return this.http.get(`${environment.url.apirest}/${this.relativeLink}/get/${id}`) as Observable<PedidoResource>;
    }



    
  }