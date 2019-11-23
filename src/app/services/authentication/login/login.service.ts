import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user.model';
import { AccountCredentials } from 'src/app/interfaces/accountCredentials.model';
import { Login } from 'src/app/interfaces/login.model';
import { UsuarioResource } from 'src/app/model/usuario-resource';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private relativeLink = 'usuario/logar';
  private isLoggedIn$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private userInfo$: BehaviorSubject<User> = new BehaviorSubject<User>(null);

  constructor(
    private router: Router,
    private http: HttpClient
  ) { }

  get getIsLogged$() {
    const logado = sessionStorage.getItem('user');
    console.log("Logado : "+logado)
    if (!logado) {
      this.isLoggedIn$.next(false);
    } else {
      this.isLoggedIn$.next(true);
    }
    return this.isLoggedIn$.asObservable();
  }

  setIsLogged$(isLogged) {
    this.isLoggedIn$.next(isLogged);
  }
  
  get getUserInformation$() {
    const user: User = JSON.parse(sessionStorage.getItem('user'));
    this.userInfo$.next(user);
    return this.userInfo$.asObservable();
  }

  setUserInformation$(user) {
    this.userInfo$.next(user);
  }

  logout() {
    sessionStorage.clear();
    this.isLoggedIn$.next(false);
    this.router.navigate(['login']);
  }


  login(credentials: AccountCredentials): Observable<Login> {
    return this.http.post(`${environment.url.apirest}/${this.relativeLink}`, credentials) as Observable<Login>;
  }

  getVersion() {
    return this.http.get('assets/VERSION', { responseType: 'text' })
  }

}
