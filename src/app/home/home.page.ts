import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { ResumoDTO } from '../pages/modulo1/home/gramatica/home-gramatica/models/Resumo-DTO';
import { API_CONFIG } from '../config/api.config';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  isAndroid: boolean = false;
  isloading: boolean = true;
  resumoDTO: ResumoDTO = {} as ResumoDTO;
  percentual;
  constructor(platform: Platform ,
    private http: HttpClient,
    private router: Router,) { 
      this.isAndroid = platform.is('android');}

    ngOnInit() {
      this.isloading = true;
      this.http.get<ResumoDTO>(`${API_CONFIG.baseUrl}/gramatica/resumoverbos`)
        .toPromise()
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

  hidden: boolean = false;
  fullScreen: boolean = false;
  topFlag: boolean = false;
  tintColor: string = '#108ee9';
  unselectedTintColor: string = '#888';
  tabbarStyle: object = { height: '400px' };
  selectedIndex: number = 1;

  showTabBar(event) {
    event.preventDefault();
    this.hidden = !this.hidden;
  }

  showNextTabBar(event) {
    event.preventDefault();
    const PANE_COUNT = 4;
    if (this.selectedIndex == PANE_COUNT - 1) {
      this.selectedIndex = 0;
    } else {
      this.selectedIndex++;
    }
    console.log('selectedIndex: ', this.selectedIndex);
  }

  showFullScreen(event) {
    event.preventDefault();
    this.fullScreen = !this.fullScreen;
    this.tabbarStyle = this.fullScreen
      ? {
          position: 'fixed',
          height: '100%',
          width: '100%',
          top: 0
        }
      : { height: '400px' };
  }

  changePosition(event) {
    event.preventDefault();
    this.topFlag = !this.topFlag;
  }

  tabBarTabOnPress(pressParam: any) {
    console.log('onPress Params: ', pressParam);
    this.selectedIndex = pressParam.index;
  }
}
