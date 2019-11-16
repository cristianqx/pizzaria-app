import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../services/authentication/login/login.service';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;

  constValue = {
    button: <boolean>false,
    loading: <boolean>null
  }
  isSubmited: boolean;
  loading: boolean;

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router,
    public alertController: AlertController,
    public loadingController: LoadingController,
    public appComponent : AppComponent,
  ) { }

  ngOnInit() {

    this.appComponent.statusLogado = false;
    this.loginForm = this.fb.group({
      login: ['', Validators.required],
      senha: ['']
    })

   

    this.loginForm.valueChanges
      .subscribe((_) => {
        this.constValue.button = this.loginForm.invalid;
      })

      this.loginService.getIsLogged$.subscribe((data) => {
        if (data == true) {
          this.router.navigate(['/home']);
        }
      })
  }

  login(){

    console.log("Efetuando login:" + this.loginForm.value);
    
    this.isSubmited = true;
    
    if(this.loginForm.invalid){
      return;
    }

    this.loading = true;

    this.loginService.login(this.loginForm.value).subscribe(
      retorno => {
        localStorage.setItem('user', JSON.stringify(retorno));
        console.log("Usuario autenticado! ");
        this.router.navigate(['home']);
      },
      error => {
        this.tratarErro(error);    
      },
      () => {
        console.log("Chamada da api de login completada.");
        this.loading = false;
        this.isSubmited = false;
      }
    );
  }

  async tratarErro(error){

    this.loading = false;
    this.isSubmited = false;

    if(error.status == 404){

      const alert = await this.alertController.create({
        header: 'Login não cadastrado',
        subHeader: 'Error',
        buttons: ['OK']
      });
  
      await alert.present();
    
    } else if(error.status == 401){
      const alert = await this.alertController.create({
        header: 'Senha inválida!',
        subHeader: 'Error',
        buttons: ['OK']
      });

      await alert.present();
    
    } else {
      const alert = await this.alertController.create({
        header: 'Ocorreu um erro não esperado. Por favor contate o suporte!',
        subHeader: 'Error',
        buttons: ['OK']
      });

      await alert.present();
    }
  }

  get controls() {
    return this.loginForm.controls;
  }
}


