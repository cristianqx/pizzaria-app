import { Component, OnInit } from '@angular/core';

import { Platform, AlertController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { testUserAgent } from '@ionic/core/dist/types/utils/platform';
import { LoginService } from './services/authentication/login/login.service';
import { Router } from '@angular/router';
import { timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {

  public statusLogado;
  constValue = {
    menu: <boolean>null,
  }
  showSplash = true;


  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private loginService: LoginService,
    private alertController: AlertController,
    private router: Router
  ) {
    this.initializeApp();
  }

  ngOnInit(): void {
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      timer(3000).subscribe(() => this.showSplash = false)
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
  
  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Confirme!',
      message: 'Deseja sair?',
      buttons: [
        {
          text: 'Sair',
          role: 'sair',
          handler: () => {
            this.logout();
            this.constValue.menu = false;
          }
        },
        {
          text: 'Cancelar',
          role: 'cancelar',
          cssClass: 'secondary',
          handler: () => { }
        }
      ]
    });

    await alert.present();
  }

  abrirPortal() {
    window.open('htto://localhost:8080', '_system', 'location=yes');
  }

}