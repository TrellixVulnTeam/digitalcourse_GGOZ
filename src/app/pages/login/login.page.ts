import { AccountService } from './../../account/account.service';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular'; 
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  creds = {
    email:'' ,
    senha: ''
  };  
  constructor(
    private util: UtilsService,
    private accountService:AccountService,
    private navCtrl: NavController, 
  ) { }

  ngOnInit() {
  }

  login() {
    // Enabling Side Menu 
    if(this.creds.email == '' || this.creds.senha == ''){
			this.util.presentAlert('Atenção','Obrigatório preencher seu email e senha')
			return false
		}
		if(!this.util.testaEmail(this.creds.email)){
			this.util.presentAlert('Atenção','Verifique seu email e tente novamente')
			return false
		}
    this.util.preloadLogin();
    this.accountService.login(this.creds);
    this.navCtrl.navigateRoot('/home', { animationDirection: 'forward' });
  }

}
