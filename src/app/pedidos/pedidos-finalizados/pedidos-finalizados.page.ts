import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ListaPedidosService } from 'src/app/services/pedidos/lista-pedidos/lista-pedidos.service';
import { PedidoResource } from 'src/app/model/pedido-resource';
import { LoginService } from 'src/app/services/authentication/login/login.service';

@Component({
  selector: 'app-pedidos-finalizados',
  templateUrl: 'pedidos-finalizados.page.html',
  styleUrls: ['pedidos-finalizados.page.scss'],
})
export class PedidosFinalizadosPage implements OnInit{
  ImageArray: any = [];
  private relativeLink = 'pedido';
  pedidos : Observable<PedidoResource[]>
  isSubmited: boolean;
  loading: boolean;

  constructor(public navCtrl: NavController,
              private router : Router,
              private appComponent : AppComponent,
              private http: HttpClient,
              private loginService : LoginService,
              private listaPedidos : ListaPedidosService) {

    this.appComponent.statusLogado = true;
    this.ImageArray = [{ 'image': 'https://www.pizzariascuritiba.com.br/wp-content/files_mf/1401364301pizza1.jpg' },
    ]
  }

  ngOnInit() {
    this.obterPedidos(3);

    console.log(JSON.stringify(this.pedidos));
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

  retornar() {

    this.isSubmited = true;
    this.loading = true;
     
    setTimeout(() => {
      this.loading = false;
      this.isSubmited = false;
      this.router.navigate(['pedidos-abertos', {"refresh": (new Date().getTime())}]);
  
    }, 600);

  }

  logout() {
    this.loginService.logout();
  }

}