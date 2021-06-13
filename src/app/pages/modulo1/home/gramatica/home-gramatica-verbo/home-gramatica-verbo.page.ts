import { API_CONFIG } from './../../../../../config/api.config';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResumoDTO } from '../home-gramatica/models/Resumo-DTO';
import { HomeGramaticaVerbService } from 'src/app/services/home-gramatica-verb.service';

@Component({
  selector: 'app-home-gramatica-verbo',
  templateUrl: './home-gramatica-verbo.page.html',
  styleUrls: ['./home-gramatica-verbo.page.scss'],
})
export class HomeGramaticaVerboPage implements OnInit {
  isloading: boolean = true;
  resumoDTO: ResumoDTO = {} as ResumoDTO;
  percentual;
  constructor(
    private http: HttpClient,
    private router: Router,
    private homeGramaticaVerbService:HomeGramaticaVerbService) { }

  ngOnInit() {
    this.isloading = true;
   this.homeGramaticaVerbService.resumoverb()
      .then( 
        rest => {
          this.resumoDTO = rest;
          this.percentual = this.resumoDTO.qtdquit / this.resumoDTO.qtddaberto;
          this.isloading = false;
        },
        erro => {

          this.isloading = true;
          //this.router.navigate(['/error-no-server'])
        }
      ).catch(
        erro => {
        }
      )
  }

}
