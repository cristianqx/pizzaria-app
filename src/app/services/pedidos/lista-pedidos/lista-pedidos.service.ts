import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PedidoResource } from 'src/app/model/pedido-resource';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
  })
  export class ListaPedidosService implements OnInit{
  
    private relativeLink = 'pedido/listar-pedidos';

    constructor(
        private http: HttpClient
      ) { }

      ngOnInit() {
          this.getListaPedidos();
      }
      public getListaPedidos() {
        return this.http.get(`${environment.url.apirest}/${this.relativeLink}`).subscribe(data => {
            console.log(JSON.stringify(data));
        });
      }
  }