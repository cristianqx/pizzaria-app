import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ChamadosListService } from 'src/app/services/chamados/chamados-list/chamados-list.service';
import { Chamados } from 'src/app/interfaces/chamados.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-chamados-detail',
  templateUrl: './chamados-detail.page.html',
  styleUrls: ['./chamados-detail.page.scss'],
})
export class ChamadosDetailPage implements OnInit {

  constValue = {
    id: <number>null
  }

  chamado = {}

  chamadosDetailForm: FormGroup = this.fb.group({
    idChamado: ['', []],
    idEmpresa: ['', []],
    idAnalista: ['', []],
    idUsuario: ['', []],
    dataAbertura: ['', []],
    horaAbertura: ['', []],
    dataFechamento: ['', []],
    horaFechamento: ['', []],
    tempoChamado: ['', []],
    codigoStatusChamado: ['', []],
    tipoChamado: ['', []],
    subtipoChamado: ['', []],
    descricaoChamado: ['', []],
    solucaoChamado: ['', []]
  })

  constructor(
    private route: ActivatedRoute,
    private chamadosService: ChamadosListService,
    private fb: FormBuilder,

  ) { }

  ngOnInit() {
    this.route.paramMap
      .subscribe((params: ParamMap) => {
        this.constValue.id = parseInt(params.get('idChamado'), 10);
      })
    this.findById(this.constValue.id);
  }

  findById(id: number) {
    this.chamadosService.findById(id)
      .subscribe((data) => {
        Object.keys(data).map((item) => {
          switch (item) {
            case 'idChamado':
              this.chamado[item] = data[item];
              break;
            case 'idEmpresa':
              this.chamado[item] = data[item].nomeFantasia;
              break;
            case 'idAnalista':
              this.chamado[item] = data[item].nome;
              break;
            case 'idUsuario':
           //   this.chamado[item] = data[item].fullName;
              break;
            case 'dataAbertura':
              data[item].length == 10 ?
                data[item] = `${data[item].substr(8, 2)}/${data[item].substr(5, 2)}/${data[item].substr(0, 4)}`
                : data[item] = '';
              this.chamado[item] = data[item];
              break;
            case 'horaAbertura':
              data[item] != '' ? data[item] = `${data[item].substr(0, 2)}:${data[item].substr(2, 2)}` : data[item] = '-';
              this.chamado[item] = data[item];
              break;
            case 'dataFechamento':
              data[item].length == 10 ?
                data[item] = `${data[item].substr(8, 2)}/${data[item].substr(5, 2)}/${data[item].substr(0, 4)}`
                : data[item] = '';
              this.chamado[item] = data[item];
              break;
            case 'horaFechamento':
                data[item] != '' ? data[item] = `${data[item].substr(0, 2)}:${data[item].substr(2, 2)}` : data[item] = '-';
              this.chamado[item] = data[item];
              break;
            case 'tempoChamado':
              data[item] != '' ? data[item] = `${data[item].substr(0, 2)}:${data[item].substr(2, 2)}` : data[item] = '-';
              this.chamado[item] = data[item];
              break;
            case 'codigoStatusChamado':
              switch (data[item]) {
                case 1:
                  this.chamado[item] = 'Aberto';

                  break;
                case 2:
                  this.chamado[item] = 'Em Análise';

                  break;
                case 3:
                  this.chamado[item] = 'Fechado';

                  break;
                case 4:
                  this.chamado[item] = 'Indeferido';
                default:
                  this.chamado[item] = '';
                  break;
              }
              break;
            case 'tipoChamado':
              this.chamado[item] = data[item].descricao;
              break;
            case 'subtipoChamado':
              this.chamado[item] = data[item].descricao;
              break;
            case 'descricaoChamado':
              this.chamado[item] = data[item];
              break;
            case 'solucaoChamado':
              this.chamado[item] = data[item];
              break;

            default:
              break;
          }
        })
      })
  }

}
