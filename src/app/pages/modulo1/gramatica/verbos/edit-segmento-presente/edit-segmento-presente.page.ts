import { AtividadeVerbo } from './../../../../../models/atividade-verbo';
import { Component, Input, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-edit-segmento-presente',
  templateUrl: './edit-segmento-presente.page.html',
  styleUrls: ['./edit-segmento-presente.page.scss'],
})
export class EditSegmentoPresentePage implements OnInit {
  texttraduzido: string;
  translator: boolean = true;
  @Input() atividadeVerb:AtividadeVerbo;
  segmentModel: string = 'Afirmativa';

  thumbStyle = {
    width: '32px',
    height: '32px'
  };

  constructor(
    public toastCtrl: ToastController
  ) { }

  ngOnInit() {
  }
  async helppresent() {
    let texto ='';
    if(this.translator)  texto =  'We use the present simple for: things that we do regularly, facts and truths,  habits, permanent situations';
    else texto =  'Usamos o presente simples para: coisas que fazemos regularmente, fatos e verdades, hábitos, situações permanentes';
    /*this._toast.info('We use the present simple for: things that we do regularly, facts and truths,  habits, permanent situations', 6000,
  ()=>{ this._toast.hide()},true,'middle' );*/
    const toast = await this.toastCtrl.create({
      header: 'Present Sample',
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

  segmentChanged(event){
    console.log(this.segmentModel); 
    console.log(event);
  }

  invertTranslator() {
    this.translator = !this.translator;
  }
}
