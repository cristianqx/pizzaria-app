import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Pageable } from 'src/app/interfaces/pageable.model';
import { Chamados } from 'src/app/interfaces/chamados.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChamadosListService {

  private relativeLink = 'chamados';

  constructor(
    private http: HttpClient
  ) { }

  findChamados(parameters?: any): Observable<Pageable<Chamados>> {
    return this.http.get(`${environment.url.apirest}/${this.relativeLink}?${parameters}`) as Observable<Pageable<Chamados>>;
  }

  findChamadosUser(idUsuario: number, parameters?: any): Observable<Pageable<Chamados>> {
    return this.http.get(`${environment.url.apirest}/${this.relativeLink}/user/${idUsuario}?${parameters}`) as Observable<Pageable<Chamados>>;
  }

  findById(id: Number): Observable<Chamados> {
    return this.http.get(`${environment.url.apirest}/${this.relativeLink}/${id}`) as Observable<Chamados>;
  }

  findIonic(filter: String): Observable<Chamados[]> {
    return this.http.get(`${environment.url.apirest}/${this.relativeLink}/ionic?filter=${filter}`) as Observable<Chamados[]>;
  }

  createChamado(chamados: any): Observable<Chamados> {
    return this.http.post(`${environment.url.apirest}/${this.relativeLink}`, chamados) as Observable<Chamados>;
  }

  alterChamado(chamados: Chamados): Observable<Chamados> {
    return this.http.put(`${environment.url.apirest}/${this.relativeLink}`, chamados) as Observable<Chamados>;
  }
}
