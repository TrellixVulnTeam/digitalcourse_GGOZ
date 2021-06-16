import { SentencesSituacao } from './../../../../models/sentences-situacao';
import { LoadingController } from '@ionic/angular';
import { Subject } from 'rxjs';
import { Modulo2Service } from './../../../../services/modulo2.service';
import { AtividadeSentencesAllSit } from './../../../../models/atividade-sentences-all-sit';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sentencas-home',
  templateUrl: './sentencas-home.page.html',
  styleUrls: ['./sentencas-home.page.scss'],
})
export class SentencasHomePage implements OnInit {
  value: string = '';
  page: number = 0;
  last: boolean;
  loadingcnt:any;
  private subject: Subject<string> = new Subject(); 

  public folder: string;
  atividadeSentencesAllSit: AtividadeSentencesAllSit;
  tempoverbal: string = 'A fazer';
  isloading: boolean = true;
  listasegmento: any[] = ['A fazer', 'Concluidos'];
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private modulo2Service: Modulo2Service, 
    public loadingCtrl: LoadingController
  ) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    this.modulo2Service.findbyidsentencesallsit(this.folder)
      .then(
        rest => {
          this.atividadeSentencesAllSit = rest;
          console.log(rest);
          this.isloading=false
          
        }
      )
  }
  onLeftClick() {
    this.router.navigate(['home/modulo2-home'])
  }
  choose(event) {
    console.log('index: ', event.selectedIndex, 'value: ', event.value);
    this.tempoverbal = event.value;
  }
onClick(situacao:SentencesSituacao){
console.log(situacao);
this.modulo2Service.atividadeSentencesAllSit={} as AtividadeSentencesAllSit;
this.modulo2Service.atividadeSentencesAllSit=this.atividadeSentencesAllSit;
this.modulo2Service.id_atividadeSentencesAllSit=this.atividadeSentencesAllSit.id;
this.modulo2Service.situacao=situacao;

  this.router.navigate(['modulo2-chat']);
}
}
