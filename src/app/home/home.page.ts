import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { LoginService } from '../services/authentication/login/login.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  ImageArray: any = [];

  constructor(public navCtrl: NavController,
              private router : Router,
              private appComponent : AppComponent,
              private loginService : LoginService) {

    this.appComponent.statusLogado = true;
    this.ImageArray = [{ 'image': 'https://www.pizzariascuritiba.com.br/wp-content/files_mf/1401364301pizza1.jpg' },
    ]
  }


  logout() {
    this.loginService.logout();
  }
}