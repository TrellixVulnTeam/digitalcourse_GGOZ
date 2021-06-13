import { UtilsService } from './../../../../../services/utils.service';
import { HomeGramaticaVerbService } from 'src/app/services/home-gramatica-verb.service';
import { AtividadeVerbo } from './../../../../../models/atividade-verbo';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-edit-segmento-presente-negativa',
  templateUrl: './edit-segmento-presente-negativa.page.html',
  styleUrls: ['./edit-segmento-presente-negativa.page.scss'],
})
export class EditSegmentoPresenteNegativaPage implements OnInit {

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


    onTranslatenegativo() {
      this.utilService.preloadLogin(); 
      
    let texto: string = this.atividadeVerb.atividadesverbais.presente.negativo.frases.fraseingles;
 
    let direcao: string;
    if (this.translator) { 
      direcao = 'translatorentopt' ;
      texto = this.atividadeVerb.atividadesverbais.presente.negativo.frases.fraseingles;
    } else { 
      direcao = 'translatorpttoen' ;

      texto = this.atividadeVerb.atividadesverbais.presente.negativo.frases.fraseportugues;
    }; 

    this.homeGramaticaVerbService.ontranlator(direcao,texto)
      .then(
        rest => {
          var json_data = (rest);
          this.utilService.loadingDemiss();
          console.log(json_data); 
          this.texttraduzido = this.atividadeVerb.atividadesverbais.presente.negativo.frases.status;
          this.atividadeVerb.atividadesverbais.presente.negativo.frases = rest;
          this.atividadeVerb.atividadesverbais.presente.negativo.frases.status = this.texttraduzido
  
        }
      );
 
    }
  }