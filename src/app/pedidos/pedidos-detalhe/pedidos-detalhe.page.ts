import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ListaPedidosService } from 'src/app/services/pedidos/lista-pedidos/lista-pedidos.service';
import { PedidoResource } from 'src/app/model/pedido-resource';
import { LoginService } from 'src/app/services/authentication/login/login.service';

@Component({
  selector: 'app-pedidos-detalhe',
  templateUrl: 'pedidos-detalhe.page.html',
  styleUrls: ['pedidos-detalhe.page.scss'],
})
export class PedidosDetalhePage implements OnInit{
  ImageArray: any = [];
  private relativeLink = 'pedido';
  public pedidos : Observable<PedidoResource[]>
  public idStatusPedido : number;

  constructor(public navCtrl: NavController,
              private router : Router,
              private appComponent : AppComponent,
              private http: HttpClient,
              private listaPedidos : ListaPedidosService,
              private route: ActivatedRoute,
              private loginService : LoginService) {

    this.appComponent.statusLogado = true;
    this.ImageArray = [{ 'image': 'https://www.pizzariascuritiba.com.br/wp-content/files_mf/1401364301pizza1.jpg' },
    ]
  }

  ngOnInit() {
    this.idStatusPedido = this.route.snapshot.queryParams['idPedido'];

    this.listaPedidos.listarPedidosPorId(this.idStatusPedido).subscribe(data => {
      this.pedidos = data;
      console.log(JSON.stringify(this.pedidos[0].id));
    });
  }

  retornar() {
    this.router.navigate(['pedidos-abertos']);
    return false;
  }

  visualizarPedido(idPedido : number) {
    this.router.navigate(['pedidos-detalhes'], { queryParams: { idPedido: idPedido } });
    return false;
  }

  logout() {
    this.loginService.logout();
  }

}