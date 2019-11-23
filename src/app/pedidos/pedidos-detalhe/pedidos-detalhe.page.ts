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
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProdutoResource } from 'src/app/model/produto-resource';

@Component({
  selector: 'app-pedidos-detalhe',
  templateUrl: 'pedidos-detalhe.page.html',
  styleUrls: ['pedidos-detalhe.page.scss'],
})
export class PedidosDetalhePage implements OnInit{
  ImageArray: any = [];
  private relativeLink = 'pedido';
  public pedidos : Observable<PedidoResource[]>
  //public pedidos:any[] = [];
  public idStatusPedido : number;

  pedidoForm : FormGroup;
  pedido: PedidoResource = new PedidoResource();
  produto : Observable<ProdutoResource[]>;
  isSubmited: boolean;
  loading: boolean;

  constructor(public navCtrl: NavController,
              private router : Router,
              private appComponent : AppComponent,
              private http: HttpClient,
              private listaPedidos : ListaPedidosService,
              private route: ActivatedRoute,
              private formBuilder : FormBuilder,
              private loginService : LoginService) {

    this.appComponent.statusLogado = true;
    this.ImageArray = [{ 'image': 'https://www.pizzariascuritiba.com.br/wp-content/files_mf/1401364301pizza1.jpg' },
    ]
  }

  ngOnInit() {
    this.idStatusPedido = this.route.snapshot.queryParams['idPedido'];

    /*this.listaPedidos.findById(this.idStatusPedido).subscribe(data => {

      this.pedidos = data;

    });*/

    this.pedidoForm = this.formBuilder.group({
      id:  [''],
      quantidade:  [''],
      observacao: [''],
      produto : '',
    });

    if(this.idStatusPedido != undefined) {
      this.listaPedidos.findById(this.idStatusPedido).subscribe(
        pedidoRetornado => {

          console.log("Pedido retornado: "+pedidoRetornado);
          this.pedidoForm.controls['id'].setValue(pedidoRetornado.id);
          this.pedidoForm.controls['quantidade'].setValue(pedidoRetornado.quantidade);
          this.pedidoForm.controls['produto'].setValue(pedidoRetornado.produto);
          this.pedidoForm.controls['observacao'].setValue(pedidoRetornado.observacao);
        })
    }


  }

  get formControls() {
    return this.pedidoForm.controls;
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
  



  /*obterPedidos(idTipoPedido) {
    this.pedidos = this.listaPedidos.listarPedidosPorId(idTipoPedido);
  }*/

  visualizarPedido(idPedido : number) {
    this.router.navigate(['pedidos-detalhes'], { queryParams: { idPedido: idPedido } });
    return false;
  }

  logout() {
    this.loginService.logout();
  }

}