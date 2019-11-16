import { TabsControllerPage } from "./tabs-controller";
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

const routes: Routes = [
    {
      path: '',
      component: TabsControllerPage
    }
  ];
  @NgModule({
    imports: [
      CommonModule,
      FormsModule,
      IonicModule,
      RouterModule.forChild(routes)
    ],
    declarations: [TabsControllerPage]
  })
  export class TabsControllerModule {}