import { NavController } from '@ionic/angular';
import { UsuarioWeb } from './../models/UsuarioWeb';

import { Injectable } from '@angular/core';
import { JwtHelperService } from "@auth0/angular-jwt";
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';  
import { StorageService } from '../services/storage.service';
import { API_CONFIG } from '../config/api.config';
import { UtilsService } from '../services/utils.service';
import { LocalUser } from '../models/local_user';

@Injectable({
    providedIn: 'root'
})
export class AccountService {
    jwtHelper: JwtHelperService = new JwtHelperService();
    constructor(
        public http: HttpClient,
        public storage: StorageService,
        private utilService: UtilsService,
       private  navCtrl: NavController, 
        private router: Router,) {
    }
    login(creds: { email: string, senha: string }) {
        console.log(creds);
        
        this.storage.setLocalUser(null); 
        this.http.post(
            `${API_CONFIG.baseUrl}/login`,
            creds,
            {
                observe: 'response',
                responseType: 'text'
            }).toPromise()
            .then(
                rest => {
                    this.utilService.loadingDemiss();
                    this.successfulLogin(rest.headers.get('Authorization')); 
                    this.navCtrl.navigateRoot('', { animationDirection: 'forward' });
                }
                ,
                error=>{
                    this.utilService.loadingDemiss();
                    this.utilService.presentAlert("Erro de servidor",'Servidor indisponivel, tente novamente em alguns minutos')
                }
            );

    }
    authenticate(creds: { login: string, senha: string }) {
        return this.http.post(
            `${API_CONFIG.baseUrl}/login`,
            creds,
            {
                observe: 'response',
                responseType: 'text'
            });
    }

    refreshToken() {
        return this.http.post(
            `${API_CONFIG.baseUrl}/auth/refresh_token`,
            {},
            {
                observe: 'response',
                responseType: 'text'
            });
    }

    successfulLogin(authorizationValue: string) {
        let tok = authorizationValue.substring(7); 
         const email= this.jwtHelper.decodeToken(tok).sub;
        let user: LocalUser = {
            token: tok,
            email: this.jwtHelper.decodeToken(tok).sub
        };
        this.storage.setLocalUser(user);
        this.http.get<UsuarioWeb>(`${API_CONFIG.baseUrl}/usuarios/findbyemail?email=${email}`,)
        .toPromise()
        .then(
            rest => {
                this.utilService.loadingDemiss();
                let user: LocalUser = {
                    token: tok,
                    email: this.jwtHelper.decodeToken(tok).sub,
                    idUser: rest.id,
                    nameUser: rest.nome,
                    avatar: rest.avatar,

                };
                this.storage.setLocalUser(user);
            }
        )
    }

    logout() {
        this.storage.setLocalUser(null);
        this.router.navigate(['login']);
    }
}
