import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { PedidosDetalhePage } from './pedidos-detalhe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: PedidosDetalhePage
      }
    ])
  ],
  declarations: [PedidosDetalhePage]
})
export class PedidosDetalhePageModule {}
