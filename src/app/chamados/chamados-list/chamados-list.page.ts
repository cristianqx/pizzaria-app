import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ChamadosListService } from 'src/app/services/chamados/chamados-list/chamados-list.service';
import { Chamados } from 'src/app/interfaces/chamados.model';
import { IonInfiniteScroll, AlertController } from '@ionic/angular';
import { ErrorSpringBoot } from 'src/app/interfaces/ErrorSpringBoot.model';

@Component({
  selector: 'app-chamados-list',
  templateUrl: './chamados-list.page.html',
  styleUrls: ['./chamados-list.page.scss'],
})
export class ChamadosListPage implements OnInit {

  @ViewChild(IonInfiniteScroll, { static: true }) infiniteScroll: IonInfiniteScroll;

  public page = {
    title: 'Chamados'
  }

  constValue = {
    id: <number>null,
    chamados: <Array<Chamados>>[]
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private chamadosListService: ChamadosListService,
    private alertController: AlertController
  ) { }

  ngOnInit() {
    this.findChamados()
  }

  findChamados() {
    this.chamadosListService.findChamados()
      .subscribe((data) => {
        this.constValue.chamados = data.content;

      })
  }

  chamadosDetail(item) {
    this.constValue.id = item;
    this.router.navigate(['/chamados-detail', this.constValue.id]);
  }

  loadData(event) {
    setTimeout(() => {
      event.target.complete();
      this.chamadosListService.findChamados()
        .subscribe((data) => {
          if (data.size == 1000) {
            event.target.disabled = true;
          }

        })
    }, 500);
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }

  filtrarChamados(event) {
    let val: string = event.target.value;
    this.chamadosListService
      .findIonic(val)
      .subscribe((data) => {
        this.constValue.chamados = data.map(item => item);
      },
        (error: ErrorSpringBoot) => {
          this.errorMensagem(error.error);
        })
  }

  async errorMensagem(mensagem: string) {
    const alert = await this.alertController.create({
      header: 'Error ao trocar senha',
      message: mensagem,
      buttons: ['OK']
    });

    await alert.present();
  }

}
