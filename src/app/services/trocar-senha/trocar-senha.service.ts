import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TrocarSenha } from 'src/app/interfaces/trocarSenha.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TrocarSenhaService {

  private relativeLink = 'user/trocarSenha';

  constructor(private http: HttpClient) { }

  trocarSenha(senhas: TrocarSenha) {
    return this.http.post(`${environment.url.apirest}/${this.relativeLink}`, senhas);
  }
}
