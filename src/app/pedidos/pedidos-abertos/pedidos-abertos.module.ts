import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { PedidosAbertosPage } from './pedidos-abertos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: PedidosAbertosPage
      }
    ])
  ],
  declarations: [PedidosAbertosPage]
})
export class PedidosAbertosPageModule {}
