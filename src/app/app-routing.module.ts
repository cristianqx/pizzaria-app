import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ChamadosListPageModule } from './chamados/chamados-list/chamados-list.module';
import { ChamadosDetailPageModule } from './chamados/chamados-detail/chamados-detail.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'trocar-senha', loadChildren: './trocar-senha/trocar-senha.module#TrocarSenhaPageModule' },
  { path: 'tabs-controller', loadChildren: './tabs-controller/tabs-controller.module#TabsControllerModule' },
  { path: 'pedidos-abertos', loadChildren: './pedidos/pedidos-abertos/pedidos-abertos.module#PedidosAbertosPageModule' },
  { path: 'pedidos-finalizados', loadChildren: './pedidos/pedidos-finalizados/pedidos-finalizados.module#PedidosFinalizadosPageModule' },
  { path: 'pedidos-detalhes', loadChildren: './pedidos/pedidos-detalhes/pedidos-detalhes.module#PedidosDetalhesPageModule' },
  { path: 'pedidos-detalhe', loadChildren: './pedidos/pedidos-detalhe/pedidos-detalhe.module#PedidosDetalhePageModule' },

  /* Paths Chamados*/
   { path: 'chamados-list', loadChildren: () => import ('./chamados/chamados-list/chamados-list.module').then(m =>ChamadosListPageModule) },
   { path: 'chamados-detail/:idChamado', loadChildren: () => import ('./chamados/chamados-detail/chamados-detail.module').then(m =>ChamadosDetailPageModule) }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
