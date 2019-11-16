import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-pedidos-abertos',
  templateUrl: 'pedidos-abertos.page.html',
  styleUrls: ['pedidos-abertos.page.scss'],
})
export class PedidosAbertosPage {
  ImageArray: any = [];

  constructor(public navCtrl: NavController,
              private router : Router,
              private appComponent : AppComponent) {

    this.appComponent.statusLogado = true;
    this.ImageArray = [{ 'image': 'https://www.pizzariascuritiba.com.br/wp-content/files_mf/1401364301pizza1.jpg' },
    ]
  }
}