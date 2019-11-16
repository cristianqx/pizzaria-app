import { Component } from '@angular/core';
import { HomePage } from '../home/home.page';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'page-tabs-controller',
  templateUrl: 'tabs-controller.html'
})
export class TabsControllerPage {

  tab1Root: any = HomePage;
  //tab2Root: any = ;
  //tab3Root: any = ;
  constructor(public navCtrl: NavController) {
  }
  
}
