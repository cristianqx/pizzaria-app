import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ListaPedidosService } from 'src/app/services/pedidos/lista-pedidos/lista-pedidos.service';
import { PedidoResource } from 'src/app/model/pedido-resource';

@Component({
  selector: 'app-pedidos-abertos',
  templateUrl: 'pedidos-abertos.page.html',
  styleUrls: ['pedidos-abertos.page.scss'],
})
export class PedidosAbertosPage implements OnInit{
  ImageArray: any = [];
  private relativeLink = 'pedido';
  pedidos : Observable<PedidoResource[]>
  loading: boolean;
  isSubmited: boolean;

  constructor(public navCtrl: NavController,
              private router : Router,
              private appComponent : AppComponent,
              private http: HttpClient,
              private listaPedidos : ListaPedidosService) {

    this.appComponent.statusLogado = true;
    this.ImageArray = [{ 'image': 'https://www.pizzariascuritiba.com.br/wp-content/files_mf/1401364301pizza1.jpg' },
    ]
  }

  ngOnInit() {
    this.obterPedidos(1);
  }

  obterPedidos(idTipoPedido) {
    this.pedidos = this.listaPedidos.listarPedidosById(idTipoPedido);
  }

  visualizarPedido(idPedido : number) {
    this.isSubmited = true;
    this.loading = true;

    setTimeout(() => {
      this.loading = false;
      this.isSubmited = false;
      this.router.navigate(['pedidos-detalhe', {"refresh": (new Date().getTime())}], { queryParams: { idPedido: idPedido } });
    }, 600);
  }

}