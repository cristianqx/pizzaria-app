import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { LoginService } from '../services/authentication/login/login.service';
import { ListarQtdPedidos } from '../services/pedidos/lista-qtd-pedidos/lista-qtd-pedidos.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  ImageArray: any = [];
  public qtdPedidosEmAberto : any;
  public qtdPedidosEmAndamento : any;
  public qtdPedidosFinalizados : any;

  constructor(public navCtrl: NavController,
              private router : Router,
              private appComponent : AppComponent,
              private loginService : LoginService,
              public listaQtdPedidos : ListarQtdPedidos) {

    this.appComponent.statusLogado = true;
    this.ImageArray = [{ 'image': 'https://www.pizzariascuritiba.com.br/wp-content/files_mf/1401364301pizza1.jpg' },
    ]
  }

  ngOnInit() {
    this.listarQtdPedidosEmAberto();
    this.listarQtdPedidosEmAndamento();
    this.listarQtdPedidosFinalizados();
  }

  listarQtdPedidosEmAberto() {
   this.listaQtdPedidos.listarQtdPedidosById(1).subscribe(data => {
     this.qtdPedidosEmAberto = data;
   });
  }

  listarQtdPedidosEmAndamento() {
    this.listaQtdPedidos.listarQtdPedidosById(2).subscribe(data => {
      this.qtdPedidosEmAndamento = data;
    });
   }

   listarQtdPedidosFinalizados() {
    this.listaQtdPedidos.listarQtdPedidosById(3).subscribe(data => {
      this.qtdPedidosFinalizados = data;
    });
   }

  logout() {
    this.loginService.logout();
  }

  public openHomePage() {
    this.router.navigate(['/home']);
  }

  public openPedidosAbertoPage() {
    this.router.navigate(['/pedidos-abertos']);
  }

  public openPedidosFinalizadosPage() {
    this.router.navigate(['/pedidos-finalizados']);
  }
}