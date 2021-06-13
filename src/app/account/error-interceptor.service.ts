import { UtilsService } from 'src/app/services/utils.service';
import { AlertController } from '@ionic/angular';

import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http'; 
import { StorageService } from '../services/storage.service';  
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
 
export interface FieldMessage {
  fieldName : string;
  message : string;
}

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    constructor(public storage: StorageService, 
       public alertCtrl: AlertController,
       private  route: Router,
       private utilServiece: UtilsService,) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      return (next.handle(req)
      .pipe(catchError(error => {

            let errorObj = error;
            if (errorObj.error) {
                errorObj = errorObj.error;
            }
            if (!errorObj.status) {
                errorObj = JSON.parse(errorObj);
            }

            console.log("Erro detectado pelo interceptor:");
            console.log(errorObj);

            switch(errorObj.status) {
                case 401:
                this.handle401();
                break;

                case 403:
                this.handle403();
                break;

                case 422:
                this.handle422(errorObj);
                break;
                case 500:
                  this.handle500(errorObj);
                  break;
                default:
                this.handleDefaultEror(errorObj);
            }

            return Observable.throw(errorObj);
          }
          )
          )
        ) as any;
    }

    handle403() {
        this.storage.setLocalUser(null);
    }
    handle500(errorObj) {
       this.utilServiece.presentAlert(  'Erro ' + errorObj.status + ': ' + errorObj.error,
             errorObj.message ); 

             this.route.navigate(['login']);
    }
    handle401() {
      this.utilServiece.presentAlert( 'Erro 401: falha de autenticação',
      'Email ou senha incorretos');
         
    }

    handle422(errorObj) {
      this.utilServiece.presentAlert( 'Erro 422: Validação',
           this.listErrors(errorObj.errors) );
    }

    handleDefaultEror(errorObj) {
      this.utilServiece.presentAlert(  'Erro ' + errorObj.status + ': ' + errorObj.error,
             errorObj.message );        
    }

    private listErrors(messages : FieldMessage[]) : string {
        let s : string = '';
        for (var i=0; i<messages.length; i++) {
            s = s + '<p><strong>' + messages[i].fieldName + "</strong>: " + messages[i].message + '</p>';
        }
        return s;
    }
}

export const ErrorInterceptorProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorInterceptor,
    multi: true,
};

/*import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpEvent, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, pipe } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AccountService } from './account.service';
import { Router } from '@angular/router';
import { UtilsService } from '../services/utils.service';
import { StorageService } from '../services/storage.service';

export interface FieldMessage {
  fieldName: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})

export class ErrorInterceptor implements HttpInterceptor {


  constructor(
    private accountService: AccountService,
    public storage: StorageService,
    private router: Router,
    private utilServiece: UtilsService,
  ) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return (next.handle(req)
      .pipe(catchError(error => {
        let errorMessage;
        errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.error}`;

        //  console.log((error.state));
        //  console.log("error" + error.message + 'Erro  : ' +   this.listErrors(error.error));
        if (error.statusText == "Unknown Error") {
          let errorMessage = "Unknown Error";

          //    this.spinner.hide();
          this.utilServiece.presentAlert('Não foi possível acessar',
            "Servidor temporariamente indisponivel, informe ao administrador erro: "
            + errorMessage);
            
            this.utilServiece.loadingDemiss();
          console.log(error);

        }
        console.log(`Código do erro: ${error.error}, ` + `menssagem: ${error.status}`);

        let errorObj = error;
        /*  if (errorObj.error) {
              errorObj = errorObj.error;
          }
        
         if (!errorObj.status) {
              errorObj = JSON.parse(errorObj);
          }
 

        console.log(error.status);

        // this.toastr.error('Digite seu email e senha', '');
        switch (errorObj.status) {
          case 0:
           { this.utilServiece.presentAlert('Não foi possível acessar', 'Servidor indisponível tente novamente mais tarde')
           
           this.utilServiece.loadingDemiss();}
            break;
          case 401:
            this.handle401();
            break;

          case 403:
            this.handle403(errorObj);
            break;

          case 422:
            this.handle422(errorObj);
            break;

          case 423:
            {this.utilServiece.presentAlert('Não foi possível acessar',
              "Erro: "
              + errorObj.status + ' - ' + (errorObj.error));
              this.utilServiece.loadingDemiss();}
            break;
          case 302:
            this.handle302(errorObj)
            break;
          case 500:

            this.handle500(errorObj);
            //this.accountService.logout();
            break;
          default:
            this.handleDefaultEror(errorObj);
        }

        return Observable.throw(errorObj);
      }
      )
      )
    ) as any;
  }

  handle302(errorObj: any) {
    let errorMessage;
    errorMessage = `Código do erro: ${errorObj.status}, ` + `menssagem: ${errorObj.error}`;
    this.utilServiece.presentAlert('Não foi possível acessar', `${errorObj.error}`)
   
    this.utilServiece.loadingDemiss();
    // this.spinner.hide(); 
  }
  handle500(errorObj) {
    let errorMessage;

    errorMessage = `Código do erro: ${errorObj.status}, ` + `menssagem: ${errorObj.erro}`;

    this.utilServiece.presentAlert('Não foi possível acessar',
      "Servidor temporariamente indisponivel, informe ao administrador erro: "
      + errorObj.status + ' - ' + JSON.parse(errorObj.error).error);

      this.utilServiece.loadingDemiss(); 
  }
  handle403(errorObj) {
    // this.storage.setLocalUser(null);
    console.log(errorObj.message);
    //:console.log("error" + errorObj.message + 'Erro ' + errorObj.status + ': ' + errorObj.error);
    this.utilServiece.presentAlert('Não foi possível acessar', errorObj.status + ': ' + errorObj.error);

    this.utilServiece.loadingDemiss();
    //this.router.navigate(['acessonegado']);

  }

  handle401() {
    this.utilServiece.presentAlert('Não foi possível acessar', 'Erro 401: falha de autenticação');
    // this.toastr.error('Email ou senha incorretos', 'Erro 401: falha de autenticação');

    this.utilServiece.loadingDemiss();
     
  }

  handle422(errorObj) {
    let s: string = '';
    for (var i = 0; i < errorObj.errors.length; i++) {
      s = s + '<p><strong>' + errorObj.errors[i].fieldName + "</strong>: " + errorObj.errors[i].message + '</p>';
    }

    this.utilServiece.loadingDemiss();
    // this.toastr.error(s, 'Erro 422: Validação');
    
  }

  handleDefaultEror(errorObj) {
    this.utilServiece.presentAlert('Não foi possível acessar', "informe ao administrador erro: "
      + errorObj.status + ' - ' + JSON.parse(errorObj.error).error);
   
      this.utilServiece.loadingDemiss();
  }

  private listErrors(messages: FieldMessage[]): string {
    let s: string = '';
    for (var i = 0; i < messages.length; i++) {
      //   console.log( messages[i].fieldName );

      s = s + '<p><strong>' + messages[i].fieldName + "</strong>: " + messages[i].message + '</p>';
    }
    return s;
  }
}

export const ErrorInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: ErrorInterceptor,
  multi: true,
};
*/