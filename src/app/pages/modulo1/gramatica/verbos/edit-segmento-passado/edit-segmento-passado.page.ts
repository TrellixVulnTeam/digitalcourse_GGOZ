import { AtividadeVerbo } from './../../../../../models/atividade-verbo';
import { Component, Input, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { HomeGramaticaVerbService } from 'src/app/services/home-gramatica-verb.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-edit-segmento-passado',
  templateUrl: './edit-segmento-passado.page.html',
  styleUrls: ['./edit-segmento-passado.page.scss'],
})
export class EditSegmentoPassadoPage implements OnInit {

  texttraduzido: string;
  translator: boolean = true;
  @Input() rulers: string;

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
    let texto = this.atividadeVerb.atividadesverbais.passado.regra
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
    let texto = '';
    if (this.translator) texto = this.atividadeVerb.atividadesverbais.passado.descricaoingles;
    else texto = this.atividadeVerb.atividadesverbais.passado.descricao;
    const toast = await this.toastCtrl.create({
      header: 'Simple Past',
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
      let texto = this.atividadeVerb.atividadesverbais.passado.regra
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

    let texto: string = this.atividadeVerb.atividadesverbais.passado.frases.fraseingles;

    let direcao: string;
    if (this.translator) {
      direcao = 'translatorentopt';
      texto = this.atividadeVerb.atividadesverbais.passado.frases.fraseingles;
    } else {
      direcao = 'translatorpttoen';

      texto = this.atividadeVerb.atividadesverbais.passado.frases.fraseportugues;
    };
    this.homeGramaticaVerbService.ontranlator(direcao, texto)
      .then(
        rest => {
          var json_data = (rest);
          this.utilService.loadingDemiss();
          console.log(json_data);
          this.texttraduzido = this.atividadeVerb.atividadesverbais.passado.frases.status;
          this.atividadeVerb.atividadesverbais.passado.frases = rest;
          this.atividadeVerb.atividadesverbais.passado.frases.status = this.texttraduzido

        }
      );
  }

}