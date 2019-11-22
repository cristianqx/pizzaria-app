import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ListaPedidosService } from 'src/app/services/pedidos/lista-pedidos/lista-pedidos.service';
import { PedidoResource } from 'src/app/model/pedido-resource';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-pedidos-detalhes',
  templateUrl: 'pedidos-detalhes.page.html',
  styleUrls: ['pedidos-detalhes.page.scss'],
})
export class PedidosDetalhesPage implements OnInit{
  ImageArray: any = [];
  private relativeLink = 'pedido';
  //pedidos : Observable<PedidoResource[]>
  idStatusPedido: any;

  constructor(public navCtrl: NavController,
              private router : Router,
              private appComponent : AppComponent,
              private http: HttpClient,
              //private listaPedidos : ListaPedidosService,
              private routeTeste : Route,
              private route: ActivatedRoute,) {

    this.appComponent.statusLogado = true;
    this.ImageArray = [{ 'image': 'https://www.pizzariascuritiba.com.br/wp-content/files_mf/1401364301pizza1.jpg' },
    ]
  }

  ngOnInit() {
   // this.idStatusPedido = this.route.snapshot.queryParams['idStatusPed'];
    //this.obterPedidos(this.idStatusPedido);
  }

  /*obterPedidos(idTipoPedido) {
    this.pedidos = this.listaPedidos.listarPedidosById(idTipoPedido);
  }*/



}