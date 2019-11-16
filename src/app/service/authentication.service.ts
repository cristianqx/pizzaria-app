import { Injectable } from '@angular/core';
import { UsuarioResource } from '../model/usuario-resource';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { LoginResource } from '../model/login-resource';
import { ENDPOINT_LOGIN, DEFAULT_HTTP_OPTIONS } from '../endpoint-constants';
import { map } from 'rxjs/operators';


/**
 * Service para controle de autenticacao no portal.
 * 
 * @author Cristian
 */
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private currentUserSubject: BehaviorSubject<UsuarioResource>;
  public currentUser: UsuarioResource;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<UsuarioResource>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.value;
  }

  public get currentUserValue(): UsuarioResource {
    return this.currentUser;
  }

  public set setCurrentUserValue(user: UsuarioResource) {
    this.currentUserSubject.next(user);
  }

  /**
   * Efetua a chamada do servico de validacao dos dados de login.
   * 
   * @param loginData LoginResource
   */
  autenticar(loginData: LoginResource): Observable<UsuarioResource> {
    return this.http.post<any>(ENDPOINT_LOGIN, JSON.stringify(loginData), DEFAULT_HTTP_OPTIONS)
      .pipe(
        map(user => {
          this.currentUser = user;
          return user;
        })
      )
  }

  /**
   * Verifica se o usuario esta logado
   */
  public isLoggedIn() {
    return localStorage.getItem('currentUser') != null;
  }

  /**
   * Efetua o logout no sistema
   */
  public logout() {
    localStorage.removeItem('currentUser');
    localStorage.clear();
    this.currentUserSubject.next(null);
  }

  public get codigoPerfilUsuarioLogado() {
    return this.currentUser.perfil.id;
  }
}
