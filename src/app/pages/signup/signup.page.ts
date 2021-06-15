import { UtilsService } from 'src/app/services/utils.service';
import { Router } from '@angular/router';
import { API_CONFIG } from './../../config/api.config';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/account/account.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  usuario: {
    nome: string,
    email: string,
    senha: string,
  }
  cpassword:string;

  constructor(
    private http: HttpClient,
    private router: Router,
    private util: UtilsService,
    private accountService:AccountService,
    private navCtrl: NavController, 
  ) { }
  creds = {
    email:'' ,
    senha: ''
  }; 
  ngOnInit() {
    this.usuario = { nome: '', email: '', senha: '' };
  }

  createuser() {
    if (this.usuario.email == '' || this.usuario.senha == '') {
      this.util.presentAlert('Atenção', 'Obrigatório preencher seu email e senha')
      return false
    }
    if (!this.util.testaEmail(this.usuario.email)) {
      this.util.presentAlert('Atenção', 'Verifique seu email e tente novamente')
      return false
    }
    if (this.cpassword!=this.usuario.senha) {
      this.util.presentAlert('Atenção', 'Senhas não correspondem');
      return false
    }
    this.http.post(`${API_CONFIG.baseUrl}/usuarios/insertusuario?pws=${this.usuario.senha}`, this.usuario)
      .toPromise()
      .then(
        rest => {this.creds.senha=this.usuario.senha;
          this.util.preloadLogin();
          this.creds.email=this.usuario.email;

          this.accountService.login(this.creds);
          this.navCtrl.navigateRoot('/home', { animationDirection: 'forward' });
        }
       
    );
}
}
