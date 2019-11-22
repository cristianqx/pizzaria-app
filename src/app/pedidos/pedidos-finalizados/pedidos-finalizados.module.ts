import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { PedidosFinalizadosPage } from './pedidos-finalizados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: PedidosFinalizadosPage
      }
    ])
  ],
  declarations: [PedidosFinalizadosPage]
})
export class PedidosFinalizadosPageModule {}
