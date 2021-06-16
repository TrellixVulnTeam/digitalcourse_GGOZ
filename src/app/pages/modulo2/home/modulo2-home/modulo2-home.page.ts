import { Router } from '@angular/router';
import { IonInfiniteScroll, LoadingController } from '@ionic/angular';
import { Subject } from 'rxjs';
import { AtividadeSentencesAllSitDTO } from './../../../../models/atividade-sentences-all-sit-dto';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Modulo2Service } from 'src/app/services/modulo2.service';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-modulo2-home',
  templateUrl: './modulo2-home.page.html',
  styleUrls: ['./modulo2-home.page.scss'],
})
export class Modulo2HomePage implements OnInit {


  value: string = '';
  url: string;
  itemss: AtividadeSentencesAllSitDTO[] = [];
  page: number = 0;
  last: boolean;
  loadingcnt:any;
  private subject: Subject<string> = new Subject(); 
data:boolean;
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  constructor(
    private httpConfigService: Modulo2Service, 
    private router:Router,
    public loadingCtrl: LoadingController) { }
    
   
  
  ngOnInit() {
    this.data=false;
    //while(!this.data)
    {
    this.httpConfigService.listatividadesopen(  this.page)
      .then(response => { 
        let start = this.itemss.length;
        this.itemss = this.itemss.concat(response['content']);
        let end = this.itemss.length - 1;
         
        this.last = response.last;
        this.page++;
        this.data=true;
        console.log(this.page);
        console.log(this.itemss);
      },
        error => {
          console.log(error);
        });
      }
  

    this.subject.pipe(
      debounceTime(1000)
    ).subscribe(searchTextValue => {
      console.log(searchTextValue);
      this.getLista(false, "");
      ;
    });
  }
  onKeyUp(event) {
    this.itemss=[];
    this.page=0;
    this.subject.next(event.target.value);
    //  this.compararfrase();
  }
  getLista(isFirstLoad: boolean, event) {
    this.presentLoading();
    this.httpConfigService.listatividadesopen(  this.page)
      .then(response => { 
        let start = this.itemss.length;
        this.itemss = this.itemss.concat(response['content']);
        let end = this.itemss.length - 1;
        if (isFirstLoad)
          event.target.complete();
        this.last = response.last;
        this.page++;
        this.data=true;
        console.log(this.page);
        console.log(this.itemss);
      },
        error => {
          console.log(error);
        });

  }

  doInfinite(event) {

    this.getLista(true, event);
    setTimeout(() => {
      event.target.complete();
    }, 1000);
  }
 
 
  submit() {
    this.getLista(false, "");
  }
 

  onClick(id) {
    this.router.navigate(['sentencas-home/',id])
  }
  
    async presentLoading() {
      this.loadingcnt = await this.loadingCtrl.create({
        message: 'Please wait...',
        duration: 500
      });

      await this.loadingcnt.present();
    }
		  
}
