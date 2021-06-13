import { Router } from '@angular/router';
import { ResumoDTO } from './../../../home/gramatica/home-gramatica/models/Resumo-DTO';
import { HomeGramaticaVerbService } from 'src/app/services/home-gramatica-verb.service';

import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { IonInfiniteScroll, LoadingController } from '@ionic/angular';
import { UtilsService } from 'src/app/services/utils.service';
import { BaseVerbDto } from 'src/app/models/base-verb-dto';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-list-verb-aberto',
  templateUrl: './list-verb-aberto.page.html',
  styleUrls: ['./list-verb-aberto.page.scss'],
  styles: [ 
   
  ]
})
export class ListVerbAbertoPage implements OnInit {

  value: string = '';
  url: string;
  itemss: BaseVerbDto[] = [];
  page: number = 0;
  last: boolean;
  loadingcnt:any;
  private subject: Subject<string> = new Subject(); 

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  constructor(
    private httpConfigService: HomeGramaticaVerbService, 
    private router:Router,
    public loadingCtrl: LoadingController) { }
    
   
  
  ngOnInit() {

    this.getLista(false, "");

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
    this.httpConfigService.loadverbsaberto(this.value, this.page)
      .then(response => { 
        let start = this.itemss.length;
        this.itemss = this.itemss.concat(response['content']);
        let end = this.itemss.length - 1;
        if (isFirstLoad)
          event.target.complete();
        this.last = response.last;
        this.page++;
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
    this.router.navigate(['edit-verb/',id])
  }
  
    async presentLoading() {
      this.loadingcnt = await this.loadingCtrl.create({
        message: 'Please wait...',
        duration: 500
      });

      await this.loadingcnt.present();
    }
		  
 

 

}
