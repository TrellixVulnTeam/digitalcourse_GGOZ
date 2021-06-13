import { AtividadeVerbo } from './../../../../../models/atividade-verbo';
import { Component, Input, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { HomeGramaticaVerbService } from 'src/app/services/home-gramatica-verb.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-edit-segmento-presentecontinuo',
  templateUrl: './edit-segmento-presentecontinuo.page.html',
  styleUrls: ['./edit-segmento-presentecontinuo.page.scss'],
})
export class EditSegmentoPresentecontinuoPage implements OnInit {
  texttraduzido: string;
  translator: boolean = true;
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
  }
  async helppresent() {
 
    let texto ='';
    if(this.translator)  texto =  this.atividadeVerb.atividadesverbais.presentecontinuo.descricaoingles;
    else texto =  this.atividadeVerb.atividadesverbais.presentecontinuo.descricao;
     const toast = await this.toastCtrl.create({
      header: 'Present Continuous',
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
  }
  onTranslateafirmativo() {
    this.utilService.preloadLogin();

    let texto: string = this.atividadeVerb.atividadesverbais.presentecontinuo.frases.fraseingles;

    let direcao: string;
    if (this.translator) {
      direcao = 'translatorentopt';
      texto = this.atividadeVerb.atividadesverbais.presentecontinuo.frases.fraseingles;
    } else {
      direcao = 'translatorpttoen';

      texto = this.atividadeVerb.atividadesverbais.presentecontinuo.frases.fraseportugues;
    };
    this.homeGramaticaVerbService.ontranlator(direcao,texto)
    .then(
      rest => {
        var json_data = (rest);
        this.utilService.loadingDemiss();
        console.log(json_data); 
        this.texttraduzido = this.atividadeVerb.atividadesverbais.presentecontinuo.frases.status;
        this.atividadeVerb.atividadesverbais.presentecontinuo.frases = rest;
        this.atividadeVerb.atividadesverbais.presentecontinuo.frases.status = this.texttraduzido

      }
    );
  }

}