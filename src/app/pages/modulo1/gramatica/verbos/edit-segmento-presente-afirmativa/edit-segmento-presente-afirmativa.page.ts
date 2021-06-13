import { UtilsService } from './../../../../../services/utils.service';
import { HomeGramaticaVerbService } from 'src/app/services/home-gramatica-verb.service';
import { AtividadeVerbo } from './../../../../../models/atividade-verbo';
import { Component, OnInit, Input } from '@angular/core';
 
@Component({
  selector: 'app-edit-segmento-presente-afirmativa',
  templateUrl: './edit-segmento-presente-afirmativa.page.html',
  styleUrls: ['./edit-segmento-presente-afirmativa.page.scss'],
})
export class EditSegmentoPresenteAfirmativaPage implements OnInit {
  texttraduzido: string;
  translator: boolean = true;
  @Input() atividadeVerb?:AtividadeVerbo;

  constructor(
    private homeGramaticaVerbService:HomeGramaticaVerbService,
    private utilService:UtilsService
  ) { }

  ngOnInit() {
    console.log(this.atividadeVerb);
  }
  invertTranslator() {
    this.translator = !this.translator;
  }


    onTranslateafirmativo() {
      this.utilService.preloadLogin(); 
      
    let texto: string = this.atividadeVerb.atividadesverbais.presente.afirmativo.frases.fraseingles;
 
    let direcao: string;
    if (this.translator) { 
      direcao = 'translatorentopt' ;
      texto = this.atividadeVerb.atividadesverbais.presente.afirmativo.frases.fraseingles;
    } else { 
      direcao = 'translatorpttoen' ; 

      texto = this.atividadeVerb.atividadesverbais.presente.afirmativo.frases.fraseportugues;
    }; 

    this.homeGramaticaVerbService.ontranlator(direcao,texto)
      .then(
        rest => {
          var json_data = (rest);
          this.utilService.loadingDemiss();
          console.log(json_data); 
          this.texttraduzido = this.atividadeVerb.atividadesverbais.presente.afirmativo.frases.status;
          this.atividadeVerb.atividadesverbais.presente.afirmativo.frases = rest;
          this.atividadeVerb.atividadesverbais.presente.afirmativo.frases.status = this.texttraduzido
  
        }
      );
 
  }
}
