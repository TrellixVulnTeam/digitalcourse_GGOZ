import { AtividadeVerbo } from './../../../../../models/atividade-verbo';
import { Component, Input, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { HomeGramaticaVerbService } from 'src/app/services/home-gramatica-verb.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-edit-segmento-futuro',
  templateUrl: './edit-segmento-futuro.page.html',
  styleUrls: ['./edit-segmento-futuro.page.scss'],
})
export class EditSegmentoFuturoPage implements OnInit {

  texttraduzido: string;
  translator: boolean = true;
  @Input()  rulers: string;

  @Input() atividadeVerb: AtividadeVerbo;


  thumbStyle = {
    width: '32px',
    height: '32px'
  };

  constructor(
    public toastCtrl: ToastController,
    private homeGramaticaVerbService: HomeGramaticaVerbService,
    private utilService: UtilsService
  ) { }

  ngOnInit() {
    /*let direcao = 'translatorpttoen';
    let texto = this.atividadeVerb.atividadesverbais.futuro.regra
    if (this.translator)
      this.homeGramaticaVerbService.ontranlator(direcao, texto)
        .then(
          rest => {
            this.rulers = rest.fraseportugues;
          }
        )
        */
  }
  async helppresent() {
    let texto ='';
    if(this.translator)  texto =  this.atividadeVerb.atividadesverbais.futuro.descricaoingles;
    else texto =  this.atividadeVerb.atividadesverbais.futuro.descricao;
    /*this._toast.info('We use the present simple for: things that we do regularly, facts and truths,  habits, permanent situations', 6000,
  ()=>{ this._toast.hide()},true,'middle' );*/
    const toast = await this.toastCtrl.create({
      header: 'Simple Future',
      message: texto,
      position: 'middle',
      buttons: [
        {
          text: 'ok',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    await toast.present();

    const { role } = await toast.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }


  invertTranslator() {
    this.translator = !this.translator;
  /*  let direcao = 'translatorpttoen'
    let texto = this.atividadeVerb.atividadesverbais.futuro.regra
    if (this.translator)
      this.homeGramaticaVerbService.ontranlator(direcao, texto)
        .then(
          rest => {
            this.rulers = rest.fraseportugues;
          }
        )
        */
  }
  onTranslateafirmativo() {
    this.utilService.preloadLogin();

    let texto: string = this.atividadeVerb.atividadesverbais.futuro.frases.fraseingles;

    let direcao: string;
    if (this.translator) {
      direcao = 'translatorentopt';
      texto = this.atividadeVerb.atividadesverbais.futuro.frases.fraseingles;
    } else {
      direcao = 'translatorpttoen';

      texto = this.atividadeVerb.atividadesverbais.futuro.frases.fraseportugues;
    };
    this.homeGramaticaVerbService.ontranlator(direcao, texto)
      .then(
        rest => {
          var json_data = (rest);
          this.utilService.loadingDemiss();
          console.log(json_data);
          this.texttraduzido = this.atividadeVerb.atividadesverbais.futuro.frases.status;
          this.atividadeVerb.atividadesverbais.futuro.frases = rest;
          this.atividadeVerb.atividadesverbais.futuro.frases.status = this.texttraduzido

        }
      );
  }

}